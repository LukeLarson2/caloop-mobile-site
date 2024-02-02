"use client";

export default function Header() {
  const handleClick = (location: string) => {
    const section = document.getElementById(location);
    if (section) {
      const offsetTop = section.offsetTop - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="flex xs:h-96 bg-primary xs:w-full xs:px-10 xs:flex-col xs:justify-center"
      id="header"
    >
      <h1 className="text-3xl font-medium">Beyond Apps.</h1>
      <h1 className="-mt-2 text-3xl font-medium">Beyond Imagination.</h1>
      <p className="xs:mt-3 opacity-85 text-lg">Leveraging AI for modern </p>
      <p className="xs:-mt-2 opacity-85 text-lg">
        web and mobile app solutions
      </p>
      <button
        className="bg-light text-primary text-sm px-4 flex justify-center items-center w-full mt-5 h-9"
        onClick={() => handleClick("contact")}
      >
        MAKE AN APPOINTMENT
      </button>
    </div>
  );
}
