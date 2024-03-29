import Image from "next/image";
import Link from "next/link";
import React from "react";

type featureType = {
  id: number;
  name: string;
  imagePath: string;
  url: string;
};

const features: featureType[] = [
  {
    id: 1,
    name: "Buka Tiket Baru",
    imagePath: "/assets/img/feature-1.png",
    url: "/create-ticket",
  },
  {
    id: 2,
    name: "Cek Status Tiket",
    imagePath: "/assets/img/feature-2.png",
    url: "/check-ticket",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16 md:mb-24">
      <h1 className="text-[36px] font-h1 uppercase mb-8 md:mb-14">LAYANAN</h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-24">
        {features.map((feature) => (
          <Link key={feature.id} href={feature.url}>
            <div className="flex flex-col items-center justify-around space-y-5 px-8 py-10 md:px-12 md:py-14 bg-grey-base hover:bg-grey-light rounded-[10px] border-[1px] border-biru drop-shadow-shadow-3">
              <div className="relative w-14 h-14 md:w-24 md:h-24">
                <Image src={feature.imagePath} alt={feature.name} fill />
              </div>
              <h2 className="text-lg md:text-h2 font-h2 text-center">{feature.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
