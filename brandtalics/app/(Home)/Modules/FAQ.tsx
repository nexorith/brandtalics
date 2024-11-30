import React from "react";
import Accordion from "@/app/component/Accordion/Accordion";
import Link from "next/link";

const FAQ = () => {
  const questionData = [
    {
      questions: "What is React?", // Changed "question" to "questions"
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      questions: "What is TypeScript?",
      answer: "TypeScript is a superset of JavaScript that adds static typing.",
    },
    {
      questions: "How does Accordion work?",
      answer: "An Accordion toggles the visibility of content panels.",
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className=" mb-4">Frequently Asked Questions</h2>
          <p>
            The goal of branding is to differentiate a brand from its
            competitors.
          </p>
        </div>
        {/* Pass the correct prop name */}
        <Accordion questions={questionData} />
        <p className="text-center mt-4 text-lightbg">
          If you have any question, feel free to {""}
          <Link href="#" className="text-primary font-bold">
            Contact Us
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
