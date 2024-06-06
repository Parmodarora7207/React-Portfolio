import './App.css';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from './pages/About';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/header' element={<header />} />
            <Route path='/about' element={<About />} />
            <Route path='/skill' element={<Skill />}></Route>
            <Route path='/education' element={<Education />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/footere' element={<Footer />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
