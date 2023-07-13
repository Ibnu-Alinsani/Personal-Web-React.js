import React from "react";
import wp from "../../assets/wp.png";
import light from "../../assets/ibnu.png";
import indonesia from "../../assets/indonesia.svg";
import * as Img from "../../assets";

const About = () => {
  console.log(wp);
  return (
    <section
      className={`about h-screen bg-no-repeat bg-cover bg-center transition-all`}
      style={{
        backgroundImage: `url(${Img.bg_jp})`,
        boxShadow: "0px -4rem 10px inset black",
      }}
    >
      <div className="backdrop-blur-sm h-screen pt-24">
        <div className="w-full relative h-72 ">
          <img
            src={Img.indonesia}
            alt="Peta Indonesia"
            className="absolute top-1/4"
          />
          <img
            src={Img.profile}
            alt="Ibnu-Alinsani"
            className="absolute right-16 shadow-inner rounded-full backdrop-blur-sm aspect-square object-cover"
            width={"70%"}
            height={"50%"}
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-white bg-red-600 mt-5 font-bold font-samurai text-3xl text-center inline px-4 py-2 rounded-md">
            Hello World!
          </h1>
          <h1 className="font-japan inline-block font-bold text-white text-3xl mt-4">
            My <span className="text-red-600">name</span> is{" "}
            <span className="text-red-600">Ibnu</span>
          </h1>
          <span className="block font-azeret text-2xl text-white mt-2">
            and i'm <span className="text-red-600">web developer</span>
          </span>
        </div>
        <ul className="flex items-center justify-center gap-4 mt-8">
          <li>
            <a href="https://github.com/Ibnu-Alinsani">
              <img
                src={Img.github}
                alt="github: Ibnu-Alinsani"
                width={"30px"}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ibnu-alinsani/">
              <img
                src={Img.linkedin}
                alt="linkedin : Ibnu Alinsani"
                width={"30px"}
              />
            </a>
          </li>
          <li>
            <a href="mailto:ibnualinsani23@gmail.com">
              <img
                src={Img.gmail}
                alt="gmail : ibnualinsani23@gmail.com"
                width={"30px"}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibnu_al_insani/">
              <img
                src={Img.instagram}
                alt="instagram : ibnu_al_insani"
                width={"30px"}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
