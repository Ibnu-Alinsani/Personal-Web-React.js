import React from "react";
import wp from "../../assets/wp.png";
import light from "../../assets/ibnu.png";
import indonesia from "../../assets/indonesia.svg";
import * as Img from "../../assets";

const Home = () => {
  console.log(wp);
  return (
    <section
      className={`h-screen bg-cover bg-center bg-no-repeat transition-all`}
      style={{
        backgroundImage: `url(${Img.bg_jp})`,
        boxShadow: "0px -3rem 10px inset black",
      }}
    >
      <div className="flex h-screen flex-col items-center justify-center gap-12 backdrop-blur-sm">
        <div className="grid w-full grid-cols-1 place-items-center">
          <img
            src={Img.indonesia}
            alt="Peta Indonesia"
            className="col-start-1 row-start-1"
          />
          {/* <img
            src={Img.profile}
            alt="Ibnu-Alinsani"
            className="rounded-full backdrop-blur-sm aspect-square object-cover row-start-1 col-start-1"
            width={"70%"}
            height={"50%"}
          /> */}
        </div>
        <div className="flex flex-col gap-4 text-center ">
          <h1 className="inline rounded-md bg-red-600 px-4 py-2 text-center font-samurai text-3xl text-white">
            Hello World!
          </h1>
          <h1 className="inline-block font-japan text-3xl font-bold text-white">
            My <span className="text-red-600">name</span> is{" "}
            <span className="text-red-600">Ibnu</span>
          </h1>
          <span className="block font-azeret text-2xl font-bold text-white">
            and i'm <span className="text-red-600">web developer</span>
          </span>
        </div>
        <div className="box-border text-center">
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
