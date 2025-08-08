import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="text-black bg-white box-border outline-[oklab(0.708_0_0_/_0.5)] min-h-screen flex items-center">
      <div className="relative box-border outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden w-full">
        <div className="relative box-border max-w-[1008px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 py-[70px] md:px-[21px] md:py-28">
          <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] text-center">
            <div className="box-border outline-[oklab(0.708_0_0_/_0.5)] mb-7 md:mb-[42px]">
              <div className="flex items-center justify-center mb-6">
                <Leaf className="w-12 h-12 text-black mr-4" />
                <h1 className="text-[31.5px] font-bold box-border tracking-[-0.7875px] leading-[35px] outline-[oklab(0.708_0_0_/_0.5)] md:text-[63px] md:tracking-[-1.575px] md:leading-[63px]">Carbon Counter</h1>
              </div>
              <p className="text-[oklch(0.551_0.027_264.364)] text-[31.5px] font-light box-border tracking-[-0.7875px] leading-[35px] outline-[oklab(0.708_0_0_/_0.5)] mb-3.5 md:text-[63px] md:tracking-[-1.575px] md:leading-[63px] md:mb-[21px]">Empowering Sustainable Living</p>
              <p className="text-[oklch(0.446_0.03_256.802)] text-sm box-border leading-[22.75px] max-w-[784px] outline-[oklab(0.708_0_0_/_0.5)] mx-auto px-3.5 md:text-[17.5px] md:leading-[28.4375px]">
                An innovative web application designed to empower individuals in their journey towards sustainability. By focusing on tracking, reflecting, and reducing one's carbon footprint, this application serves as a vital tool in our collective effort to combat climate change.
              </p>
            </div>
            <div className="box-border flex justify-center outline-[oklab(0.708_0_0_/_0.5)] pt-3.5 md:pt-7">
              <Link 
                to="/login"
                className="text-white text-sm bg-black block leading-[21px] outline-[oklab(0.708_0_0_/_0.5)] px-[21px] py-[10.5px] md:text-[15.75px] md:leading-[24.5px] md:px-7 md:py-3.5 hover:bg-gray-800 transition-all duration-300 ease-in-out hover:rounded-xl hover:scale-105"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
