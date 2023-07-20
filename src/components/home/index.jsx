import React from "react";
import wp from "../../assets/wp.png";
import light from "../../assets/ibnu.png";
import indonesia from "../../assets/indonesia.svg";
import * as Img from "../../assets";

const Home = () => {
  console.log(wp);
  return (
    <section
      className={`h-screen bg-no-repeat bg-cover bg-center transition-all`}
      style={{
        backgroundImage: `url(${Img.bg_jp})`,
        boxShadow: "0px -3rem 10px inset black",
      }}
    >
      <div className="backdrop-blur-sm h-screen flex justify-center flex-col gap-12 items-center">
        <div className="w-full grid grid-cols-1 place-items-center">
          <img
            src={Img.indonesia}
            alt="Peta Indonesia"
            className="row-start-1 col-start-1"
          />
          <img
            src={Img.profile}
            alt="Ibnu-Alinsani"
            className="rounded-full backdrop-blur-sm aspect-square object-cover row-start-1 col-start-1"
            width={"70%"}
            height={"50%"}
          />
        </div>
        <div className="text-center flex flex-col gap-4 ">
          <h1 className="text-white bg-red-600 font-samurai text-3xl text-center inline px-4 py-2 rounded-md">
            Hello World!
          </h1>
          <h1 className="font-japan inline-block font-bold text-white text-3xl">
            My <span className="text-red-600">name</span> is{" "}
            <span className="text-red-600">Ibnu</span>
          </h1>
          <span className="block font-azeret text-2xl text-white font-bold">
            and i'm <span className="text-red-600">web developer</span>
          </span>
        </div>
        <div className="text-center box-border">
          <ul className="flex items-center justify-center gap-4 ">
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
          <span className="mt-4 inline-block text-white underline">
            Click Us
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
