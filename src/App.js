import './App.css';
import {Route, Routes} from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Client from "./pages/Client";
import Nav from "./components/Nav";
import {useState} from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
    const [showNav, setShowNav] = useState(true);
  return (
      <div>
          {showNav && <Nav/>}
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route
                  path={'/login'}
                  element={<LogIn setShowNav={setShowNav}/>}
              />
              <Route
                  path={'/signup'}
                  element={<SignUp setShowNav={setShowNav}/>}
              />
              <Route path={'/client'} element={<Client/>}/>
              <Route path={'/order'} element={<Order/>}/>
          </Routes>
      </div>
  );
}

export default App;
