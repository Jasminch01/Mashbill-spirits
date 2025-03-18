import Image from "next/image";

const FeatureBrands = () => {
  return (
    <div className="max-w-7xl mx-auto relative py-10 px-4 sm:px-6 lg:px-8">
      {/* Glowing Background Circle */}
      <div className="absolute top-[10rem] -right-[12rem] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#ed0000] blur-3xl md:w-[700px] md:h-[521px] hidden lg:block rounded-full opacity-25" />
      </div>

      {/* Title */}
      <p className="uppercase text-2xl sm:text-3xl text-white text-right mb-10 relative z-10">
        Feature Brands
      </p>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 relative z-10">
        {/* Card 1 */}
        <div className="w-full">
          <Image
            src={"/brand4.png"}
            className="w-full"
            width={300}
            height={300}
            alt="mashbill"
          />
          <div className="text-center my-5">
            <p className="uppercase text-white text-lg sm:text-xl">
              Jester’S COURT
            </p>
            <p className="uppercase text-white/60 text-sm">Tim Chantarangsu</p>
            <p className="uppercase text-white/60 text-sm">
              Wild &apos;N Out - No Chaser - send foodz
            </p>
            <div className="mt-5">
              <button className="uppercase px-5 py-1 bg-[#ed0000] text-white text-sm sm:text-base">
                More
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full">
          <Image
            src={"/brand3.png"}
            className="w-full"
            width={300}
            height={300}
            alt="mashbill"
          />
          <div className="text-center my-5">
            <p className="uppercase text-white text-lg sm:text-xl">
              Crimson blue
            </p>
            <p className="uppercase text-white/60 text-sm">Brandon Rush</p>
            <p className="uppercase text-white/60 text-sm">
              Kansas University - Goldens State Wariors
            </p>
            <div className="mt-5">
              <button className="uppercase px-5 py-1 bg-[#ed0000] text-white text-sm sm:text-base">
                More
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full">
          <Image
            src={"/brand2.png"}
            className="w-full"
            width={300}
            height={300}
            alt="mashbill"
          />
          <div className="text-center my-5">
            <p className="uppercase text-white text-lg sm:text-xl">
              black gold
            </p>
            <p className="uppercase text-white/60 text-sm">Kareem rush</p>
            <p className="uppercase text-white/80 text-sm">
              Mizzou - Los angeles lakers
            </p>
            <div className="mt-5">
              <button className="uppercase px-5 py-1 bg-[#ed0000] text-white text-sm sm:text-base">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBrands;
