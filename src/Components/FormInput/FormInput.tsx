import React from 'react';

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
			
			<label 
				htmlFor={id} >{children}</label>
			<input 
				onChange={(e) =>handleInput(e)} 
				value={value}
				className=" mt-1 h-8 p-1 w-full rounded-lg focus:shadow outline-none transition" 
				type={type} 
				id={id} 
				placeholder={placeholder}
				min={min} 
				max={max}/>
			
		</>
	)
}

export default FormInput;
