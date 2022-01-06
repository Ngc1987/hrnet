import * as React from 'react';
import whlogo from "./whresizewp.webp";
import { NavLink, NavLinkProps } from 'react-router-dom';
import { StyledNavLink, Head, Nav, Img, H1 } from '../../styles/styles';
import { Suspense } from 'react';
import Loading from '../Loading/Loading';

/**
 * @ignore
 * Interface properties for the CustomNavLink
 * @typedef NavProps
 */
interface NavProps extends NavLinkProps {
}
/**
 * @ignore
 * @type {NavProps}
 */
const CustomNavLink = (props: NavProps) => <NavLink {...props} />;

/**
 *  Component Header who is showing on all pages of the app, contains the brand logo, the brand name, and two links to navigate on the two pages of our app.
 */
const Header:React.FC = () => {
  	return (
			<>
			<Suspense fallback={<Loading/>}>

				<Head>
					<Img src={whlogo} alt="logo de wealth health" />
					<H1 >HrNet</H1>
				</Head>
				<Nav>
					<StyledNavLink>
						<CustomNavLink data-testid="homeButton" to="/">Home</CustomNavLink>
					</StyledNavLink>
					<StyledNavLink>
						<CustomNavLink data-testid="employeesButton" to="/employees">Employees</CustomNavLink>
					</StyledNavLink>
				</Nav>
			</Suspense>
			</>
  	)
};

export default Header;
