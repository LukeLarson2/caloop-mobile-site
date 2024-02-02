"use client";

export default function Mission() {
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
    <div className="xs:h-auto xs:px-10 xs:py-32" id="mission">
      <h1 className="text-night text-3xl font-semibold xs:mb-3">Our Mission</h1>
      <p className="text-night leading-5 font-normal opacity-75">
        {`Our skilled team excels in developing accessible, scalable websites and
        apps with low latency. Trust us to deliver solutions that not only
        fulfill your current requirements but are also primed for future growth.
        Let's transform your ideas into reality with unmatched precision and
        confidence.`}
      </p>
      <button
        className="bg-primary py-2 px-3 mt-6 w-full h-9 text-sm"
        onClick={() => handleClick("contact")}
      >
        CONTACT US
      </button>
    </div>
  );
}
