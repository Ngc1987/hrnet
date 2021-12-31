import React from 'react';
import { StyledLabel} from '../../styles/styles';
import styled, {StyledComponent} from "styled-components";


const StyledInput: StyledComponent<"input", any, {}, never> = styled.input`
	padding: 5px;
	margin-top: 0.25rem;
	height: 2.2rem;
	width: 100%;
	border-radius: 10px;
	outline: none;
	transition: all 0.3s ease;
	border: none;

	:focus {
		box-shadow: 0 0 1px 1px #fff, 0 0 3px 3px #fff;
	}
`

interface Props {
	type: string;
	id: string;
	min?: string;
	max?: string;
	children: string;
	value: string | number;
	placeholder?: string
	handleInput: (event: any) => void;
}

const FormInput:React.FC<Props> = ({type, id, min, max, children, value, placeholder, handleInput}) => {

	return (
		<>
			
			<StyledLabel 
				htmlFor={id} >{children}</StyledLabel>
			<StyledInput 
				onChange={(e) =>handleInput(e)} 
				value={value}
				type={type} 
				id={id} 
				placeholder={placeholder}
				min={min} 
				max={max}/>
			
		</>
	)
}

export default FormInput;
