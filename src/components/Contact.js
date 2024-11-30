import React, { useState, useRef, useEffect } from "react";
import { useScroll } from "../context/refContext";
import emailjs from "@emailjs/browser";
import "./form.css";
const Contact = () => {
  const contact = useRef();
  const [value] = useScroll();
  const handleScrolling = () => {
    window.scrollTo({ top: contact.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    if (value === "contact") handleScrolling();
  }, [value]);

  // state values for contacting
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   contacting handler
  const handleContact = (e) => {
    e.preventDefault();
    const serviceId = "service_dnu5nqp";
    const templateId = "template_ku3eu6z";
    const publicKey = "NfEROWQXEPPJdh6nq";

    const templateParamms = {
      from_name: name,
      from_email: email,
      to_name: "Yogita Modi",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParamms, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response);
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <div ref={contact} className="contact">
      <h1 className="contact pro-heading">Contact Me!</h1>
      <div className="contact-form">
        <form onSubmit={handleContact} className="form">
          <div className="mb-3 form-body">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="mb-3 form-body">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-body">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
