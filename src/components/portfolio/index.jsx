import iconDW from "../../assets/icon.png";
import iconWB from "../../assets/book.png";
import gn from "../../assets/stars.svg";

const Portfolio = () => {
  return (
    <div className="h-screen text-black mt-20 py-4 font-azeret flex flex-col gap-8">
      <div className="title-section px-4">
        <h1 className="title">Portfolio</h1>
        <span>------&gt;</span>
        <h1>フルスタック開発者</h1>
      </div>
      <p className="mx-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        suscipit enim. In laudantium beatae omnis ab expedita eveniet nihil
        optio?
      </p>
      <div
        className="bg-sky-500 h-auto py-12 w-100 bg-center bg-no-repeat bg-fixed flex flex-col gap-8 px-8"
        style={{ backgroundImage: `url(${gn})` }}
      >
        <a href="https://dewetour-two.vercel.app/">
          <div className="w-full h-full px-4 py-4 rounded-xl backdrop-blur-md bg-white/30  overflow-hidden grid grid-cols-1 place-items-center gap-4 text-center text-white transition duration-300 group  hover:bg-gradient-to-t hover:from-white/30 hover:to-yellow-400">
            <div className="flex flex-col gap-2 mt box-border mt-6 row-start-1 col-start-1 group-hover:opacity-0 transition duration-300">
              <img
                src={iconDW}
                alt="dewetour"
                width={"70px"}
                className="mx-auto"
              />
              <h2 className="font-bold text-2xl text-yellow-500">DeweTour</h2>
              <span>Hover here</span>
            </div>
            <div className="row-start-1 col-start-1 grid gap-4 transform translate-y-40 group-hover:translate-y-0 transition duration-300">
              <h1 className="text-2xl font-bold">DeweTour</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, pariatur!
              </p>
            </div>
          </div>
        </a>
        <a href="https://waysbook-mu.vercel.app/">
          <div className="w-full h-full px-4 py-4 rounded-xl backdrop-blur-md bg-white/30  overflow-hidden grid grid-cols-1 place-items-center gap-4 text-center text-white transition duration-300 group hover:bg-gradient-to-t hover:from-white/30 hover:to-sky-400">
            <div className="flex flex-col gap-2 mt box-border mt-6 row-start-1 col-start-1 group-hover:opacity-0 transition duration-300">
              <img
                src={iconWB}
                alt="dewetour"
                width={"70px"}
                className="mx-auto"
              />
              <h2 className="font-bold text-2xl text-sky-400">WaysBook</h2>
              <span>Hover here</span>
            </div>
            <div className="row-start-1 col-start-1 grid gap-4 transform translate-y-40 group-hover:translate-y-0 transition duration-300">
              <h1 className="text-2xl font-bold">DeweTour</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, pariatur!
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
