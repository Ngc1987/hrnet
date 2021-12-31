import React from 'react';
import styled, {StyledComponent} from 'styled-components';
import "./Modale.css";

export interface ModaleProps {
	text: string;
	buttonText?: string;
	autoclose?: number;
	colour?: string;
	hideModale?: any;
}



const Modale:React.FC<ModaleProps> = ({text, buttonText, autoclose, colour, hideModale}) => {

	if(colour === "" || colour === undefined) {
		colour = "#000"
	}

	const StyledModale: StyledComponent<"div", any, {}, never> = styled.div`
		position: absolute;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		padding: 0 10px;
		padding-bottom: 10px;
		width: 250px;
		height: auto;
		border-radius: 20px;
		background-color: #ffffff;
		box-shadow: 0 0 1px 1px ${colour}, 0 0 2px 2px ${colour}, inset 0 0 1px 1px ${colour}, inset 0 0 2px 2px ${colour};
		z-index: 200;
		transition: all 1s ease;
	`
	
	const StyledText: StyledComponent<"p", any, {}, never> = styled.p`
		text-align: center;
		margin-top: ${autoclose ? "25px" : "20px"};
		margin-bottom: 25px;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	`

	const StyledButton: StyledComponent<"div", any, {}, never> = styled.div`
		padding: 6px;
		position: relative;
		width: fit-content;
		transition: all 0.2s ease;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
		border-radius: 5px;
		cursor: pointer;
		background: ${colour};
		color: white;
		font-family: Neucha, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-weight: bold;
		text-align: center;

		:hover {
			box-shadow: 0 0 1px 1px ${colour}, 0 0 2px 2px ${colour};
		}
	`

	const handleAutoClose = () => {
		setTimeout(() => {
			hideModale();
		}, autoclose);
	}

	if(autoclose) {
		handleAutoClose()
	}

	return (
		<>
			<StyledModale className="open" >

				<StyledText>{text}</StyledText>
				{!autoclose && <StyledButton onClick={hideModale} >{buttonText ? buttonText : "Choose your text with the 'buttonText' prop"}</StyledButton>}

			</StyledModale>
		</>
	)
}
export default Modale;
