import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import HappyClients from "../components/HappyClients";
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <HappyClients />
      <Contact />
    </>
  );
}
