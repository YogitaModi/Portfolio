import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Layout>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
      {/* /</header> */}
    </div>
  );
}

export default App;
