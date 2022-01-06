import React from 'react';
import { StyledLabel, StyledInput} from '../../styles/styles';

/**
 * Interface properties for the FormInput component
 * @ignore
 */
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


/**
* Renders a <FormInput /> component. It's a classic input for the form component, who don't come from an external library, it's pure html element, with the input and the label on one.
* @param {string} props.type - The type of the input needed (text, number, date...)
* @param {string} props.id - It's the id of the input, and the htmlFor of the label who needs to be the same
* @param {string} props.min - Minimum value of the input (for number or date for example)
* @param {string} props.max - Maximum value of the input (for number or date for example)
* @param {string} props.children - The name of the label you need to display
* @param {string | number} props.value - The value you want to show on the input
* @param {string} props.placeholder - If you need a placeholder put this prop
* @param {void} props.handleInput - A function you need on the onChange of the input (set a state for example)
*/
const FormInput:React.FC<Props> = ({type, id, min, max, children, value, placeholder, handleInput}) => {
	
	return (
		<>
			<StyledLabel 
				htmlFor={id} 
				data-testid="formInputLabel"
				>{children}</StyledLabel>
			<StyledInput 
				data-testid="formInput"
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
