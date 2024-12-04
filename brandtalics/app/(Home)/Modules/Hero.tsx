import React from "react";
import ImageIsolated from "@/app/component/ImageIsolated";
import Button from "@/app/component/Button";
import Image from "next/image";
import { HappyClientsBadge } from "@/app/component/HappyClientsBadge";

const Hero = () => {
  return (
    <div className="bg-white py-12  text-secondary mt-10 ">
      <div className="container  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="self-center">
            <HappyClientsBadge />

            <h1 className="mb-2">
              We should build <span className="text-primary">Professional</span>{" "}
              websites
            </h1>
            <p className="text-xl mt-5 mb-4">
              At Brandtalics, we transform your ideas into stunning visuals.
              From logos to social media graphics, we craft designs that
              captivate and communicate your brand's unique identity.
            </p>
            <Button />
          </div>
          <div>
            <Image
              src="/mockup.png"
              alt="mockup"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
