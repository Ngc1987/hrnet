import * as React from 'react';
import {FaLeaf} from "react-icons/fa"

// interface IAppProps {
// }

const Header = () => {
  return (
    <header className="shadow-2xl flex flex-row justify-center items-center relative  bg-green-400 h-16 w-full" >
      <FaLeaf className="absolute w-12 h-12 left-6 top-4 text-white" />
      <h1 className="align-middle text-center text-2xl" >HrNet</h1>
    </header>
  )
};

export default Header;
