import { useContext } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from "./context/themeContext";

import BlogCreation from './pages/blogCreation/blogCreation';
import BlogListing from './pages/blogListing/blogListing';
import BlogDetail from './pages/blogDetail/blogDetail';

function App() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div className={`app app--${toggle ? "dark" : "light"}`}>
      <header style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/create">Create</Link>
        <Link to="/listing">Listing</Link>
        <button onClick={toggleFunction}>Toggle Theme</button>
      </header>
      <Routes>
        <Route path="/create" element={<BlogCreation />} />
        <Route path="/listing" element={<BlogListing />} />
        <Route path="/detail/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
