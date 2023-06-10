"use client"

import React, { useState } from "react";
import AccordionUI from "./AccordionUI";
import CardFAQ from "./CardFAQ";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const AccordionFAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
  };

  const faqData = [
    {
      id: 1,
      title: "Ketentuan Pendaftaran",
      questions: [
        {
          id: 1,
          question: "Apakah peserta buta warna parsial bisa mendaftar?",
          answer: "Jawaban 1A",
        },
        {
          id: 2,
          question: "Apakah lulusan SMK/MAK bisa mendaftar?",
          answer: `Yang bisa mendaftar hanya lulusan SMK/MAK Bidang Keahlian Teknologi Informasi, meliputi:
        1. Pengembangan Perangkat Lunak dan Gim:
          - Rekayasa Perangkat Lunak
          - Pengembangan Gim
          - Sistem Informasi, Jaringan, dan Aplikasi      
        2. Teknik Jaringan Komputer dan Telekomunikasi:
          - Teknik Komputer dan Jaringan
          - Teknik Jaringan Akses Telekomunikasi
          - Teknik Transmisi Telekomunikasi   
        Selain dari jurusan di atas, mohon maaf belum bisa mendaftar ke Politeknik Statistika STIS`,
        },
      ],
    },
    {
      id: 2,
      title: "Pertanyaan 2",
      questions: [
        {
          id: 3,
          question: "Pertanyaan 2A",
          answer: "Jawaban 2A",
        },
        {
          id: 4,
          question: "Pertanyaan 2B",
          answer: "Jawaban 2B",
        },
      ],
    },
  ];

return (
  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
    <div className="w-full md:w-1/3 mr-28 ">
      {faqData.map((data) => (
        <AccordionUI
          key={data.id}
          title={data.title}
          questions={data.questions}
          onQuestionClick={handleQuestionClick}
        />
      ))}
    </div>
    <div className="w-full md:w-2/3">
      {selectedQuestion ? (
        <CardFAQ question={selectedQuestion} />
      ) : (
        <div className="bg-white mt-2 rounded-lg  shadow-shadow-1 whitespace-pre-line p-12">Pilih pertanyaan untuk melihat jawabannya.</div>
      )}
    </div>
  </div>
);

};

export default AccordionFAQ;
