import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skill from "./component/Skill";
import Work from "./component/Work";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
