import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <SEO path="/" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
