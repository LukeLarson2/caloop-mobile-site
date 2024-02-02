"use client";

import services from "../_lib/services";

export default function Services() {
  return (
    <div className="text-night px-10 xs:py-24 items-center">
      <h1 className="text-3xl font-semibold">Services</h1>
      {services.map((service) => {
        const { title, imageUrl, description } = service;
        return (
          <div key={title} className="flex flex-col">
            <div
              className="xs:w-full xs:h-20 bg-center bg-no-repeat bg-contain my-14 flex flex-col justify-en"
              style={{
                backgroundImage: `url(/assets/images/${imageUrl})`,
              }}
            />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}
