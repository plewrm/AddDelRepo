import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/home';
import About from './Pages/about'
import Login from './Pages/login';
import Protected from "./Components/Protected"
import GetData from './Components/GetData';
import AddData from './Components/AddData';
import Create from './Create';
import DataTime from './Pages/datetime';
import Grettings from './Pages/Greetings/grettings'
import DataProps from './DataProp/DataProps';
function App() {
  return (
    <div >
    <DataProps/>
    {/* <Grettings/> */}
    {/* <DataTime/> */}
    {/* <Create/> */}
    {/* <AddData />
    <GetData/> */}
    {/* <BrowserRouter>
       <NavBar/>
<Routes>
  <Route path="login" element={<Login/>}/>
  <Route path="/" element={<Protected Cmp={Home}/>}/>
  <Route path="/about" element={<Protected Cmp={About}/>}/>
</Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
