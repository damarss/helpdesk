"use client"

import React from "react";
import AccordionFAQ from "@/components/AccordionFAQ";

const Page: React.FC = () => {

  return (
    <main className="flex flex-col mx-7 md:mx-20 min-h-[70vh]">
      <div className="mt-8 md:mt-10 mb-4 pl-1 w-full">
        <h1 className="text-[36px] font-h1 leading-[50px] md:leading-[54px]">
          Pertanyaan Umum
        </h1>
        <p className="text-base text-grey-mid font-normal mb-4 leading-5">
          Pertanyaan Umum seputar SPMB Politeknik Statistika STIS
        </p>
      </div>
      <AccordionFAQ />
    </main>
  );
};

export default Page;
