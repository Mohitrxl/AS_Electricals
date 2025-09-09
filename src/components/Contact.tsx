"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import styles from "../components/CSS/Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.overlay}></div>

      <h2 className={styles.heading}>Let’s Work Together ⚡</h2>
      <p className={styles.description}>
        Have a project in mind or need our electrical services? Fill out the
        form below and we’ll get back to you soon.
      </p>

      <div className={styles.wrapper}>
        {/* Left Side - Image */}
        <div className={styles.imageBox}>
          <Image
            src="/assets/Smilegirls.png"
            alt="Contact Us"
            fill
            priority
            className={styles.image}
          />
        </div>

        {/* Right Side - Form */}
        <div className={styles.formBox}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className={styles.input}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
              className={styles.input}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className={styles.textarea}
            ></textarea>

            <button type="submit" className={styles.button}>
              {submitted ? "✅ Message Sent!" : "🚀 Send Message"}
            </button>
          </form>

          <div className={styles.contactInfo}>
            <p>
              📧 Email:{" "}
              <a href="mailto:support@reliableelectrical.com">
                support@reliableelectrical.com
              </a>
            </p>
            <p>📞 Phone: +91 9876543210</p>
          </div>
        </div>
      </div>
    </section>
  );
}
