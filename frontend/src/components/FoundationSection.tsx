import React from 'react';
import { foundationSteps } from '../data/foundation';

export function FoundationSection() {
  return (
    <div className="text-white bg-black box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32 min-h-screen flex items-center">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px] w-full">
        <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:text-[42px] md:leading-[42px] md:mb-[70px]">Our Foundation</h2>
        <div className="box-border gap-x-7 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-7 md:gap-x-[42px] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[42px]">
          {foundationSteps.map((step) => (
            <div 
              key={step.id} 
              className="text-black bg-white box-border gap-x-[21px] flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] p-[35px] rounded-[12.75px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
                <div className="box-border h-14 outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-[21px]">
                  <img src={step.icon} alt="Icon" className="box-border h-full outline-[oklab(0.708_0_0_/_0.5)] w-full" />
                </div>
                <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[21px]">{step.title}</h3>
                {step.specialContent ? (
                  <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
                    <p className="text-[17.5px] font-medium box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5">{step.specialContent}</p>
                    <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[25.5938px] outline-[oklab(0.708_0_0_/_0.5)]">{step.description}</p>
                  </div>
                ) : (
                  <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[25.5938px] outline-[oklab(0.708_0_0_/_0.5)]">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
