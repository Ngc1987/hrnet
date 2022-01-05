import Form from "../Components/Form/Form";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import { store } from '../Store/store';
import { Provider } from 'react-redux';

describe('Form component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(
			  <Provider store={store}>
                <Form/>
			</Provider>
			  , div);
	})
    test('should show its content on the page',  () => {
        render(
            <BrowserRouter>
				<Provider store={store}>
					<Form/>
				</Provider>
            </BrowserRouter>
        );
		// Check if the children props, who is the value displayed for the label, appears on the page
		const form = screen.getByTestId("form");
		expect(form).toBeInTheDocument();

    })
})
