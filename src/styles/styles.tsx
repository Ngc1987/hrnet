import styled, {StyledComponent} from "styled-components";

// **********************************
// Styled elements of Form component
// **********************************
export const ErrorDiv: StyledComponent<"div", any, {}, never> = styled.div`
	font-size: 13px;
	color: red;
	align-self: center;
	margin-top: 10px;
`

export const StyledForm: StyledComponent<"form", any, {}, never> = styled.form`
	display: flex;
	flex-direction: column;
	width: 24rem;
	height: auto;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	margin-top: 3rem;
	margin-bottom: 5rem;
	padding: 1.5rem;
	z-index: 50;
	background-color: #00000020;
	backdrop-filter: blur(1px);
	border-radius: 20px;
	transition: all 0.3s ease;
	box-shadow: 5px 5px 15px #0000006f;
	
	h2 {
		text-align: center;
		font-size: 1.4rem;
	}
	h3 {
		text-align: center;
		font-size: 1.2rem;
		margin-top: 10px;
		margin-bottom: -10px;
	}
`

export const StyledButton: StyledComponent<"button", any, {}, never> = styled.button`
	font-size: 13px;
	width: 50px;
	padding: 5px 6px;
	text-align: center;
	border-radius: 5px;
	margin-top: 25px;
	color: white;
	background-color: #8acd32d1;
	align-self: center;
	transition: all 0.2s ease;
	border: none;
	cursor: pointer;


	:hover {
		box-shadow: 0 0 1px 1px #8acd32, 0 0 3px 3px #8acd32;
		background-color: #8acd32;
	}
`


export const StyledModale: StyledComponent<"div", any, {}, never> = styled.div`
	position: absolute;
	width: 100vw;
	height: 100%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background-color: transparent;
	backdrop-filter: blur(1px);
	z-index: 100;
	transition: all 0.5s ease;
`
// **********************************
// Styled elements of FormInput component
// **********************************
export const StyledInput: StyledComponent<"input", any, {}, never> = styled.input`
	padding: 5px;
	margin-top: 0.25rem;
	height: 2.2rem;
	width: 100%;
	border-radius: 10px;
	outline: none;
	transition: all 0.3s ease;

	:focus {
		box-shadow: 0 0 1px 1px #fff, 0 0 3px 3px #fff;
	}
`

// **********************************
// Styled elements of Help component
// **********************************
export const HelpButton: StyledComponent<"div", any, {}, never> = styled.div`
	width: auto;
	height: auto;
	padding: 5px;
	background-color: #ffffff20;
	color: #000;
	cursor: pointer;
	backdrop-filter: blur(1px);
	border-radius: 5px;
`

export const StyledHelpDiv: StyledComponent<"div", any, {}, never> = styled.div`
	width: 250px;
	height: auto;
	margin-top: 25px;
	background-color: #ffffff20;
	color: #000;
	backdrop-filter: blur(1px);
	border-radius: 10px;
	transition: all 0.3s ease;
`

// **********************************
// Styled elements of EmployeesTable component
// **********************************
export const StyledSection: StyledComponent<"section", any, {}, never> = styled.section`
	margin-top: 60px;
	/* background-color: #00000035; */
	/* padding-left: 20px; */
	border-radius: 20px;
	/* backdrop-filter: blur(5px); */
`
// **********************************
// Styled elements of CustomSelect component
// **********************************
export const StyledLabel: StyledComponent<"label", any, {}, never> = styled.label`
	margin-bottom: -5px;
	margin-top: 5px;
`

// **********************************
// Styled elements of Header component
// **********************************

export const StyledNavLink = styled.div`
	padding: 5px;
	background: #92dd30;
	text-align: center;
	width: 140px;
	color: white;
	font-size: 1.2rem;
	margin-top: 20px;
	border-radius: 10px;
	transition: all 0.2s ease;

	:hover {
		/* font-size: 1.5rem; */
		/* background: linear-gradient(#8acd32, #b4e96f); */
		box-shadow: 0 0 1px 1px #92dd30, 0 0 2px 2px #92dd30;
	}
`

export const Head: StyledComponent<"header", any, {}, never> = styled.header `
	width: 100%;
	height: 150px;
	/* background-color: transparent; */
	z-index: 30;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	align-items: center;

	

`
export const Nav: StyledComponent<"nav", any, {}, never> = styled.nav`
	z-index: 20;
	width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
export const Img: StyledComponent<"img", any, {}, never> = styled.img`
	position: absolute;
	width: 7rem;
	height: 7rem;
	top: 1rem;
	left: 1.5rem;

	@media screen and (max-width: 768px) {
		position: inherit;
		top: 0;
		left: 0;
		margin-right: 10px;
	}
`
export const H1: StyledComponent<"h1", any, {}, never> = styled.h1`
	text-align: center;
	vertical-align: middle;
	font-size: 2rem;
	font-family: Rampart, 'Times New Roman', Times, serif;
	font-weight: bold;
	font-style: italic;
`