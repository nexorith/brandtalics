import ContactUs from "@/app/(Home)/Modules/Contact/ContactUs";
import FAQ from "./Modules/FAQ";
import Hero from "./Modules/Hero";
import OurFocus from "./Modules/OurFocus";
import OurWork from "./Modules/OurWork";
import About from "./Modules/About";
import Footer from "./Modules/Footer";
import Nav from "./Modules/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <OurFocus />
      <OurWork />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}
