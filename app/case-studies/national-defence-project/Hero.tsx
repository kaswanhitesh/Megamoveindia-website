'use client';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          zIndex: 0,
        }}
      />

      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <div className="relative z-[2] text-center px-4 opacity-100" style={{ willChange: 'opacity' }}>
        <div className="opacity-100 translate-y-0">
          <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px] mb-6 leading-tight">
            NATIONAL DEFENCE PROJECT
          </h1>
          <div className="w-20 h-px bg-white/60 mx-auto mb-6" />
          <p className="text-white text-lg lg:text-2xl tracking-[2px] font-light">
            Manufacturing Unit to Nyoma, Ladakh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
