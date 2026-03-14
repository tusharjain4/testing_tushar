import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
}