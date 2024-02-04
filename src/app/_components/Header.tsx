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
      className="flex xs:h-128 bg-primary xs:w-full xs:px-10 xs:flex-col xs:justify-center xl:px-28 xl:h-128 xl:items-center"
      id="header"
    >
      <h1 className="text-3xl font-medium xs:mt-10 xl:text-5xl xl:mb-2">
        Beyond Apps.
      </h1>
      <h1 className="-mt-2 text-3xl font-medium xl:text-5xl">
        Beyond Imagination.
      </h1>
      <p className="xs:mt-3 opacity-85 text-lg xl:text-2xl">
        Leveraging AI for modern
      </p>
      <p className="xs:-mt-2 opacity-85 text-lg xl:text-2xl xl:mb-8">
        web and mobile app solutions
      </p>
      <button
        className="bg-light text-primary leading-relaxed text-sm px-4 flex justify-center items-center w-full mt-5 h-9 xl:w-96 hover:opacity-75 transition-opacity xl:text-xl xl:h-12 duration-500"
        onClick={() => handleClick("contact")}
      >
        MAKE AN APPOINTMENT
      </button>
    </div>
  );
}
