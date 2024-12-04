import React from "react";
import { FacebookIcon, Instagram } from "lucide-react";
import { InstagramIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a
              href="https://brandtalics.com/"
              className="flex items-center self-center fill-white mt-10"
            >
              <img
                src="/logowhite.svg"
                className="h-28 me-3 "
                alt="Brandtalics Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-base text-white font-semibold">Link</h2>
              <ul className=" font-medium">
                <li className="mb-4 text-white hover:text-primary">
                  <a
                    href="https://brandtalics.com/"
                    className="hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4 text-white hover:text-primary">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li className="mb-4 text-white hover:text-primary">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-4 text-white hover:text-primary">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Our Work
                  </a>
                </li>
                <li className="mb-4 text-white hover:text-primary">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4  text-white hover:text-primary">
                  <a
                    href="https://github.com/themesberg/Brandtalics"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4  text-white hover:text-primary">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
              <ul className="text-white font-medium">
                <li className="mb-4  text-white hover:text-primary">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4  text-white hover:text-primary">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://Brandtalics.com/" className="hover:underline">
              Brandtalics™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/brandtalics/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FacebookIcon className=" stroke-white cursor-pointer hover:fill-none hover:stroke-primary flex items-center w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/brandtalics/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <InstagramIcon className=" stroke-white cursor-pointer hover:fill-none hover:stroke-primary flex items-center w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
