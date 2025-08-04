import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Ragul Namachivayam - Backend Developer Portfolio";

    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Experienced Backend Developer specializing in scalable systems, APIs, and cloud infrastructure. 5+ years building high-performance applications.";
    document.head.appendChild(metaDescription);

    // Add meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "backend developer, API development, microservices, cloud computing, Node.js, Python, PostgreSQL, AWS";
    document.head.appendChild(metaKeywords);

    // Add viewport meta tag for responsiveness
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(metaViewport);

    return () => {
      // Cleanup meta tags if component unmounts
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaViewport);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
