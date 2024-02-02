"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Modal({
  handlePreview,
}: {
  handlePreview: (value: boolean) => void;
}) {
  const [index, setIndex] = useState(0);

  const images = ["PDF.jpg", "PDF-cover.JPG", "pdf-form.JPG"];

  const handleChange = (value: number, e: any) => {
    e.stopPropagation();
    let nextIndex = 0;
    if (index + value > images.length - 1) {
      nextIndex = 0;
    } else if (index + value < 0) {
      nextIndex = images.length - 1;
    } else {
      nextIndex = index + value;
    }
    setIndex(nextIndex);
  };

  return (
    <div
      onClick={() => handlePreview(false)}
      className="fixed top-0 left-0 z-99999999 w-dvw h-dvh bg-night flex items-center justify-center pt-24"
    >
      <FaChevronLeft
        onClick={(e) => handleChange(-1, e)}
        className="text-5xl w-16"
      />
      <div
        style={{ backgroundImage: `url(/assets/images/${images[index]})` }}
        className="relative z-99999999 w-full h-96 bg-contain bg-no-repeat bg-center"
      />
      <FaChevronRight
        onClick={(e) => handleChange(1, e)}
        className="text-5xl w-16"
      />
    </div>
  );
}
