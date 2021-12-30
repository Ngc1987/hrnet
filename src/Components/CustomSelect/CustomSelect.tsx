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
}

const CustomSelect:React.FC<SelectProps> = ({id, datas,children, defaultInputValue, handleInput}) => {

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
		</>
	)
}

export default CustomSelect;


