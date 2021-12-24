import React from 'react';
import Select, { OptionsOrGroups, GroupBase, StylesConfig } from 'react-select';
import "../../index.css";
// import { americanState } from '../../models/americanStates';
// import { department } from '../../models/departments';

interface SelectProps{
  id: string;
  datas?: any;
  children?: string;
  defaultInputValue?: string;
  handleInput: (event: any) => void;
  styles?: StylesConfig<unknown, false, GroupBase<unknown>> | any;
  ref: React.MutableRefObject<undefined>;
}



export const customStyles = { 
		option: (provided: any, state: any) => ({
			...provided,
			borderBottom: '1px dotted green',
			color: state.isSelected ? 'black' : 'black',
			background: state.isFocused ? "#00ff2020" : "white",
			cursor: "pointer"
		}),
		indicatorSeparator: (base: any) => ({
			...base,
			display: "none"
		}),
		// Container primaire
		container: (base: any) => ({
			...base,
			width: "100%",
		}),
		control: (base: any, state: any) => ({
			...base,
			transition: "all 0.3s ease",
			border: 0,
			// This line disable the blue border
			boxShadow: state.menuIsOpen ? "0 0 1px 1px #fff, 0 0 3px 3px #fff, 0 0 5px 5px #fff" : "none",
			// '&:hover': {
			// 	boxShadow: '0 0 1px 1px #fff, 0 0 2px 2px #fff, 0 0 3px 3px #fff'
			// }

  		}),
		// Valeur sélectionnée dans la liste
		singleValue: (provided: any, state:any) => {
			const opacity = 1 ;
			const transition = 'opacity 500ms';

			return { ...provided, opacity, transition };
		}
	}
const CustomSelect:React.FC<SelectProps> = ({id, datas,children, defaultInputValue, handleInput}) => {

		/**
 * @param {Object} provided -- the component's default styles
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 */
	function styleFn(provided: any, state: any) {
	return { ...provided, color: state.isFocused ? 'blue' : 'red' };
	}

	


	return (<>
					<label className="mt-2" htmlFor={id} >{children}</label>
					<Select 
						styles={customStyles} 
						theme={(theme)=> ({...theme, borderRadius: 10})}
						options={datas} 
						placeholder="Select one"
						className=" p-1 w-full rounded-lg focus:shadow outline-none transition" 
						id={id} 
						defaultInputValue={defaultInputValue}
						onChange={(e) =>handleInput(e)}  
						/>
				</>)
}

export default CustomSelect;


