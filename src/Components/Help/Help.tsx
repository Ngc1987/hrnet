import React, {useState} from 'react';
import { HelpButton} from "../../styles/styles";
import "../../styles/help.scss";


/**
 * @component
 * @description Component Help, displayed on the EmployeesTable component, when click on the "Help", instructions appears just below, and "Help" button becomes "Close" button
 */
const Help:React.FC = () => {

	const [showHelp, setShowHelp] = useState<boolean>(false);

	return (

		<>
			<HelpButton onClick={() => setShowHelp(!showHelp)} >{showHelp ? "Close" : "Help"}</HelpButton>
				
			<div className={showHelp ? "help visible" : "help hidden"} >
				{showHelp && 
					<>
						<p>Click on the column title to sort the elements. One time to ascending sort, two times for descending sort, three times to initial.</p>
						<p>You can filter with differents conditions, click on the logo at the right of the column title and select the options you need.</p>
					</>
				}

			</div>
		</>
	)
}

export default Help;
