import React from "react";
import { ContactUsForm } from "./Component/ContactUsForm";
import ContactUsDetails from "./Component/ContactUsDetails";
const ContactUs = () => {
  return (
    <section className=" py-8 md:py-16">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactUsDetails />
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
