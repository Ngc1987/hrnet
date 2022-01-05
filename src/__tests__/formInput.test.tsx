import FormInput from "../Components/FormInput/FormInput";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

describe('FormInput component', () => {

	test("should render without crash", () => {
		// Just mock a basic function, who is required props
		const div = document.createElement('div');
		const handleInput = () => console.log("test handleInput");
  			ReactDOM.render(
			  <FormInput 
			  	type="text" 
				  id="test" 
				  children="test children" 
				  value="test value"
				  handleInput={handleInput}
				  />, div);
	})
    test('should be displayed with the props set',  () => {
		// Just mock a basic function, who is required props
		const handleInput = () => console.log("test handleInput");
        render(
            <BrowserRouter>
                <FormInput 
			  	type="text" 
				  id="test" 
				  children="test children" 
				  value="test value"
				  handleInput={handleInput}
				  />
            </BrowserRouter>
        );
		// Check if the children props, who is the value displayed for the label, appears on the page
		const children = screen.getByText("test children");
		expect(children).toBeInTheDocument();

    })
})
