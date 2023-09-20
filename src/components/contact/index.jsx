import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yw509jf",
        "template_h6lqheo",
        form.current,
        "5w3ltqRRU7GzBscVG"
      )
      .then((res) => {
        console.log("email send successfully", res.text);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="h-auto bg-black px-4 py-16 font-azeret text-white">
      <div className="title-section">
        <h1 className="title">GET IN TOUCH</h1>
        <span className="block"> ------&gt;</span>
        <h1 className="z-10 mix-blend-difference">つながろう</h1>
      </div>
      <div className="my-8">
        <form className="" ref={form} onSubmit={sendMail}>
          <div className="">
            <label htmlFor="name" className="text-lg">
              Name
              <input
                type="text"
                className="input"
                name="from_name"
              />
            </label>
            <label htmlFor="name" className="text-lg">
              Email
              <input
                type="email"
                className="input"
                name="from_email"
              />
            </label>
            <label htmlFor="name" className="text-lg">
              Message
              <textarea
                type="tel"
                className="input min-h-[10rem]"
                name="message"
              />
            </label>
          </div>
          <button
            className="mt-2 block h-10 
            w-full rounded-lg bg-white font-bold leading-10 text-black"
          >
            SEND EMAIL
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
