import react from "react";

const Contact = () => {
  return (
    <section className="h-screen mx-4">
      <div className="title-section">
        <h1 className="title">Get in Touch</h1>
        <span className="block"> - - - -&gt;</span>
        <h1>連絡する</h1>
      </div>
      <div>
        <form className="bg-sky-500">
          <h1>halo</h1>
          <div className="bg-black w-full">
            <label htmlFor="name">
              <input type="text" id="name" />
            </label>
          </div>
          <div className="bg-black w-full">
            <label htmlFor="name">
              <input type="text" id="name" />
            </label>
          </div>
          <div className="bg-black w-full">
            <label htmlFor="name">
              <input type="text" id="name" />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
