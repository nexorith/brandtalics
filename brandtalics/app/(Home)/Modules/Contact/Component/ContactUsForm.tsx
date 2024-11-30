import React from "react";

export const ContactUsForm: React.FC = () => {
  return (
    <div className="w-full h-screen max-w-4xl mx-auto p-4">
      <iframe
        className="w-full h-full"
        src="https://docs.google.com/forms/d/e/1FAIpQLScaMu4QjmaEDAJpCgEmCXnZJVp9Os0pSohulrTtInpf_jyHzg/viewform?embedded=true"
        title="Contact Us Form"
      ></iframe>
    </div>
  );
};
