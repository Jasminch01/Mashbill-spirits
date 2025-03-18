import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="flex justify-center lg:justify-start">
        <Image src={"/mashbill1.png"} width={300} height={300} alt="mashbill" />
      </div>

      {/* banner */}
      <div className="flex xl:flex-row flex-col-reverse items-center justify-between mb-10 px-5 lg:px-0">
        <div className="text-white text-left xl:w-[600px]">
          <p className="text-3xl uppercase mb-5">
            Revolutionizing the Liquor Industry
          </p>
          <div className="space-y-5 text-left">
            <p className="text-white/80 text-sm">
              Welcome to Mashbill Spirits, your gateway to unparalleled
              opportunities in the premium liquor industry. Exclusively crafted
              for celebrities, influencers, and brands, we unlock the doors to
              direct-to-consumer sales, bypassing traditional industry
              constraints
            </p>
            <p className="text-white/80 text-sm">
              Our innovative model empowers you with ownership of your own
              brand, ensuring you reap the full benefits of your personal
              influence and fanbase. Unlike conventional licensing deals, we
              pave the way for you to not just endorse, but to truly own,
              prosper, and potentially experience a lucrative exit from your
              bespoke liquor brand.
            </p>
            <p className="font-semibold text-lg">
              Discover the path to owning a piece of the premium liquor market.
            </p>
          </div>

          <button className="uppercase bg-[#ed0000] p-3 font-bold lg:mt-24 mt-5">
            Contact Us
          </button>
        </div>
        <div className="flex-1">
          <Image
            src={"/banner.png"}
            className="lg:w-full"
            width={500}
            height={500}
            alt="mashbill-banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
