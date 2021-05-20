import "../stylesheet/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import dataProjects from "../services/dataProjects.js";
import Aboutme from "./Main/Aboutme";
import Projects from "./Main/Projects";
import Contact from "./Main/Contact";
import HardSkills from "./Main/HardSkills";
import hard from "../services/hardSkills";
import contact from "../services/contact";

function App() {
  return (
    <>
      <Header />
      <Aboutme />
      <HardSkills hard={hard} />
      <Projects dataProjects={dataProjects} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
