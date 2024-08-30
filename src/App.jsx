import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Cards from "./components/Cards";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Cards />
      <Contact />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
