import * as React from 'react';
import whlogo from "./whresizewp.webp";
import { NavLink, NavLinkProps } from 'react-router-dom';
import { StyledNavLink, Head, Nav, Img, H1 } from '../../styles/styles';

interface NavProps extends NavLinkProps {
}

const CustomNavLink = (props: NavProps) => <NavLink {...props} />;

/**
 * @component
 * @description Component Header who is showing on all pages of the app, contains the brand logo, the brand name, and two links to navigate on the two pages of our app.
 */
const Header:React.FC = () => {
  	return (
			<>
				<Head>
					<Img src={whlogo} alt="logo de wealth health" />
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
