"use client";
import { useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    if (formRef.current) {
      const form = formRef.current;
      const formData = new FormData(form);
      const formProps = {
        from_name: "Caloop Mobile LLC",
        to_name: formData.get("user_name"), // Assuming "Luke" is a constant recipient name
        message: formData.get("message"),
        to_email: formData.get("user_email"),
      };

      emailjs
        .send(
          "service_9yzaack",
          "template_s1tkwvy",
          formProps,
          "0HB1tAOW6O6lCcLXz"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSending(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
            if (formRef.current) {
              formRef.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
            setIsSending(false);
          }
        );
    }
  };

  return (
    <div
      className="flex flex-col bg-primary h-auto w-full px-10 xs:py-24 xl:justify-center xl:items-center"
      id="contact"
    >
      <h1 className="text-3xl text-center mb-16 xs:mb-8 xl:text-4xl">
        Contact Us
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start h-auto xl:w-1/2 xl:item"
      >
        <label className="text-xl font-light">Name*</label>
        <input
          name="user_name" // Match this name attribute with your EmailJS template variable
          className="w-full py-1 px-2 outline-none text-night mb-8"
          type="text"
          required
        />
        <label className="text-xl font-light">Email*</label>
        <input
          name="user_email" // Match this name attribute with your EmailJS template variable
          className="w-full py-1 px-2 outline-none text-night mb-8"
          type="email"
          required
        />
        <label className="text-xl font-light">Message*</label>
        <textarea
          name="message" // Match this name attribute with your EmailJS template variable
          className="w-full h-64 resize-none p-2 text-night mb-8"
          required
        />
        <button
          type="submit"
          className="xs:w-full bg-light text-primary xs:h-10 font-semibold xs:mt-4 hover:opacity-85 transition-all"
        >
          {isSending ? "Submitting..." : "SUBMIT"}
        </button>
        {showSuccess && <FaCheck className="text-green-500" />}
      </form>
    </div>
  );
}
