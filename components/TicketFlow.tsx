import Image from "next/image";
import React from "react";

type FlowType = {
  id: number;
  name: string;
  imagePath: string;
};

type TicketFlowProps = {
  id: string;
};

const TicketFlow: React.FC<TicketFlowProps> = ({ id }) => {
  const flows: FlowType[] = [
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

  return (
    <div id={id} className="mb-16 md:mb-24">
      <h1  className="text-3xl font-h1 text-center mb-8 md:mb-14 uppercase">
        Alur Pembuatan Tiket
      </h1>
      <div  className="flex flex-col md:flex-row justify-center items-center w-full md:my-4 space-y-7 md:space-x-28 md:space-y-0">
        {flows.map((flow) => (
          <div
            key={flow.id}
            className="mx-auto md:mx-0 flex flex-col items-center justify-around space-y-3 w-52 h-52"
          >
            <Image
              src={flow.imagePath}
              alt={flow.name}
              width={flow.id === 2 ? 125 : 100}
              height={flow.id === 2 ? 125 : 100}
            />
            <h3 className="whitespace-pre-line text-h3 font-h3 text-center">
              {flow.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketFlow;
