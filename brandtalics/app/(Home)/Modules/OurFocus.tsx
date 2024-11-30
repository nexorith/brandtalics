import React from "react";
import BrandingImg from "@/public/branding.svg";
import graphicsdesign from "@/public/graphics.svg";
import webdev from "@/public/webdev.svg";
import digitalmarketing from "@/public/digitalmarketing.svg";
import seo from "@/public/seo.svg";
import Image from "next/image";
import Button from "@/app/component/Button";

const OurFocus = () => {
  return (
    <section className="bg-white container mx-auto py-8 md:py-16">
      <div className=" text-center mb-8">
        <h2 className="mb-5">Our Focus</h2>
        <p className=" items-center justify-center">
          We Focus on Building website that help you achive your goal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 in;l">
        {features.map((features, index) => (
          <div
            key={features.description}
            className="bg-[#f0fff4] p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105"
          >
            <div className="inline-block p-4 bg-secondary rounded-lg">
              <Image
                src={features.image}
                alt="features"
                width={30}
                height={30}
              />
            </div>
            <h3 className="my-4">{features.title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: features.description }}
              className="text-lightbg"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </section>
  );
};

const features = [
  {
    image: BrandingImg,
    title: "Unique Design",
    description:
      "<strong>Branding is the process of creating and managing a brand's identity, including its name, logo, values, and personality.</strong><br> The goal of branding is to differentiate a brand from its competitors and create a unique identity in the minds of consumers.</br>",
  },
  {
    image: graphicsdesign,
    title: "Graphics Design",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    image: webdev,
    title: "Website Design and Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adfyhtyuhtipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    image: digitalmarketing,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetufytyer adipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    image: seo,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consecteturtyrtyryryrer adipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
];

export default OurFocus;
