import React from "react";
import Image from "next/image";

export const HappyClientsBadge = () => {
  return (
    <div className="flex items-center mb-4 gap-4">
      {/* Star Icons */}
      <div className="flex items-center gap-2">
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src="/star.png"
            alt="star"
            width={20}
            height={20}
            className="inline-block"
          />
        ))}
      </div>

      {/* Happy Clients Text */}
      <p className="text-sm font-bold text-secondary">75+ happy clients</p>
    </div>
  );
};
