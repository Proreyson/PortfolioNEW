import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t7l0xje",
        "template_2r6v7dq",
        {
          from_name: form.name,
          to_name: "Reyson",
          from_email: form.email,
          to_email: "r3ys0ncarpio14@gmail.com",
          message: form.message,
        },
        "uPdaut_hwlauoeHSs"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="contact-content p-5 m-4">
        <div className="row">
          <div
            className="col-lg-7 p-5"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h5 className="text-white m-3 fw-bold">
              {" "}
              Get in touch, let's talk.
            </h5>
            <p className="text-white m-3">
              Feel free to send me an{" "}
              <a
                className="no-decoration"
                href="mailto:r3ys0ncarpio14@gmail.com"
              >
                <u className="fw-bolder text-white">email</u>
              </a>{" "}
              or schedule a{" "}
              <a
                className="no-decoration"
                href="https://calendly.com/r3ys0ncarpio14/30min"
              >
                <u className="fw-bolder text-white">free consultation</u>
              </a>{" "}
              with me.
            </p>

            <div className="sm-md m-3">
              <h1 className="text-secondary">
                {" "}
                Have a question? Please enquire below{" "}
              </h1>

              <form ref={formRef} onSubmit={handleSubmit} action="#">
                <div className="m-3">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="name@example.com"
                      onChange={handleChange}
                      value={form.name}
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Name"
                      onChange={handleChange}
                      value={form.email}
                    />
                    <label for="floatingPassword">Email address</label>
                    <div id="emailHelp" className="form-text text-secondary">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="form-floating mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      onChange={handleChange}
                      value={form.message}
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>

                  <div className="mt-3 text-secondary">
                    <p id="Privacy">
                      By using this form you agree with the storage and handling
                      of your data by this website. Please read our{" "}
                      <a href="#">
                        <u>Privacy Policy</u>
                      </a>{" "}
                      for more information on how we handle your data.
                    </p>

                    <div className="form-check" id="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        I agree
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary"
                      
                    >
                      {loading ? "Sending..." : ""}
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="col-lg-5 p-5"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <div style={{ position: "relative", paddingBottom: "75%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1934.9609032816222!2d121.1862784296619!3d14.081793061098729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd68a6e9965305%3A0x1618255c87078fd3!2s103%20Pan-Philippine%20Hwy%2C%20Santo%20Tomas%2C%20Batangas!5e0!3m2!1sen!2sph!4v1697662596178!5m2!1sen!2sph"
                frameBorder="0"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
