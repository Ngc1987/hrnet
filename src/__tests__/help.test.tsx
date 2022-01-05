import { render, screen, fireEvent } from '@testing-library/react';
import Help from "../Components/Help/Help";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

describe('Help component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(<Help />, div);
	})
    test('click on the help button, who becomes close button after',  () => {
        render(
            <BrowserRouter>
                <Help />
            </BrowserRouter>
        );
		// Check if the help button is rendered
		const button = screen.getByTestId("helpButton")
        expect(button).toBeInTheDocument();
		// After click on it
		fireEvent.click(button);
		// Check if the button with new text on it appears
        const newButtonText = screen.getByText("Close");
        expect(newButtonText).toBeInTheDocument();	

    })
})