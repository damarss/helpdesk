import Link from "next/link";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";

type questionType = {
  id: number;
  question: string;
  category: string;
  answer: string;
};

const questions: questionType[] = [
  {
    id: 1,
    question: "Format dokumen yang diunggah?",
    category: "Ketentuan Pendaftaraan",
    answer:
      "Dokumen yang diunggah merupakan scan dokumen asli dalam format pdf berukuran maks 5Mb.",
  },
  {
    id: 2,
    question: "Kapan saya mendapatkan kode billing untuk pembayaran?",
    category: "Pembayaran",
    answer:
      "Kode billing untuk pembayaran biaya seleksi akan diberikan setelah dinyatakan lulus verifikasi berkas oleh panitia SPMB Politeknik Statistika STIS.Proses verifikasi berkas dilakukan selama 3-5 hari kerja",
  },
  {
    id: 3,
    question: "Apakah ada batasan jumlah tiket yang dapat dibuka?",
    category: "Ketentuan Pendaftaraan",
    answer: "Tidak ada batasan jumlah tiket yang dapat dibuka.",
  },
  {
    id: 4,
    question: "Kapan verifikasi berkas dilakukan?",
    category: "Proses Pendaftaraan",
    answer:
      "Verifikasi berkas dilakukan setelah peserta mengupload berkas ke portal SPMB STIS. Setelah terverifikasi, peserta mendapat kode billing pembayaran.",
  },
];

const HomeFAQ = () => {
  return (
    <div className="mb-16 md:mb-24">
      <h1 className="text-h1 font-h1 uppercase text-center mb-8 md:mb-14">
        PERTANYAAN UMUM
      </h1>
      <div className="flex flex-col justify-center items-center md:mx-28 mb-3">
        {questions.map((question) => (
          <div
            className="flex self-start w-full"
            key={question.id}
          >
            <div className="flex items-start w-full space-x-2 mb-5">
              <span className="w-[36px] h-[36px]">
                <HiOutlineBookOpen className="w-full h-full" />
              </span>
              <div className="border-b-[1px] border-biru pb-2 w-full">
                <h3 className="text-[16px] font-bold mb-1">{question.question}</h3>
            <span className="block w-fit text-[13px] font-semibold px-2 py-1 rounded-2xl bg-blue-50 text-biru mb-2">{question.category}</span>
                <p className="text-base">{question.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/faq" className="mx-auto flex w-fit bg-grey-light text-lg font-semibold px-10 py-2 rounded-lg hover:bg-grey-mid">
        Lainnya
      </Link>
    </div>
  );
};

export default HomeFAQ;
