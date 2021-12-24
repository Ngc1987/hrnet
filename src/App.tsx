import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import bckgnd from "./background3.png";
import { Routes, Route, Link } from "react-router-dom";
import EmployeesTable from './Components/EmployeesTable/EmployeesTable';
import styled, { StyledComponent } from "styled-components";

const StyledImg: StyledComponent<"img", any, {}, never> = styled.img`
	position: absolute;
	inset: 0;
	z-index: -50;
	object-fit: cover;
	min-width: 100%;
	min-height: 100%;
`
const StyledMain: StyledComponent<"main", any, {}, never> = styled.main`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	min-height: 100vh;
	min-width: 100vw;
`


const App:React.FC = () => {
  	return (
		<div className="App">
      			<StyledImg src={bckgnd} alt="" />
			<Header/>
			<StyledMain >
				<Routes>
					<Route path="/" element={<Form/>} />
					<Route path="/employees" element={<EmployeesTable/>} />
				</Routes>
			</StyledMain>
    	</div>
  	);
}

export default App;
