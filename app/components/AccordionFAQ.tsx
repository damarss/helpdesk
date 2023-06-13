"use client"

import React, { useState, useEffect } from "react";
import AccordionUI from "./AccordionUI";
import CardFAQ from "./CardFAQ";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const AccordionFAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedAccordionId, setSelectedAccordionId] = useState<number | null>(null);

  const handleQuestionClick = (question: Question) => {
    setSelectedQuestion(question);
  };

  useEffect(() => {
    if (!selectedAccordionId) {
      setSelectedQuestion(null);
    }
  }, [selectedAccordionId]);

  const faqData = [
    {
      id: 1,
      title: "Ketentuan Pendaftaran",
      questions: [
        {
          id: 1,
          question: "Apakah peserta buta warna parsial bisa mendaftar?",
          answer: "Calon pendaftar tidak boleh buta warna total maupun parsial.",
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
        {
          id: 3,
          question: `Bagaimana jika data identitas (nama atau tempat lahir) di KTP salah dan sedang diproses perubahannya di Dukcapil namun saat pendaftaran belum selesai`,
          answer: `Yang diisikan pada saat pendaftaran adalah keterangan yang sesuai dengan yang tertera di kartu identitas KTP/KK saat ini. Perbaikan data pada KTP/KK nanti bisa dilaporkan kepada panitia setelah pengumuman kelulusan akhir, saat daftar ulang dan verifikasi berkas.`,
        },
      ],
    },
    {
      id: 2,
      title: "Pembayaran",
      questions: [
        {
          id: 3,
          question: "Kapan saya mendapatkan kode billing untuk pembayaran?",
          answer: `Kode billing untuk pembayaran biaya seleksi akan diberikan setelah dinyatakan lulus verifikasi berkas oleh panitia SPMB Politeknik Statistika STIS.
Proses verifikasi berkas dilakukan selama 3-5 hari kerja.`,
        },
        {
          id: 4,
          question: "Sampai kapan batas akhir pembayaran?",
          answer: "Pembayaran maksimal hingga tanggal 5 Mei 2023 pukul 23.59 WIB.",
        },
      ],
    },
    {
      id: 3,
      title: "Proses Pendafataran",
      questions: [
        {
          id: 5,
          question: "Kapan verifikasi berkas dilakukan?",
          answer: "Verifikasi berkas dilakukan setelah peserta mengupload berkas ke portal SPMB STIS. Setelah terverifikasi, peserta mendapat kode billing pembayaran.",
        },
      ],
    },
  ];

  const handleAccordionClick = (accordionId: number) => {
    if (selectedAccordionId === accordionId) {
      setSelectedAccordionId(null); 
    } else {
      setSelectedAccordionId(accordionId); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
      <div className="w-full md:w-2/3 lg:w-1/3 mr-28 md:mr-10 lg:mr-18 ">
        {faqData.map((data) => (
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
      <div className="w-full lg:w-3/4">
        {selectedQuestion ? (
          <CardFAQ question={selectedQuestion} />
        ) : (
          <div className="bg-white mt-2 rounded-lg  shadow-shadow-1 whitespace-pre-line p-12">
            Pilih pertanyaan untuk melihat jawabannya.
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionFAQ;
