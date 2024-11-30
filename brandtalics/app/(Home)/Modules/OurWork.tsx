import React from "react";
import Infesimg from "@/public/infes.jpg";
import porntubeimg from "@/public/porntube.jpg";
import porntooimg from "@/public/porntoo.jpg";
import jhonimg from "@/public/Jhon.jpeg";
import swanimg from "@/public/Swan.jpeg";
import rwanimg from "@/public/Rwan.jpeg";
import ImageIsolated from "@/app/component/ImageIsolated";
import Image from "next/image";
import Button from "@/app/component/Button";

const OurWork = () => {
  return (
    <section className="bg-white text-secondary py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-8">Our Work</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 mb-4 gap-10">
          {project.map((p, i) => (
            <div key={p.title}>
              <h4 className="mb-2 font-bold mt-5 ">{p.title}</h4>
              <div className="rounded overflow-hidden border-8 mt-3">
                <ImageIsolated src={p.image} alt={`project${i}`} />
              </div>
              <div className="flex justify-between gap-2 mt-5">
                {p.stats.map((s) => (
                  <div className="text-center" key={s.description}>
                    <h5 className=" font-medium">{s.value}</h5>
                    <h6 className="font-light text-lightbg mb-5">
                      {s.description}
                    </h6>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <div className="relative w-20 h-20 px-10 rounded-full overflow-hidden border border-white">
                    <Image
                      src={p.review.image}
                      alt={`review person ${i}`}
                      fill
                    />
                  </div>
                  <div>
                    <h5 className="">{p.review.name}</h5>
                    <p className="text-sm text-lightbg font-medium">
                      {p.review.position}
                    </p>
                  </div>
                  <p className="italic  text-justify text-sm text-lightbg">
                    {p.review.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button />
        </div>
      </div>
    </section>
  );
};

const project = [
  {
    title: "All Email Generator- Webiste Build",
    image: Infesimg,
    link: "https://www.youtube.com/watch?v=zP6qr-dxSm0",
    stats: [
      { value: "+218%", description: "Qualified Inquires" },
      { value: "+22%", description: "Time Spent on the Website" },
      { value: "+81%", description: "Pages visited per session" },
    ],
    review: {
      name: "Jhon",
      image: jhonimg,
      position: "CEO, Youtube",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
    },
  },
  {
    title: "Grammerly- Webiste Build",
    image: porntubeimg,
    link: "https://www.youtube.com/watch?v=0NvSiEjW-EY&t=1083s0",
    stats: [
      { value: "+218%", description: "Qualified Inquires" },
      { value: "+22%", description: "Time Spent on the Website" },
      { value: "+81%", description: "Pages visited per session" },
    ],
    review: {
      name: "Swam",
      image: swanimg,
      position: "CEO, Grammerly",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  },
  {
    title: "Shopify- Webiste Build",
    image: porntooimg,
    link: "https://www.youtube.com/watch?v=UMRf45wke7Y",
    stats: [
      { value: "+218%", description: "Qualified Inquires" },
      { value: "+22%", description: "Time Spent on the Website" },
      { value: "+81%", description: "Pages visited per session" },
    ],
    review: {
      name: "Rwam",
      image: rwanimg,
      position: "CEO, Shopify",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  },
];

export default OurWork;
