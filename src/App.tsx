import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import bckgnd from "./backgroundwpcp.webp";
import { Routes, Route } from "react-router-dom";
import EmployeesTable from './Components/EmployeesTable/EmployeesTable';
import Error from './Components/Error/Error';
import { StyledImg, StyledMain } from './styles/styles';

/**
 * @component
 * @description The entire application and all routes are set on this component
 */
const App:React.FC = () => {
  	return (
		<div className="App">
      			<StyledImg src={bckgnd} alt="fond d'écran de l'application" />
			<Header/>
			<StyledMain >
				<Routes>
					<Route path="/" element={<Form/>} />
					<Route path="/employees" element={<EmployeesTable/>} />
					<Route path="/*" element={<Error/>} />
				</Routes>
			</StyledMain>
    	</div>
  	);
}

export default App;
