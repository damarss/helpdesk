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
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-h1 font-h1 uppercase mb-14">LAYANAN</h1>
      <div className="flex md:space-x-24">
        {features.map((feature) => (
          <Link key={feature.id} href={feature.url}>
            <div className="flex flex-col items-center justify-around space-y-5 px-12 py-8 bg-grey-base rounded-[10px] border-[1px] border-biru shadow-shadow-3">
              <Image
                src={feature.imagePath}
                alt={feature.name}
                width={120}
                height={120}
              />
              <h2 className="text-h2 font-h2 text-center">{feature.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Features;
