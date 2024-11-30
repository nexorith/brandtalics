"use client";

import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="p-4 bg-white shadow-sm rounded-lg cursor-pointer">
      <div
        className="flex justify-between items-center"
        onClick={toggleIsOpen} // Toggle open state on click
      >
        <h5 className="text-lg font-medium">{question}</h5>
        {isOpen ? (
          <ArrowUp className="w-5 h-5" />
        ) : (
          <ArrowDown className="w-5 h-5" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2 text-lightbg">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
