import React from 'react';
import { Leaf, Users, FlaskConical } from 'lucide-react';

export function ImpactSection() {
  // Mock data for demonstration, replacing the import
  const impactItems = [
    {
      id: 'environmental',
      title: 'Environmental Focus',
      description: 'Our team combines expertise in environmental science, technology, and user experience to create tools that make a real difference in the fight against climate change.'
    },
    {
      id: 'action',
      title: 'Actionable Insights',
      description: 'We provide clear, personalized data and suggestions to help you understand and improve your environmental impact.'
    },
    {
      id: 'scientific',
      title: 'Scientific Accuracy',
      description: 'All our carbon calculations are based on the latest climate science research and internationally recognized methodologies for carbon accounting.'
    }
  ];

  const icons = [
    <Leaf className="text-white h-7 w-7" />,
    <Users className="text-white h-7 w-7" />,
    <FlaskConical className="text-white h-7 w-7" />,
  ];

  return (
    <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] py-20 md:py-32 min-h-screen flex items-center bg-white">
      <div className="box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:px-[21px] w-full">
        <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center mb-[42px] md:mb-14">
          <h2 className="text-[26.25px] font-bold box-border leading-[31.5px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[31.5px] md:leading-[35px]">Our Impact</h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)] px-3.5 md:text-[17.5px]">Dedicated to making sustainability achievable for everyone</p>
        </div>
        <div className="items-center box-border gap-x-[21px] grid grid-cols-none outline-[oklab(0.708_0_0_/_0.5)] gap-y-[21px] md:gap-x-[42px] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:gap-y-[42px]">
          {impactItems.map((item, index) => (
            <div 
              key={item.id} 
              className="text-[oklch(0.145_0_0)] bg-white box-border flex flex-col items-start p-7 rounded-[12.75px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="box-border outline-[oklab(0.708_0_0_/_0.5)]">
                <div className="items-center bg-black box-border flex h-14 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-14 mb-[21px] rounded-full">
                   {icons[index]}
                </div>
                <h3 className="text-[21px] font-bold box-border leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-[21px]">{item.title}</h3>
                <p className="text-[oklch(0.446_0.03_256.802)] text-[15.75px] box-border leading-[24.5px] outline-[oklab(0.708_0_0_/_0.5)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
