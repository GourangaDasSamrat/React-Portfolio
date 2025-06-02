import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {status === "success" && (
        <p className={styles.successMessage}>Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className={styles.errorMessage}>
          Failed to send message. Please try again.
        </p>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="user_name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="user_email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input
          className="hover btn"
          type="submit"
          value={status === "sending" ? "Sending..." : "Submit"}
          disabled={status === "sending"}
        />
      </form>
    </section>
  );
}

export default Contact;
