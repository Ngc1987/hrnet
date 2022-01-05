import { render, screen, fireEvent } from '@testing-library/react';
import Header from "../Components/Header/Header";
import { BrowserRouter} from "react-router-dom";
import EmployeesTable from '../Components/EmployeesTable/EmployeesTable';
import Form from '../Components/Form/Form';

import { store } from '../Store/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

describe('Header component', () => {

    test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(
                  <BrowserRouter>
                        <Header />
                  </BrowserRouter>
              , div);
	})
    test('should dispatch the good page on click on the home button and the employees button',  () => {

        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Form/>
                    <EmployeesTable/>
                </Provider>
            </BrowserRouter>

        );
        // Check if the text on the header appears
        const headerText = screen.getByText(/HrNet/);
        expect(headerText).toBeInTheDocument();
        
        // Select the two buttons on the header 
        const homeButton = screen.getByTestId("homeButton");
        const employeesButton = screen.getByTestId("employeesButton");
        // On home button click, check if the form appears (it contains "Create" word on it)
        fireEvent.click(homeButton);
        const formText = screen.getByText(/Create/);
        expect(formText).toBeInTheDocument();
        // On Employees button click, check if the table appears
        fireEvent.click(employeesButton);
        const table = screen.getByTestId("employeesTable");
        expect(table).toBeInTheDocument();
    })
})