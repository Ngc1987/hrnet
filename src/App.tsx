import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Header/Form/Form';

import hwlogo from "./hwlogo.png";

function App() {
  return (
    <div className="App relative bg-gradient-to-tl from-green-500 via-white to-white h-auto flex flex-col items-center">
      <Header/>
      <Form/>
      <img className="absolute z-0 h-full" src={hwlogo} alt="logo de wealth ealth" />
    </div>
  );
}

export default App;
