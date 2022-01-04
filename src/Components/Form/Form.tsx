import React, { useState, useRef, Suspense } from "react";
import {department, americanState} from '../../models/models';
import { departments, americanStates } from '../../Mocks/MockedDatas';
import {useAppDispatch } from "../../hooks";
import { AppDispatch } from '../../store';
import { Employee } from "../../models/models";
import { addNewEmployee } from '../../Store/Employees';
import { customStyles } from '../CustomSelect/CustomSelectStyle';
import {ErrorDiv, StyledButton, StyledForm, StyledSelectLabel, StyledLayout} from "../../styles/styles";
import Loading from "../Loading/Loading";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, {Day, DayValue } from 'react-modern-calendar-datepicker';

const Modale = React.lazy(() => import("../Utils/modale"));
const Select = React.lazy(() => import("react-select"));
const FormInput = React.lazy(() => import("../FormInput/FormInput"));

const Form:React.FC = () => {

	const dispatch: AppDispatch = useAppDispatch();
	// Datas of all the american states we need on our select states input
	const [states, setStates] = useState<americanState[]>(americanStates);
	// Datas of all the departments we need on our select departments input
	const [allDepartments, setDepartments] = useState<department[]>(departments);
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

	// Function to take the value of all the inputs, to put on our new employee state
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
	console.log(today)
	// Max value for the birthDate input, who is today less 18 years. I think in this case all of the employees have 18 or more, we don't take childs at work in normal enterprises
	const minDateForWork = ():string =>  {
		let minDate:string = "";
		let year:number = (parseInt(today.split("-")[0]) - 18);
		let month:string = (today.split("-")[1]);
		let day:string = (today.split("-")[2]);
		minDate = `${year.toString()}-${month}-${day}`;
		return minDate
	}


 	const dateFormatList: string[] = ['DD/MM/YYYY', 'DD/MM/YY'];
	 console.log(newEmployee)

	const [Day, setDay] = useState<DayValue>(null);
	console.log(Day)

	// if(Day) {
	// 	let day = "0"
	// 	if(Day.month < 10) {
	// 		day += Day.month
	// 	}
	// 	setNewEmployee((newEmployee) => ({
	// 	...newEmployee,
	// 	"birthDate": `${Day.day}/${day}/${Day.year}`
	// 	}));
	// }
	const setBirthDate = (e: any):void  => {
		console.log(typeof e)
		let month: string = "0"
		if(e.month < 10) {
			month += e.month
		}
		setNewEmployee((newEmployee) => ({
			...newEmployee,
			"birthDate": `${e.day}/${month}/${e.year}`
			}));
  	}

	return (
		<>
		<StyledForm 
			>

			<Suspense fallback={<Loading/>}>

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
				
			
			<FormInput 
				type="date" 
				id="birthDate" 
				min="1900-01-01" 
				max={minDateForWork()} 
				children="Date of birth"
				value={newEmployee.birthDate}
				handleInput={handleChangeInput} 
				/>

				<DatePicker
				value={Day}
				onChange={(e) => {setBirthDate(e); setDay(e)}}
				shouldHighlightWeekends
				/>
			
			<FormInput 
				type="date" 
				id="startDay" 
				min="1990-01-01" 
				max={today} 
				children="Start day"
				value={newEmployee.startDay}
				handleInput={handleChangeInput} 
				// placeholder={today}
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
				placeholder="Alabama"
				onChange={(e) =>handleChangeState(e)}  
				ref={selectStateRef}
				// defaultInputValue="Alabama"
				// isClearable={true}
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
				placeholder="Marketing"
				inputId="department"
				onChange={(e) =>handleChangeDepartment(e)}  
				ref={selectDepartmentRef}
				// isClearable={true}
				/>
			
			{invalidForm && <ErrorDiv className="error" >Veuillez compléter correctement tous les champs </ErrorDiv>}

			<StyledButton onClick={(e) => validForm(e)}  >Save</StyledButton>
			
		</Suspense>
			
		</StyledForm>

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
