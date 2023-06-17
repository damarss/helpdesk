import React, { useState } from 'react';
import { HiChevronRight, HiChevronUp } from 'react-icons/hi';

interface AccordionUIProps {
  title: string;
  id: number;
  questions: Question[];
  onQuestionClick: (question: Question) => void;
  onAccordionClick: (accordionId: number) => void;
  isOpen: boolean;
}

interface Question {
  id: number;
  question: string;
  answer: string;
}

const AccordionUI: React.FC<AccordionUIProps> = ({
  title,
  id,
  questions,
  onQuestionClick,
  onAccordionClick,
  isOpen,
}) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(null);

  const handleAccordionClick = () => {
    onAccordionClick(id);
    setSelectedQuestionId(null);
  };

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestionId(question.id);
    onQuestionClick(question);
  };

  return (
    <>
      <div
        onClick={handleAccordionClick}
        className={`flex group cursor-pointer w-full mx-auto h-16 justify-between items-center mt-2 rounded-md shadow-lg
        ${isOpen ? 'bg-blue-base' : 'bg-white'} 
        hover:bg-blue-base hover:shadow-lg focus:bg-blue-base hover:border-none border-2 border-grey-light `}
      >
        <div className='flex group cursor-pointer'>
          <div
            className={`text-${isOpen ? 'white' : 'grey-mid'} pl-6 group-hover:text-white font-semibold text-[13px] leading-5`}
          >
            {title}
          </div>
        </div>

        <div className='flex items-center justify-center pr-2'>
          {isOpen ? (
            <HiChevronUp className={`w-8 h-8 group-hover:text-white text-white`} />
          ) : (
            <HiChevronRight className='w-8 h-8 group-hover:text-white text-grey-mid' />
          )}
        </div>
      </div>

      {isOpen && (
        <div className='ml-4 md:ml-8 border-l-[3px] border-grey-light my-6 text-justify  pr-0 md:pr-6 lg:pr-0'>
          {questions.map((question) => (
            <div
              key={question.id}
              className={`cursor-pointer text-sm md:text-base ml-10 my-4 bg-white w-2/3 sm:w-3/4 h-auto rounded-md py-4 mb-2 hover:text-dark-main ${
                selectedQuestionId === question.id ? 'font-semibold' : 'text-grey-mid'
              }`}
              onClick={() => handleQuestionClick(question)}
            >
              {question.question}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AccordionUI;
