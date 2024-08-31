
  //import Header from "./component/Header" 
  //import Footer from "./component/Footer" 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
