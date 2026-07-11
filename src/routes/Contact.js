import { useState } from "react";
import Hero from "../components/Hero";
import contactimg from "../assets/img2.jpeg";
import "./ContactStyles.css";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Thank you. Your message has been prepared successfully.");
    setFormData(initialFormData);
  };

  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={contactimg}
        title="Contact"
      />
      <section className="contact-container">
        <h2>Send us a message</h2>
        <p>
          Have a question about destinations, bookings, or trip planning? Send
          us a note and we will help you get started.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span className="form-error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span className="form-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <span className="form-error" id="subject-error">
                {errors.subject}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && (
              <span className="form-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <button className="contact-button" type="submit">
            Submit
          </button>

          {successMessage && (
            <p className="form-success" role="status">
              {successMessage}
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export default Contact;
