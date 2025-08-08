import React from 'react';

export function AboutSection() {
  return (
    <div id="about" className="box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32 min-h-screen flex items-center bg-white">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px] w-full">
        <div className="items-center box-border gap-x-7 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-7 md:gap-x-14 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-14">
          <div className="box-border order-2 outline-[oklab(0.708_0_0_/_0.5)] md:order-1">
            <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[31.5px] md:leading-[35px] md:mb-7">About Carbon Counter</h2>
            <div className="text-[oklch(0.373_0.034_259.733)] text-sm box-border leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] md:text-[15.75px] md:leading-[25.5938px]">
              <p className="text-sm box-border leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[15.75px] md:leading-[25.5938px] md:mb-7">
                Carbon Counter is an innovative web application that helps you track, reflect on, and reduce your carbon footprint. Our vision is a world where everyone can take actionable steps towards sustainability.
              </p>
              <p className="text-sm box-border leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] mb-[21px] md:text-[15.75px] md:leading-[25.5938px] md:mb-7">
                The app delivers a fully interactive and fluid experience. Designed with pure black and white aesthetics and subtle green accents, it's clean, minimal, and focused on environmental responsibility.
              </p>
              <p className="text-sm box-border leading-[22.75px] outline-[oklab(0.708_0_0_/_0.5)] md:text-[15.75px] md:leading-[25.5938px]">
                Join a growing community making a collective impact. With Carbon Counter, sustainability becomes simple, motivating, and achievable for everyone.
              </p>
            </div>
          </div>
          <div className="box-border flex justify-center order-1 outline-[oklab(0.708_0_0_/_0.5)] md:order-2">
            <div 
              className="items-center bg-[oklch(0.967_0.003_264.542)] box-border flex h-56 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-56 rounded-[8.75px] md:h-[280px] md:w-[280px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
                <div className="items-center bg-black box-border flex h-[70px] justify-center outline-[oklab(0.708_0_0_/_0.5)] w-[70px] mb-3.5 mx-auto rounded-[3.35544e+07px] md:h-[84px] md:w-[84px]">
                  <img src="https://c.animaapp.com/mdrc3hviqqeaod/assets/icon-9.svg" alt="Icon" className="text-white box-border h-[35px] outline-[oklab(0.708_0_0_/_0.5)] w-[35px] md:h-[42px] md:w-[42px]" />
                </div>
                <h3 className="text-[15.75px] font-semibold box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[17.5px]">Our Commitment</h3>
                <p className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] box-border leading-[17.5px] outline-[oklab(0.708_0_0_/_0.5)] px-3.5 md:text-sm md:leading-[21px]">Working towards a sustainable future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

