import React from "react";

interface CardFaqProps {
  question: Question;
}

interface Question {
  id: number;
  question: string;
  answer: string;
}

const CardFAQ: React.FC<CardFaqProps> = ({ question }) => {
  return (
    <>
      <div className="bg-white mt-2 rounded-lg shadow-shadow-1 whitespace-pre-line p-6 sm:p-12 ">
        <h3 className="text-base sm:text-xl md:text-2xl my-1 font-semibold text-justify">{question.question}</h3>
        <p className="mb-2 font-light text-[11px] text-grey-mid">Terakhir diperbarui setahun lalu</p>
        <hr className="border-b-[1.2px] mx-4 mb-4" />
        <p className="font-medium text-xs leading-5">{question.answer}</p>
      </div>
      <div className="mx-4 sm:mx-14 my-4 sm:my-6 font-light text-[11px] text-grey-mid">
        <p>
          Punya pertanyaan lain?{" "}
          <span className="font-semibold underline text-black-base">
            <a href="/create-ticket">Buka tiket baru</a>
          </span>{" "}
          untuk menanyakan langsung!
        </p>
      </div>
    </>
  );
};

export default CardFAQ;
