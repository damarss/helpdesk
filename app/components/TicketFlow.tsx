import Image from "next/image";
import React from "react";

type flowType = {
  id: number;
  name: string;
  imagePath: string;
};

const flows: flowType[] = [
  {
    id: 1,
    name: "Buka Laman\nTiket Baru",
    imagePath: "/assets/img/flow-1.png",
  },
  {
    id: 2,
    name: "Isi Data Diri\ndan Buat Pertanyaan",
    imagePath: "/assets/img/flow-2.png",
  },
  {
    id: 3,
    name: "Tunggu Jawaban/\nCek Status Tiket",
    imagePath: "/assets/img/flow-3.png",
  },
];

const Features = () => {
  return (
    <div className="flex mb-24">
      <div className="flex justify-center items-center w-full md:my-4 md:space-x-28">
        {flows.map((flow) => (
          <div
            key={flow.id}
            className="flex flex-col items-center justify-around space-y-5 w-52 h-52"
          >
            <Image
              src={flow.imagePath}
              alt={flow.name}
              width={flow.id == 2 ? 150 : 120}
              height={flow.id == 2 ? 150 : 120}
            />
            <span className="whitespace-pre-line text-h3 font-h3 text-center">{flow.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
