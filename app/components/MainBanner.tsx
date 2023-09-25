import Image from "next/image";
import { FC } from "react";

const MainBanner: FC = () => {
  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-64"
        src="/images/space.png"
        alt="banner"
        width={768}
        height={256}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <Image src="/images/owl.png" alt="owl" width={128} height={128} />
        <h2 className="text-white mt-2">
          The Future depends on what you do today.
        </h2>
        <button className="bg-blue-800 px-4 py-2 mt-2 rounded-lg text-white hover:bg-blue-900 hover:line-through">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
