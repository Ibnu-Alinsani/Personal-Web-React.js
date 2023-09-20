import iconDW from "../../assets/icon.png";
import iconWB from "../../assets/book.png";
import gn from "../../assets/stars.svg";

const Portfolio = () => {
  return (
    <section className="flex h-screen flex-col gap-8 bg-black py-12 font-azeret text-white">
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
        className="w-100 flex h-auto flex-col gap-8 bg-sky-500 bg-fixed bg-center bg-no-repeat px-8 py-12"
        style={{ backgroundImage: `url(${gn})` }}
      >
        <a href="https://dewetour-two.vercel.app/">
          <div className="group grid h-full w-full grid-cols-1 place-items-center gap-4  overflow-hidden rounded-xl bg-white/30 px-4 py-4 text-center text-white backdrop-blur-md transition duration-300  hover:bg-gradient-to-t hover:from-white/30 hover:to-yellow-400">
            <div className="col-start-1 row-start-1 mt-6  flex flex-col gap-2 transition duration-300 group-hover:opacity-0">
              <img
                src={iconDW}
                alt="dewetour"
                width={"70px"}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold text-yellow-500">DeweTour</h2>
              <span>Hover here</span>
            </div>
            <div className="col-start-1 row-start-1 translate-y-40 transform opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h1 className="text-2xl font-bold">DeweTour</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, pariatur!
              </p>
            </div>
          </div>
        </a>
        <a href="https://waysbook-mu.vercel.app/">
          <div className="group grid h-full w-full grid-cols-1 place-items-center gap-4  overflow-hidden rounded-xl bg-white/30 px-4 py-4 text-center text-white backdrop-blur-md transition duration-300 hover:bg-gradient-to-t hover:from-white/30 hover:to-sky-400">
            <div className="col-start-1 row-start-1 mt-6  flex flex-col gap-2 transition duration-300 group-hover:opacity-0">
              <img
                src={iconWB}
                alt="dewetour"
                width={"70px"}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold text-sky-400">WaysBook</h2>
              <span>Hover here</span>
            </div>
            <div className="col-start-1 row-start-1 translate-y-40 transform opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <h1 className="text-2xl font-bold">DeweTour</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita, pariatur!
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
