"use client";

export default function DropDown({ onClose }: { onClose: any }) {
  const links = [
    { name: "OUR MISSION", location: "mission" },
    { name: "PORTFOLIO", location: "portfolio" },
    { name: "FEATURES", location: "features" },
    { name: "MAKE AN APPOINTMENT", location: "contact" },
  ];

  const handleClick = (location: string) => {
    onClose();

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
    <div className="fixed top-16 left-0 bg-light w-dvw h-fit shadow-md shadow-slate-600">
      {links.map((link, index) => {
        return (
          <div
            key={link.name}
            className={`${
              index >= links.length - 1 ? "border-none" : "border-b-2"
            } h-16 flex items-center`}
            onClick={() => handleClick(link.location)}
          >
            <h1 className="text-night px-4">{link.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
