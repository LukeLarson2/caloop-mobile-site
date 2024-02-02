"use client";

import services from "../_lib/services";

export default function Services() {
  return (
    <div
      className="text-night px-10 xs:py-24 items-center flex flex-col justify-center"
      id="services"
    >
      <h1 className="text-3xl font-semibold xl:text-4xl xl:mt-16">Services</h1>
      <div className="flex xs:flex-col xl:flex-row xl:h-fit xl:w-3/5 xl:flex-wrap xl:justify-center xl:mb-16">
        {services.map((service) => {
          const { title, imageUrl, description } = service;
          return (
            <div key={title} className="flex flex-col justify-center xl:mx-10">
              <div
                className="xs:w-full xs:h-20 bg-center bg-no-repeat bg-contain mt-24 flex flex-col justify-en"
                style={{
                  backgroundImage: `url(/assets/images/${imageUrl})`,
                }}
              />
              <h2 className="font-semibold text-xl text-center mt-3">
                {title}
              </h2>
              <p className="font-light leading-4 text-lg mt-2 text-center xl:w-96">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
