import React, {useState} from 'react';
import {StyledHelpDiv, HelpButton} from "../../styles/styles";
import "../../styles/EmployeesTable.scss"



const Help:React.FC = () => {

	const [showHelp, setShowHelp] = useState<boolean>(false);


	return (

		<>
			<HelpButton onClick={() => setShowHelp(!showHelp)} >{showHelp ? "Close" : "Help"}</HelpButton>
				
			<StyledHelpDiv className='help' >
				{showHelp && 
				<>
				<p>- Click on the column title to sort the elements. One time to ascending sort, two times for descending sort, three times to initial </p>
				<p>- You can filter with differents conditions, click on the logo at the right of the column title and select the options you need </p>
				</>}

			</StyledHelpDiv>
		</>
	)
}

export default Help;
