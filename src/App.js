import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Client from "./pages/Client";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/login'} element={<LogIn/>}/>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/client'} element={<Client/>}/>
      </Routes>
    </div>
  );
}

export default App;
