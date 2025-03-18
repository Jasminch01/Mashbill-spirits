import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Text Content */}
        <div className="text-white flex-1 text-center lg:text-right">
          <p className="text-3xl sm:text-4xl mb-6 sm:mb-10 uppercase">
            Leading the Legacy
          </p>
          <div className="space-y-6 sm:space-y-10">
            <p className="text-sm sm:text-base">
              Mashbill Spirits was founded by Bob Marino. Bob has been on the
              executive team of Tyson Foods and, as CEO of Cafepress, he took
              the company public to achieve record breaking profits by
              leveraging intellectual property of celebrities, athletes,
              recording artists, brands, and influencers.
            </p>
            <p className="text-sm sm:text-base">
              As a resident of Louisville Kentucky (bourbon country), Bob has
              always had a passion for the liquor business. When Covid changed
              the liquor laws to allow online sales, Bob heavily invested in the
              infrastructure and put together an impressive network of industry
              leaders needed to legally ship liquor online directly to
              consumers.
            </p>
            <p className="text-sm sm:text-base">
              Bob and his team at Mashbill Spirits are primed to build the next
              big thing: celebrity DTC liquor brands.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 mt-6 lg:mt-9 z-10">
          <Image
            src={"/about.png"}
            width={500}
            height={500}
            alt="mashbill"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
