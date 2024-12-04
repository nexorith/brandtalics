import React from "react";

import Button from "@/app/component/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className=" py-12 bg-aboutimg text-secondary ">
      <div className="container  mx-auto px-4">
        <div className="block gap-4 text-center">
          <div>
            <h1 className="mb-2">About US</h1>
            <div className="text-xl mb-4">
              <p className="mt-10">
                At Brandtalics, we are on a mission to help businesses thrive in
                the ever-evolving digital landscape. Inspired by our past
                experiences, we saw countless businesses struggling to connect
                with their audiences or navigate the complexities of the digital
                world. That’s why we decided to create a company that bridges
                the gap—bringing businesses closer to their goals through
                strategic social media marketing and cutting-edge SEO solutions.
              </p>
              <p className="mt-10">
                {" "}
                We are passionate about the growth of startups and small
                businesses, offering unwavering support with every resource we
                have at our disposal. Whether you’re just starting your journey
                or looking to expand your digital footprint, we’re here to give
                your business the boost it needs to stand out in an increasingly
                crowded market.
              </p>
              <p className="mt-10">
                At Brandtalics, we blend professionalism with creativity,
                crafting tailored strategies that amplify your brand’s reach.
                While our roots are in Nepal, our vision knows no boundaries. We
                proudly work with both national and international clients,
                empowering them to achieve measurable success in the digital
                world. Ready to transform your online presence? Let’s grow
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
