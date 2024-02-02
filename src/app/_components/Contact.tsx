"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-primary h-auto w-full px-10 xs:py-24" id="contact">
      <h1 className="text-3xl text-center mb-16">Contact Us</h1>
      <div className="flex flex-col items-start h-auto">
        <label className="text-xl font-light">Name</label>
        <input
          className="w-full py-1 px-2 outline-none text-night mb-8"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-xl font-light">Email</label>
        <input
          className="w-full py-1 px-2 outline-none text-night mb-8"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-xl font-light">Phone (optional)</label>
        <input
          className="w-full py-1 px-2 outline-none text-night mb-8"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="text-xl font-light">Message</label>
        <textarea
          className="w-full h-64 resize-none p-2 text-night mb-8"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="xs:w-full bg-light text-primary xs:h-10 font-semibold xs:mt-8">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
