import Loading from "../Components/Loading/Loading";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

describe('Loading component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(
			  <Loading/>, div);
	})
    test('should show its content on the page',  () => {
        render(
            <BrowserRouter>
                <Loading/>
            </BrowserRouter>
        );
		// Check if the children props, who is the value displayed for the label, appears on the page
		const loader = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();

    })
})
