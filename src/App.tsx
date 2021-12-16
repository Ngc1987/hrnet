import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import bckgnd from "./background3.png"


const App:React.FC = () => {
  return (
    <div className="z-10 App relative bg-gradient-to-tl from-green-light via-white to-white h-auto flex flex-col items-center">
      <Header/>
      <Form/>
      {/* <img className="w-40" src={whlogo} alt="" /> */}
      {/* <img className="absolute z-0 h-full" src={hwlogo} alt="logo de wealth ealth" /> */}
      <img src={bckgnd} alt="" className="absolute cover w-full h-full z-0 transform rotate-90 md:rotate-0" />
    </div>
  );
}

export default App;
