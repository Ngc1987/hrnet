import React from 'react';
import { StyledLabel, StyledInput} from '../../styles/styles';

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
