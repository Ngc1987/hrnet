import * as React from 'react';
import {FaLeaf} from "react-icons/fa";
import whlogo from "./whicone.png";
import styled, { StyledComponent } from "styled-components";

const Head: StyledComponent<"header", any, {}, never> = styled.header `
	width: 100%;
	height: 200px;
	background-color: transparent;
	z-index: 30;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

`



const Header:React.FC = () => {
  return (
	//   <header className="shadow-2xl flex flex-row justify-center items-center relative z-30 bg-transparent h-32 w-full" >
	<>
		<Head>
      {/* <FaLeaf className="absolute w-12 h-12 left-6 top-4 text-white" /> */}
      <img className="absolute w-28 h-28 left-6 top-4" src={whlogo} alt="" />
      <h1 className="   align-middle text-center text-4xl font-Rampart italic font-bold" >HrNet</h1>
	  </Head>
	  </>
  )
};

export default Header;
