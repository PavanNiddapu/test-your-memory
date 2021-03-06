import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Card from './Component/Card/Card';
import About from './Component/About';
import Data from "./data.json"


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/presidents">Presidents</Link>
            </li>
            <li>
              <Link to="/VP">VP</Link>
            </li>
            <li>
              <Link to="/PM">PM</Link>
            </li>
            <li>
              <Link to="/RBI">RBI</Link>
            </li>
            <li>
              <Link to="/CM">CM</Link>
            </li>
            <li>
              <Link to="/GOVERNORS">GOVERNORS</Link>
            </li>
            <li>
              <Link to="/CJI">CJI</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/presidents" element={<Card items={Data.presidents} />} />
        <Route path="/VP" element={<Card items={Data.VP} />} />
        <Route path="/PM" element={<Card items={Data.PM} />} />
        <Route path="/RBI" element={<Card items={Data.RBI} />} />
        <Route path="/cm" element={<Card items={Data.cm} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Home = () => (<div>In Home</div>)



export default App;
