import React from "react";
import { ArrowRight } from "lucide-react";

const Button = () => {
  return (
    <div>
      <button className="bg-secondary flex w-full md:w-auto justify-center items-center text-lg md:text-xl gap-4 text-white font-bold py-2 px-4  rounded">
        <span>Contact Us</span>
        <ArrowRight />
      </button>
    </div>
  );
};

export default Button;
