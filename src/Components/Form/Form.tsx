import React, { useState, useRef } from "react";
import FormInput from '../FormInput/FormInput';
import {americanStates, americanState} from '../../models/americanStates';
import { departments, department } from '../../models/departments';
import {useAppDispatch } from "../../hooks";
import { AppDispatch } from '../../store';
import { Employee} from '../../Store/Employees';
import { addNewEmployee } from '../../Store/Employees';
import { customStyles } from '../CustomSelect/CustomSelectStyle';
import Select from 'react-select';
import {ErrorDiv, StyledButton, StyledForm, StyledSelectLabel, StyledLayout} from "../../styles/styles"
import { Modale } from 'tsmodale';


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
	const [newEmployee, setNewEmployee] = useState<Employee>(emptyEmployee)

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

	// const onChange = (date: any, dateString: any):void  => {
	// setNewEmployee((newEmployee) => ({
	// 	...newEmployee,
	// 	"birthDate": dateString
	// 	}));
  	// }

	
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

	// Max value for the birthDate input, who is today less 18 years. I think in this case all of the employees have 18 or more, we don't take childs at work in normal enterprises
	const minDateForWork = ():string =>  {
		let minDate:string = "";
		let year:number = (parseInt(today.split("-")[0]) - 18);
		let month:string = (today.split("-")[1]);
		let day:string = (today.split("-")[2]);
		minDate = `${year.toString()}-${month}-${day}`;
		return minDate
	}


 	const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
	 console.log(newEmployee)

	return (
		<>
		<StyledForm 
			>

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
			{/* <DatePicker
				id="datePicker-1"
				value={newEmployee.birthDate}
				// onChange={handleChangeBirthDate}
				// label="DatePicker Label"
				formatStyle="medium"
				// required
            	// error="Select a date is Required"
            	placeholder="Select a date"
			/> */}

			{/* <DatePicker 
				onChange={onChange}
				defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList}
				// value={newEmployee.birthDate}
				 /> */}
			<FormInput 
				type="date" 
				id="startDay" 
				min="1990-01-01" 
				max={today} 
				children="Start day"
				value={newEmployee.startDay}
				handleInput={handleChangeInput} 
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
				placeholder="Select one"
				id="state"
				onChange={(e) =>handleChangeState(e)}  
				ref={selectStateRef}
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
				placeholder="Select one"
				id="department"
				onChange={(e) =>handleChangeDepartment(e)}  
				ref={selectDepartmentRef}
				// isClearable={true}
				/>

			{invalidForm ? 
			<ErrorDiv className="error" >Veuillez compléter correctement tous les champs </ErrorDiv>
			:
			"	"
			}
			<StyledButton onClick={(e) => validForm(e)}  >Save</StyledButton>
			
		</StyledForm>

		{showModale && 
			<StyledLayout>
				<Modale 
					text="Congratulations, you successly created a new employee !" 
					buttonText="OK"
					colour="#8acd32" 
					hideModale={hideModale} 
					// autoclose={2000}
					/>
					
				</StyledLayout>
		}

		</>

	)
}

export default Form;
