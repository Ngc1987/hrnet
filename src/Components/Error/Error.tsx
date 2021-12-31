import React from 'react';
import "./Error404.scss";
import { Link } from 'react-router-dom';
import { ErrorSection, ErrorNumber, ErrorText, ErrorLink } from '../../styles/styles';


/**
 * @component
 * @description Component Error who appears when the datas are fetched and an error is occured 
 */
const Error:React.FC = () => {


	return (
		<ErrorSection className="error404">

			<>
				<ErrorNumber className="error404__number">404</ErrorNumber>
				<ErrorText className="error404__phrase">
					<p>Oups ! La page que </p>
					<p>vous demandez n'existe pas</p>
				</ErrorText>
			</>

			<Link to="/" >
				<ErrorLink className="error404__homeLink">Retourner sur la page d'accueil</ErrorLink>
			</Link>

		</ErrorSection>
	)
}


export default Error;