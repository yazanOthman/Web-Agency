import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Projects from "./components/Projects";
import Services from "./components/Services";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <SkillsSection />
      <Services />
      <Projects />
      <Contact />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
