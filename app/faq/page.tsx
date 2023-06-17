import { AccordionFAQ } from "@/components";

const Page = () => {
  return (
    <main className="flex flex-col mx-7 md:mx-20 mb-20 md:mb-10 min-h-[70vh] space-y-10">
      <div className="mt-8 md:mt-18 mb-4 pl-1 w-full h-fit">
        <h1 className="text-3xl font-bold leading-[50px] md:leading-[54px]">
          Pertanyaan Umum
        </h1>
        <p className="text-[13px] text-grey-mid font-normal mb-4 leading-5">
          Pertanyaan Umum seputar SPMB Politeknik Statistika STIS
        </p>
      </div>
      <AccordionFAQ />
    </main>
  );
};

export default Page;
