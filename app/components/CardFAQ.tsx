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
    <div className="bg-white mt-2 rounded-lg shadow-[0_4px_30px_rgb(0,0,0,0.12)] whitespace-pre-line p-12">
      <h3 className="text-2xl my-1 font-semibold ">{question.question}</h3>
      <p className="mb-2 font-light text-[11px] text-grey-mid"> Terakhir di perbarui setahun lalu</p>
      <hr className="border-b-[1.2px] mx-4 mb-4" />
      <p className="font-medium text-xs leading-5">{question.answer}</p>
    </div>
  );
};

export default CardFAQ;
