import ContactUs from "@/app/(Home)/Modules/Contact/ContactUs";
import FAQ from "./Modules/FAQ";
import Hero from "./Modules/Hero";
import OurFocus from "./Modules/OurFocus";
import OurWork from "./Modules/OurWork";

export default function Home() {
  return (
    <>
      <Hero />
      <OurFocus />
      <OurWork />
      <FAQ />
      <ContactUs />
    </>
  );
}
