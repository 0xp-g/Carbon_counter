import React from 'react';
import { valuesData } from '../data/values';

export function ValuesSection() {
  return (
    <section className="text-black bg-white box-border min-h-screen outline-[oklab(0.708_0_0_/_0.5)]">
      <div className="bg-[oklch(0.985_0.002_247.839)] box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32">
        <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px]">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:mb-14">
            <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[31.5px] md:leading-[35px]">Our Values</h2>
            <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] px-3.5 md:text-[17.5px]">The principles that guide our work and shape our platform</p>
          </div>
          <div className="box-border gap-x-[21px] grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] md:gap-x-[42px] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[42px]">
            {valuesData.map((value) => (
              <div 
                key={value.id} 
                className="text-[oklch(0.145_0_0)] bg-white box-border gap-x-[21px] flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] p-7 rounded-[12.75px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
                  <div className="items-center bg-black box-border flex h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-[21px] rounded-[3.35544e+07px]">
                    <img src={value.icon} alt="Icon" className="text-white box-border h-7 outline-[oklab(0.708_0_0_/_0.5)] w-7" />
                  </div>
                  <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[21px]">{value.title}</h3>
                  <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
