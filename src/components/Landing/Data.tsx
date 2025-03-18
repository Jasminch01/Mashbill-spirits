import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoGlobeOutline, IoRocketOutline } from "react-icons/io5";

const Data = () => {
  return (
    <div className="max-w-7xl mx-auto relative z-10 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Text Content */}
      <div className="text-white mb-3">
        <p className="uppercase text-lg sm:text-xl ml-5">Data Analytics</p>
        <p className="text-2xl sm:text-3xl uppercase font-light">
          Shaping the Future of Spirits
        </p>
      </div>

      {/* Image and Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={"/brand1.png"}
            alt="mashbill"
            className="w-full"
            width={600}
            height={500}
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-white">
          {/* Icons */}
          <div className="flex items-center gap-5 mb-6 sm:mb-10">
            <div className="bg-[#ed0000] p-3 rounded-full">
              <AiOutlineShareAlt className="text-xl" />
            </div>
            <div className="bg-[#ed0000] p-3 rounded-full">
              <IoGlobeOutline className="text-xl" />
            </div>
            <div className="bg-[#ed0000] p-3 rounded-full">
              <IoRocketOutline className="text-xl" />
            </div>
          </div>

          {/* Heading */}
          <p className="text-xl sm:text-2xl uppercase mb-5">
            AR-Powered Solutions
          </p>

          {/* Description */}
          <p className="mb-6 sm:mb-10 text-sm text-white/80">
            With our cutting-edge augmented reality technology, every bottle
            becomes more than just a drink—it’s an experience. Labels transform,
            worlds unfold, and stories come to life, immersing consumers in
            interactive, shareable moments that connect them to the brand like
            never before.
          </p>

          {/* Subtext */}
          <p className="text-sm sm:text-[14px]">
            Storytelling, innovation, and engagement—poured into every bottle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
