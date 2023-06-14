import { AccordionFAQ } from "../components";


const Page = () => {
    return <>
        <div className="flex flex-col m-12 mt-24 md:m-28 ">
            <div className="mb-4 pl-1 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-[50px] md:leading-[54px]">Pertanyaan Umum</h1>
        <p className="text-[13px] text-grey-mid font-normal mb-4 leading-5">Pertanyaan Umum seputar SPMB Politeknik Statistika STIS</p>

            </div>
        <AccordionFAQ />
        </div>
    </>
}

export default Page;