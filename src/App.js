import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import Community from "./Pages/Community";
import About from "./Pages/About";
import Belog from "./Pages/Belog";
import { Contact } from "./Pages/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="home" element={<Home />} />
            <Route  path="technology" element={<Technology />} />
            <Route  path="community" element={<Community />} />
            <Route  path="About" element={<About/>} />
            <Route  path="Blog" element={<Belog/>} />
            {/* <Route  path="Build" element={<Build/>} />*/}
            <Route  path="contact" element={<Contact/>} /> 
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
