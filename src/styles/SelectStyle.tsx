// Just some styles for the React-Select plugin component
/**
 * @ignore
 */
export const customStyles = { 
		// Placeholder color
		placeholder: (defaultStyles: any) => {
			return {
				...defaultStyles,
				color: '#000000c1',
			}
		},
		// Options design
		option: (provided: any, state: any) => ({
			...provided,
			borderBottom: '1px dotted green',
			color: state.isSelected ? 'black' : 'black',
			background: state.isFocused ? "#00ff2020" : "white",
			cursor: "pointer"
		}),
		// Hide the separator on the right of the input
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
			boxShadow: state.menuIsOpen ? "0 0 1px 1px #fff, 0 0 3px 3px #fff" : "none",

  		}),
		// Valeur sélectionnée dans la liste
		singleValue: (provided: any, state:any) => {
			const opacity = 1 ;
			const transition = 'opacity 500ms';

			return { ...provided, opacity, transition};
		}
	}
