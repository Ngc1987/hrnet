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

	@media (max-width: 560px) {
		width: 100%;
	}
	
	h2 {
		text-align: center;
		font-size: 1.4rem;
		margin-bottom: 10px;
	}
	h3 {
		text-align: center;
		font-size: 1.2rem;
		margin-top: 20px;
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
	border: 1px solid white;
	cursor: pointer;


	:hover {
		box-shadow: 0 0 1px 1px #8acd32, 0 0 3px 3px #8acd32;
		background-color: #8acd32;
		border:  1px solid transparent;
	}
`
export const ModaleButton: StyledComponent<"button", any, {}, never> = styled.button`
	font-size: 13px;
	width: 50px;
	padding: 5px 6px;
	text-align: center;
	border-radius: 5px;
	/* margin-top: 25px; */
	color: white;
	background-color: #8acd32d1;
	align-self: center;
	transition: all 0.2s ease;
	border: none;
	cursor: pointer;
	position: relative;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);


	:hover {
		box-shadow: 0 0 1px 1px #8acd32, 0 0 3px 3px #8acd32;
		background-color: #8acd32;
	}
`


export const StyledModale: StyledComponent<"div", any, {}, never> = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: auto;
	height: auto;
	/* display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background-color: transparent;
	backdrop-filter: blur(1px); */
	z-index: 100;
	transition: all 0.5s ease;
`

export const StyledLayout: StyledComponent<"div", any, {}, never> = styled.div`
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		width: 100%;
		height: 100vh;
		background-color: transparent;
		backdrop-filter: blur(1px);
		z-index: 100;
		position: absolute;
		transition: opacity 0.5s ease;
	`
// **********************************
// Styled elements of FormInput component
// **********************************
export const StyledInput: StyledComponent<"input", any, {}, never> = styled.input`
	padding: 5px;
	margin-top: 0.5rem;
	height: 2.2rem;
	width: 100%;
	border-radius: 10px;
	outline: none;
	transition: all 0.3s ease;
	border: none;

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
	padding: 6px 10px;
	margin-top: 30px;
	background-color: #0000001d;
	color: #000;
	cursor: pointer;
	backdrop-filter: blur(1px);
	border-radius: 5px;
	transition: all 0.3s ease;
`

// **********************************
// Styled elements of EmployeesTable component
// **********************************
export const StyledSection: StyledComponent<"section", any, {}, never> = styled.section`
	margin-top: 30px;
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
	margin-top: 10px;
`
export const StyledSelectLabel: StyledComponent<"label", any, {}, never> = styled.label`
	margin-bottom: 3px;
	margin-top: 10px;
`

// **********************************
// Styled elements of Header component
// **********************************

export const StyledNavLink = styled.div`
	padding: 8px 10px;
	background: #92dd30;
	text-align: center;
	width: 140px;
	font-size: 1.3rem;
	/* font-weight: bold; */
	margin-top: 20px;
	border-radius: 10px;
	transition: all 0.2s ease;
	
	a {
		text-decoration: none;
		color: #000;
	}

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

// **********************************
// Styled elements of Error component
// **********************************

export const ErrorSection: StyledComponent<"section", any, {}, never> = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 500px;
	color: #000000;
	flex: 1 1;
`
export const ErrorNumber: StyledComponent<"p", any, {}, never> = styled.p`
	font-size: 96px;
	font-weight: 700;

	@media (min-width: 768px) {
		font-size: 288px;
		margin-top: 90px;
	}
`
export const ErrorText: StyledComponent<"div", any, {}, never> = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
	font-weight: 500;

	@media (min-width: 768px) {
		font-size: 36px;

		p {
			margin-left: 10px;
		}
	}
`
export const ErrorLink: StyledComponent<"p", any, {}, never> = styled.p`
	font-size: 14px;
	font-weight: 500;
	text-decoration: underline;
	margin-top: 120px;
	text-align: center;
	color: #000000;

	@media (min-width: 768px) {
		margin-bottom: 100px;
		font-size: 18px;
	}
`

// **********************************
// Styled elements of App component
// **********************************
export const StyledImg: StyledComponent<"img", any, {}, never> = styled.img`
	position: absolute;
	z-index: -50;
	object-fit: cover;
	min-width: 100%;
	max-width: 100%;
	/* width: 100%; */
	/* margin-top: 50px; */
	/* min-width: 100vw; */
	/* max-width: 100vw; */
	min-height: 100%;
	/* max-height: 100%; */
	/* min-height: 100vh; */
	/* max-height: 100vh; */
`
export const StyledMain: StyledComponent<"main", any, {}, never> = styled.main`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	min-height: 100vh;
	min-width: 100vw;
`