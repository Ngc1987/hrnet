import React, { useState, useRef, MutableRefObject } from 'react';
import FormInput from '../FormInput/FormInput';
import {americanStates, americanState} from '../../models/americanStates';
import { departments, department } from '../../models/departments';
import { RootState } from '../../store';
import { useAppSelector, useAppDispatch } from "../../hooks"
import { AppDispatch } from '../../store';
import { Employee, Employees } from '../../Store/Employees';
import { addNewEmployee } from '../../Store/Employees';
import { customStyles } from '../CustomSelect/CustomSelect';

import { DatePicker } from "react-rainbow-components";

import Select from 'react-select';
import styled from "styled-components";

const ErrorDiv = styled.div`
	font-size: 13px;
	color: red;
	align-self: center;
	margin-top: 10px;
`
const StyledButton = styled.div`
	font-size: 13px;
	color: white;
	background-color: #8acd32d1;
	transition: all 0.2s ease;
	border: none;
	cursor: pointer;


	:hover {
		box-shadow: 0 0 1px 1px #8acd32, 0 0 3px 3px #8acd32;
		background-color: #8acd32;
	}
`


const Form:React.FC = () => {

	// Fetch our employees state array
	const employees: Employees = useAppSelector((state: RootState) => state.employees);
	// console.log(employees);
	const dispatch: AppDispatch = useAppDispatch();
	// Datas of all the american states we need on our select states input
	const [states, setStates] = useState<americanState[]>(americanStates);
	// Datas of all the departments we need on our select departments input
	const [allDepartments, setDepartments] = useState<department[]>(departments);
	const [invalidForm, setInvalidForm] = useState(false);

	// Empty model to create a new employee
	const emptyEmployee = {
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

	// console.log(newEmployee)
	// Function to take the value of all the inputs, to put on our new employee state
	const handleChangeInput = (e: any):void => {
		// console.log(e.target.value)
		setNewEmployee((newEmployee) => ({
		...newEmployee,
		[e.target.id]: e.target.value
		}));
	}

	// Ref to the state select input
	const selectStateRef:any = useRef();
	// Ref to the department select input
	const selectDepartmentRef:any = useRef();
	// console.log(selectStateRef.current)
	// console.log(selectStateRef)


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

	const clearInputs = () => {
		setNewEmployee(emptyEmployee);
		selectStateRef.current.clearValue();
		selectDepartmentRef.current.clearValue();
	}

	function handleChangeBirthDate(date:any):void {
		setNewEmployee((newEmployee) => ({
			...newEmployee,
			"birthDate": date
		}));
  	}

	function validForm() {
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
			setInvalidForm(false)
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

	return (
		<form 
			className="flex shadow-3xl flex-col items-start w-full md:w-96 mx-3 mb-20 h-auto  mt-16 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 bg-black p-6 z-0"
			 >

			<h2 className="mb-4 text-xl self-center" >Create a new employee</h2>

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
				onChange={handleChangeBirthDate}
				// label="DatePicker Label"
				formatStyle="medium"
				// required
            	// error="Select a date is Required"
            	placeholder="Select a date"
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

			<h3 className="mt-4 text-lg self-center" >Adress</h3>

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
			
			<label className="mt-2" htmlFor="state" >State</label>
			<Select 
				styles={customStyles} 
				theme={(theme)=> ({...theme, borderRadius: 10})}
				options={states} 
				placeholder="Select one"
				className=" p-1 w-full rounded-lg focus:shadow outline-none transition" 
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

			<label className="mt-2" htmlFor="department" >Department</label>
			<Select 
				styles={customStyles} 
				theme={(theme)=> ({...theme, borderRadius: 10})}
				options={allDepartments} 
				placeholder="Select one"
				className=" p-1 w-full rounded-lg focus:shadow outline-none transition" 
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
			<StyledButton onClick={() => {validForm();}} className="self-center mt-4 py-1 px-3 rounded-lg border" >Save</StyledButton>
			
		</form>
	)
}

export default Form
