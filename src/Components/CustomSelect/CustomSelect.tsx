import React from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import "../../index.css";
import { StyledLabel } from '../../styles/styles';
import { customStyles } from './CustomSelectStyle';

interface SelectProps{
  id: string;
  datas?: any;
  children?: string;
  defaultInputValue?: string;
  handleInput: (event: any) => void;
  styles?: StylesConfig<unknown, false, GroupBase<unknown>> | any;
  ref: React.MutableRefObject<undefined>;
  error?: string;
}

const CustomSelect:React.FC<SelectProps> = ({id, datas,children, defaultInputValue, handleInput, error}) => {

	return (
		<>
			<StyledLabel htmlFor={id} >{children}</StyledLabel>
			<Select 
				styles={customStyles} 
				theme={(theme)=> ({...theme, borderRadius: 10})}
				options={datas} 
				placeholder="Select one"
				id={id} 
				defaultInputValue={defaultInputValue}
				onChange={(e) =>handleInput(e)}  
			/>
			{error &&
				<p>{error}</p>
			}
		</>
	)
}

export default CustomSelect;


