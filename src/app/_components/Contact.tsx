"use client";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [titleAnimation, setTitleAnimation] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Function to check if the title is in the viewport with a buffer
  const isElementInViewport = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      // Calculate the threshold by multiplying the window's innerHeight by 0.4
      const threshold = window.innerHeight * 0.01;
      return rect.top - threshold < window.innerHeight;
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport() && !titleAnimation) {
        setTitleAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [titleAnimation]);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsSending(true);
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      const formProps = {
        from_name: "Caloop Mobile LLC",
        to_name: formData.get("user_name"),
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
          () => {
            setShowSuccess(true);
            setIsSending(false);
            form.reset();
            setTimeout(() => setShowSuccess(false), 3000);
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
      <h1
        ref={titleRef}
        className={`text-3xl xs:mb-8 xl:text-4xl text-center xl:my-16 ${
          titleAnimation ? "slide-in-title slide-in" : "slide-in-title"
        }`}
      >
        Contact Us
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-start h-auto xl:w-1/3 xl:item"
      >
        <label htmlFor="name" className="text-xl font-light">
          Name*
        </label>
        <input
          id="name"
          name="user_name"
          className="w-full py-1 px-2 outline-none text-night mb-8"
          type="text"
          required
        />
        <label htmlFor="email" className="text-xl font-light">
          Email*
        </label>
        <input
          id="email"
          name="user_email"
          className="w-full py-1 px-2 outline-none text-night mb-8"
          type="email"
          required
        />
        <label htmlFor="message" className="text-xl font-light">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-64 resize-none p-2 text-night mb-8"
          required
        />
        <button
          type="submit"
          disabled={isSending}
          className={`xs:w-full bg-light leading-relaxed duration-500 text-primary xs:h-10 font-semibold xs:mt-4 ${
            !isSending && "hover:opacity-85"
          } transition-all ${isSending && "opacity-50"}`}
        >
          {isSending ? "Submitting..." : "SUBMIT"}
        </button>
        <div
          className={`success-checkmark ${
            showSuccess ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <FaCheck className="text-green-500 fixed -translate-x-1/2 top-1/2 left-1/2 z-50 bg-white rounded-full text-lg p-6 w-24 h-24 shadow-xl" />
        </div>
      </form>
    </div>
  );
}
