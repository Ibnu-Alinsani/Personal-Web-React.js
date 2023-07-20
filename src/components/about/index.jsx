import react from "react";
import vector from "../../assets/vector.png";

const About = () => {
  return (
    <section
      className="bg-black h-screen text-white font-azeret pt-8 px-4"
      style={{ boxShadow: "0 -3rem 4px inset black" }}
    >
      <div className="title-section">
        <h1 className="title">About Me</h1>
        <span className="block">------&gt;</span>
        <h1>イブヌ・アリンサニ</h1>
      </div>
      <div>
        <img
          src={vector}
          alt="Ibnu Alinsani"
          width={""}
          height={""}
          className="h-screen object-cover absolute left-0 "
        />
        <p className="mix-blend-difference mt-6">
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
