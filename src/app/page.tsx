"use client";

import Header from "./_components/Header";
import Mission from "./_components/Mission";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <main className="flex bg-light min-h-screen xs:w-dvw flex-col items-center justify-between xs:pt-32 overflow-y-auto">
      <Header />
      <Mission />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
}
