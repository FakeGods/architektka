import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";

function ScrollSnap() {
  return (
    <>
      <div className="relative h-screen flex-col gap-6 snap-y snap-mandatory w-screen overflow-y-scroll no-scrollbar">
        <Nav />
        <section
          id="hero"
          className="snap-start shrink-0 w-screen h-screen text-4xl flex items-center justify-center bg-red-200"
        >
          <Hero />
        </section>
        <section
          id="about"
          className="snap-start shrink-0 w-screen h-screen text-4xl flex items-center justify-center bg-blue-200"
        >
          <About />
        </section>
        <section
          id="projects"
          className="snap-start shrink-0 w-screen h-screen text-4xl flex items-center justify-center bg-green-200"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="snap-start shrink-0 w-screen h-screen text-4xl flex items-center justify-center bg-indigo-200"
        >
          <Contact />
        </section>
      </div>
    </>
  );
}

export default ScrollSnap;
