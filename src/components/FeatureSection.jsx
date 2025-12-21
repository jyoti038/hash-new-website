import Image from 'next/image';
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* Wrapper */}
      <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">

        
        <div className="relative w-full h-full">
          <Image
            src="/images/features.png"  
            alt="App Features"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
