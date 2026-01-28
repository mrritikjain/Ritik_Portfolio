import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>
       <section id="education">
      <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
