import React from 'react';
import { whyCarbonCounterFeatures } from '../data/features';

export function WhyCarbonCounterSection() {
  // Filter out the 'community' feature as requested
  const filteredFeatures = whyCarbonCounterFeatures.filter(feature => feature.id !== 'community');

  return (
    <div className="bg-[oklch(0.985_0.002_247.839)] box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32 min-h-screen flex items-center">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px] w-full">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:mb-14">
          <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[31.5px] md:leading-[35px]">Why Carbon Counter?</h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] max-w-2xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:text-[17.5px]">
            In an era where environmental consciousness is crucial, Carbon Counter bridges the gap between awareness and action, making sustainability accessible to everyone.
          </p>
        </div>
        <div className="box-border gap-x-10 grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-10 md:gap-x-10 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-10">
          {filteredFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white box-border p-8 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="items-center bg-black box-border flex h-14 justify-center w-14 mb-3.5 mx-auto rounded-full">
                <img src={feature.icon} alt="Icon" className="text-white box-border h-7 w-7" />
              </div>
              <h3 className="text-[17.5px] font-semibold leading-[24.5px] mb-3.5 mt-5">{feature.title}</h3>
              <p className="text-[oklch(0.446_0.03_256.802)] leading-[24.5px]">
                {
                  feature.id === 'tracking' ?
                  'Our platform meticulously calculates your carbon footprint from daily activities like electricity usage, transportation, and food choices. We provide real-time estimates to help you understand your impact instantly.' :
                  feature.id === 'analytics' ?
                  'We offer comprehensive and insightful analytics that turn your raw data into clear, easy-to-understand visualizations. Track your progress over time, identify patterns, and pinpoint your biggest sources of emissions to make informed decisions.' :
                  feature.id === 'goals' ?
                  'Set personalized and achievable reduction targets. Our goal-setting feature helps you stay motivated by tracking your progress and celebrating milestones as you work towards a more sustainable lifestyle.' :
                  ''
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
