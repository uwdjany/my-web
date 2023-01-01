import logo from './logo.svg';
import './App.css';
import Nav from './component/navBar';
import Home  from './component/home';

function App() {
  return (
    <>
    <Nav/>
    <div className="bg-veryDarkBlue w-full h-screen">
    <Home/>
    </div>
   
    </>
   
  );
}

export default App;
