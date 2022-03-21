// import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black" style={{height:"100vh"}}>
      <div className='gap-4'>
      <Navbar/>
      <Home/>
    {/* <Container/> */}
      </div>
    
     
    </div>
  );
}

export default App;
