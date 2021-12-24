import * as React from 'react';
import {FaLeaf} from "react-icons/fa";
import whlogo from "./whicone.png";
import styled, { StyledComponent } from "styled-components";
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavProps extends NavLinkProps {
}

const CustomNavLink = (props: NavProps) => <NavLink {...props} />;

const StyledNavLink = styled.div`
	padding: 5px;
	background: #92dd30;
	text-align: center;
	width: 140px;
	color: white;
	font-size: 1.2rem;
	
	border-radius: 10px;
	transition: all 0.2s ease;

	:hover {
		/* font-size: 1.5rem; */
		/* background: linear-gradient(#8acd32, #b4e96f); */
		box-shadow: 0 0 1px 1px #92dd30, 0 0 2px 2px #92dd30;
	}
`

const Head: StyledComponent<"header", any, {}, never> = styled.header `
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
const Nav: StyledComponent<"nav", any, {}, never> = styled.nav`
	z-index: 20;
	width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const Img: StyledComponent<"img", any, {}, never> = styled.img`
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
const H1: StyledComponent<"h1", any, {}, never> = styled.h1`
	text-align: center;
	vertical-align: middle;
	font-size: 2rem;
	font-family: Rampart, 'Times New Roman', Times, serif;
	font-weight: bold;
	font-style: italic;
`

const Header:React.FC = () => {
  return (
	//   <header className="shadow-2xl flex flex-row justify-center items-center relative z-30 bg-transparent h-32 w-full" >
	<>
		<Head>
			{/* <FaLeaf className="absolute w-12 h-12 left-6 top-4 text-white" /> */}
			<Img src={whlogo} alt="" />
			<H1 >HrNet</H1>
	  	</Head>
		<Nav>
			<StyledNavLink>
				<CustomNavLink to="/">Home</CustomNavLink>
			</StyledNavLink>
			<StyledNavLink>
				<CustomNavLink to="/employees">Employees</CustomNavLink>
			</StyledNavLink>
		</Nav>

	  </>
  )
};

export default Header;
