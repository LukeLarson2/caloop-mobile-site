"use client";

export default function ProjectCard({
  title,
  imageUrl,
  description,
  url,
  handlePreview,
}: {
  title: string;
  imageUrl: string;
  description: string;
  url: string;
  handlePreview: (value: boolean) => void;
}) {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      {url === "images" ? (
        <div
          className="xs:w-full xs:h-60 bg-top bg-no-repeat bg-cover shadow-md shadow-black my-14 flex flex-col justify-end"
          style={{
            backgroundImage: `url(/assets/images/${imageUrl})`,
          }}
          key={title}
          onClick={() => handlePreview(true)}
        >
          <div className="bg-night opacity-75 flex flex-col p-3">
            <h1 className="text-2xl mb-2 font-semibold">{title}</h1>
            <p className="leading-5 font-light text-md">{description}</p>
          </div>
        </div>
      ) : (
        <div
          className="xs:w-full xs:h-60 bg-top bg-no-repeat bg-cover shadow-md shadow-black my-14 flex flex-col justify-end"
          style={{
            backgroundImage: `url(/assets/images/${imageUrl})`,
          }}
          key={title}
          onClick={() => openInNewTab(url)}
        >
          <div className="bg-night opacity-75 flex flex-col p-3">
            <h1 className="text-2xl mb-2 font-semibold">{title}</h1>
            <p className="leading-5 font-light text-md">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
