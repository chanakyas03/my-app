import About from "./components/organisms/About";
import Contact from "./components/organisms/Contact";
import Hero from "./components/organisms/Hero";
import Projects from "./components/organisms/Project";
import Experience from "./components/organisms/Experience";

export default function Home() {
  return (
   <>
   <div id="hero"><Hero/></div>
   <About/>
   <Experience/>
   <Projects/>
   <Contact/>
   </>
  );
}
