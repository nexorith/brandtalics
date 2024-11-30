import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({
  questions,
}: {
  questions: { questions: string; answer: string }[];
}) => {
  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <AccordionItem
          question={q.questions} // Using "questions" from the prop
          answer={q.answer}
          key={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
