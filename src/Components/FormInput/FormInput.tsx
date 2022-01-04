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
	error?: string | boolean;
}

/**
 * @component
 * @description Component FormInput, for every input on the form, who don't come from an external library, pure html element
 */
const FormInput:React.FC<Props> = ({type, id, min, max, children, value, placeholder, handleInput, error}) => {
	console.log(error)
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

				{error && <p>{error}</p>}
		</>
	)
}

export default FormInput;
