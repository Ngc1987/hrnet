import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import Error from '../Components/Error/Error';
import Form from '../Components/Form/Form';
import { store } from '../Store/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

describe('Error component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(
                  <BrowserRouter>
                        <Error />
                  </BrowserRouter>
              , div);
	})
    test('should display the error text on the page',  () => {

        render(
            <BrowserRouter>
				<Provider store={store}>
					<Error />
					<Form/>
				</Provider>
            </BrowserRouter>
        );
        // Check if the text on the page appears
        const errorText = screen.getByTestId("error");
        expect(errorText).toBeInTheDocument();

		// Check if on click on the error link (link to home) the form component appears
		const errorLink = screen.getByTestId("errorLink");
		const form = screen.getByTestId("form");
		fireEvent.click(errorLink);
		expect(form).toBeInTheDocument();
    })
})