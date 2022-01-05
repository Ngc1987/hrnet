import React, { useState, useRef, Suspense } from "react";
import {department, americanState} from '../../models/models';
import { sortedDepartments, sortedAmericanStates } from '../../Mocks/MockedDatas';
import {useAppDispatch } from "../../Store/hooks";
import { AppDispatch } from '../../Store/store';
import { Employee } from "../../models/models";
import { addNewEmployee } from '../../Store/Employees';
import { customStyles } from '../CustomSelect/CustomSelectStyle';
import {ErrorDiv, StyledButton, StyledForm, StyledSelectLabel, StyledLayout} from "../../styles/styles";
import Loading from "../Loading/Loading";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, {Day, DayValue } from 'react-modern-calendar-datepicker';
import "../../styles/datepicker.scss";

const Modale = React.lazy(() => import("../Utils/modale"));
const Select = React.lazy(() => import("react-select"));
const FormInput = React.lazy(() => import("../FormInput/FormInput"));

const Form:React.FC = () => {

	const dispatch: AppDispatch = useAppDispatch();
	// Datas of all the american states we need on our select states input
	const [states, setStates] = useState<americanState[]>(sortedAmericanStates);
	// Datas of all the departments we need on our select departments input
	const [allDepartments, setDepartments] = useState<department[]>(sortedDepartments);
	const [invalidForm, setInvalidForm] = useState<boolean>(false);

	// State to show or not the validation modale
	const [showModale, setShowModale] = useState<boolean>(false);
	// console.log(showModale)

	const hideModale = ():void => {
		setShowModale(false);
	}

	// Empty model to create a new employee
	const emptyEmployee:Employee = {
		"firstName": "",
		"lastName": "",
		"birthDate": "",
		"startDay": "",
		"street": "",
		"city": "",	
		"state": "",
		"zipcode": "",
		"department": ""
	}

	// Set the state with an empty employee
	const [newEmployee, setNewEmployee] = useState<Employee>(emptyEmployee);
	console.log(newEmployee)	

	// Function to take the value of all the classic inputs, to put on our new employee state
	const handleChangeInput = (e: { target: { id: string; value: string; }; }):void => {
		// console.log(e.target.value)
		setNewEmployee((newEmployee: any) => ({
		...newEmployee,
		[e.target.id]: e.target.value
		}));
	}

	// Ref to the state select input
	const selectStateRef:any = useRef();
	// Ref to the department select input
	const selectDepartmentRef:any = useRef();


	// Function to take the value of the state input, to put on our new employee state
	const handleChangeState = (e: any):void => {
		// console.log(e?.label)
		setNewEmployee((newEmployee) => ({
		...newEmployee,
		"state": e?.label
		}));
	}
	
	// Function to take the value of the department input, to put on our new employee state
	const handleChangeDepartment = (e: any):void => {
		// console.log(e?.value)
		setNewEmployee((newEmployee) => ({
		...newEmployee,
		"department": e?.label
		}));
	}

	// Function to make the two select components empty after the validation of the form
	const clearInputs = ():void => {
		setNewEmployee(emptyEmployee);
		selectStateRef.current.clearValue();
		selectDepartmentRef.current.clearValue();
	}

	function validForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();

		if(newEmployee.firstName.length < 3
		|| newEmployee.lastName.length < 3
		|| newEmployee.startDay === ""
		|| newEmployee.birthDate === ""
		|| newEmployee.street.length < 3
		|| newEmployee.city.length < 3
		|| newEmployee.state.length < 3
		|| newEmployee.department.length < 3
		|| newEmployee.zipcode < 999) {
			setInvalidForm(true)
		}
		else {
			dispatch(addNewEmployee(newEmployee));
			clearInputs();
			setInvalidForm(false);
			setShowModale(true);
		}
		console.log(newEmployee.zipcode)
	}

	// Max value for the startDay input, who is today every time
	const today:string = new Date().toISOString().split('T')[0];

	// Max value for the startDay input, default is today because i don't want to create a new employee for the future
	const minDateForWork = ():Day =>  {
		let year:number = (parseInt(today.split("-")[0]));
		let month:number = (parseInt(today.split("-")[1]));
		let day:number = (parseInt(today.split("-")[2]));

		let dateToShow:Day = {
			year: year,
			month: month,
			day: day
		}
		return dateToShow
	}
	// Max value for the birthDate input, who is today less 18 years. I think in this case all of the employees have 18 or more, we don't take childs at work in normal enterprises
	const minBirthDate = ():Day =>  {
		let year:number = (parseInt(today.split("-")[0]) - 18);
		let month:number = (parseInt(today.split("-")[1]));
		let day:number = (parseInt(today.split("-")[2]));

		let dateToShow:Day = {
			year: year,
			month: month,
			day: day
		}
		return dateToShow
	}
	
	// Need to create initial individual state for the react-modern-calendar-datepicker, because with typescript this dependencie need another date format than i have in my newEmployee state
	const [Day, setDay] = useState<DayValue>(minBirthDate());
	const [startDay, setStartDay] = useState<DayValue>(minDateForWork());
	
	// Function to transform the date value from the react-datepicker component, to the value i need for the newEmployee state birthdate
	const setBirthDate = (date: any):void  => {

		let month: string = "0";
		let day: string = "0";
		date.month < 10 ? month += date.month : month = date.month;
		date.day < 10 ? day += date.day : day = date.day;

		setNewEmployee((newEmployee) => ({
			...newEmployee,
			"birthDate": `${date.year}-${day}-${month}`
		}));
	}

	// Function to transform the date value from the react-datepicker component, to the value i need for the newEmployee state startDay
	const setStartDate = (date: any):void  => {

		let month: string = "0";
		let day: string = "0";
		date.month < 10 ? month += date.month : month = date.month;
		date.day < 10 ? day += date.day : day = date.day;

		setNewEmployee((newEmployee) => ({
			...newEmployee,
			"startDay": `${date.year}-${day}-${month}`
		}));
	}
	
	return (
		<>
			<Suspense fallback={<Loading/>}>
			<StyledForm data-testid="form">

				<h2>Create a new employee</h2>
				<FormInput 
					type="text" 
					id="firstName" 
					children="First Name"
					value={newEmployee.firstName}
					handleInput={(e) => handleChangeInput(e)} 
				/>
					
				<FormInput 
					type="text" 
					id="lastName" 
					children="Last Name"
					value={newEmployee.lastName}
					handleInput={handleChangeInput} 
				/>
					
				<StyledSelectLabel htmlFor="birthDate" >Birth Date</StyledSelectLabel>
				<DatePicker
					inputName="birthDate"
					value={Day}
					onChange={(date) => {setBirthDate(date); setDay(date)}}
					shouldHighlightWeekends
					maximumDate={minBirthDate()}
					inputPlaceholder="Select a date"
					inputClassName="datepicker"
					wrapperClassName="front"
				/>

				<StyledSelectLabel htmlFor="startDay">Start Day</StyledSelectLabel>
				<DatePicker
					inputName="startDay"
					value={startDay}
					onChange={(date) => {setStartDate(date); setStartDay(date)}}
					shouldHighlightWeekends
					maximumDate={minDateForWork()}
					inputPlaceholder="Select a date"
					inputClassName="datepicker"
					wrapperClassName="behind"
				/>

				<h3>Adress</h3>
				<FormInput 
					type="text" 
					id="street" 
					children="Street"
					value={newEmployee.street}
					handleInput={handleChangeInput} 
				/>
					
				<FormInput 
					type="text" 
					id="city" 
					children="City"
					value={newEmployee.city}
					handleInput={handleChangeInput} 
				/>
					
				<StyledSelectLabel htmlFor="state" >State</StyledSelectLabel>
				<Select 
					styles={customStyles} 
					theme={(theme)=> ({...theme, borderRadius: 10})}
					options={states} 
					inputId="state"
					placeholder="Select a state"
					onChange={(e) =>handleChangeState(e)}  
					ref={selectStateRef}
				/>
				
				<FormInput 
					type="number" 
					id="zipcode" 
					children="Zip Code"
					placeholder="83850"
					value={newEmployee.zipcode}
					handleInput={handleChangeInput} 
					/>

				<StyledSelectLabel htmlFor="department" >Department</StyledSelectLabel>
				<Select 
					styles={customStyles} 
					theme={(theme)=> ({...theme, borderRadius: 10})}
					options={allDepartments} 
					placeholder="Select a department"
					inputId="department"
					onChange={(e) =>handleChangeDepartment(e)}  
					ref={selectDepartmentRef}
					// isClearable={true}
					/>
				
				{invalidForm && <ErrorDiv className="error" >Veuillez compléter correctement tous les champs </ErrorDiv>}

				<StyledButton onClick={(e) => validForm(e)}  >Save</StyledButton>
				
				
			</StyledForm>
			</Suspense>

			{showModale && 
				<StyledLayout>
					<Suspense fallback={<Loading/>}>
						<Modale 
							text="Congratulations, you successly created a new employee !" 
							buttonText="OK"
							colour="#8acd32" 
							hideModale={hideModale} 
							// autoclose={2000}
							/>
					</Suspense>
				</StyledLayout>
			}

		</>

	)
}

export default Form;
