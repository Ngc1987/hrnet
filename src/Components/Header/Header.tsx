import * as React from 'react';
import whlogo from "./whicone.png";
import { NavLink, NavLinkProps } from 'react-router-dom';
import { StyledNavLink, Head, Nav, Img, H1 } from '../../styles/styles';

interface NavProps extends NavLinkProps {
}

const CustomNavLink = (props: NavProps) => <NavLink {...props} />;


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
