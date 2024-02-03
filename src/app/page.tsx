"use client";

import Header from "./_components/Header";
import Mission from "./_components/Mission";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";
import Contact from "./_components/Contact";
import { useState } from "react";
import Modal from "./_components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handlePreview = (value: boolean) => {
    setShowModal(value);
  };
  return (
    <main className="flex bg-light min-h-screen flex-col items-center justify-between xs:pt-32 overflow-x-hidden">
      {showModal && <Modal handlePreview={handlePreview} />}
      <Header />
      <Mission />
      <Portfolio handlePreview={handlePreview} showModal={showModal} />
      <Services />
      <Contact />
    </main>
  );
}
