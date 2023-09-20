import vector from "../../assets/vector.png";

const About = () => {
  return (
    <section
      className="relative h-screen overflow-hidden bg-black px-4 pt-8 font-azeret text-white"
      style={{ boxShadow: "0 -3rem 4px inset black" }}
    >
      <div className="title-section">
        <h1 className="title">About Me</h1>
        <span className="block"> ------&gt;</span>
        <h1 className="z-10 mix-blend-difference">イブヌ・アリンサニ</h1>
      </div>
      <img
        src={vector}
        alt="Ibnu Alinsani"
        className="absolute bottom-0 end-0 h-1/2 object-cover"
      />
      <div className="relative w-3/4 ">
        <p className="mt-6 mix-blend-difference">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          delectus nihil assumenda repudiandae tenetur laborum officiis maxime.
          Ipsa sint sequi possimus unde, ex iste tempora, vel accusantium nobis
          iusto vitae doloribus, fugit sapiente laboriosam voluptatem blanditiis
          eos repudiandae magni corporis. Cum, quam hic aliquid eum doloremque
          tempora quisquam laudantium distinctio.
        </p>
      </div>
    </section>
  );
};

export default About;
