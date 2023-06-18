"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import AccordionUI from './AccordionUI';
import CardFAQ from './CardFAQ';
import DataFAQ from './data/DataFAQ';

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface AccordionFAQProps {}

const AccordionFAQ: React.FC<AccordionFAQProps> = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedAccordionId, setSelectedAccordionId] = useState<number | null>(null);
  const router = useRouter();

  const handleAccordionClick = (accordionId: number) => {
    if (selectedAccordionId === accordionId) {
      setSelectedAccordionId(null);
    } else {
      setSelectedAccordionId(accordionId);
    }
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);

    const query = `?aid=${selectedAccordionId}&qid=${question.id}`;
    router.push(`/faq${query}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accordionId = parseInt(urlParams.get('aid') || '') || null;
    const questionId = parseInt(urlParams.get('qid') || '') || null;

    setSelectedAccordionId(accordionId);

    const selectedQuestion = DataFAQ.reduce((foundQuestion: Question | null, data) => {
      if (foundQuestion) return foundQuestion;
      return data.questions.find((question) => question.id === questionId) || null;
    }, null);

    setSelectedQuestion(selectedQuestion);
  }, []);

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 ">
      <div className="w-full md:w-2/3 lg:w-1/3 mr-28 md:mr-10 lg:mr-18 mb-10 md:mb-16 space-y-6">
        {DataFAQ.map((data) => (
          <AccordionUI
            id={data.id}
            key={data.id}
            title={data.title}
            questions={data.questions}
            onQuestionClick={handleQuestionClick}
            onAccordionClick={handleAccordionClick}
            isOpen={selectedAccordionId === data.id}
          />
        ))}
      </div>
      <div className="w-full lg:w-3/4 ">
        {selectedQuestion ? (
          <CardFAQ question={selectedQuestion} />
        ) : (
          <div className="bg-white mt-2 rounded-lg shadow-shadow-1 whitespace-pre-line p-12 mb-20">
            Pilih pertanyaan untuk melihat jawabannya.
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionFAQ;
