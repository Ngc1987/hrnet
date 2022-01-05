import { render, screen } from '@testing-library/react';
import EmployeesTable from '../Components/EmployeesTable/EmployeesTable';
import { store } from "../Store/store";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

describe('EmployeesTable component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  		ReactDOM.render(
			  	<Provider store={store}>
				  	<EmployeesTable />
				</Provider>
				  , div);
	})
    test('should display the table',  () => {
        render(
				<Provider store={store}>
                	<EmployeesTable />
				</Provider>
        );
		// On Employees button click, check if the table appears
        const table = screen.getByTestId("employeesTable");
        expect(table).toBeInTheDocument();

    })
})