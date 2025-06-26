import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import NotFound from "./sections/NotFound/NotFound";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
