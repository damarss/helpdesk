import DiscussionBody from "@/components/DiscussionBody";
import DiscussionForm from "@/components/DiscussionForm";
import DiscussionHead from "@/components/DiscussionHead";
import React from "react";

type Params = {
  number: string;
};

type discussion = {
  id: number;
  userName: string;
  message: string;
  createdAt: string;
};

type ticket = {
  number: string;
  isClosed: boolean;
  createdAt: string;
  userName: string;
  userEmail: string;
  discussions: discussion[];
};

const page = ({ params }: { params: Params }) => {
  const tiket = {
    number: params.number,
    isClosed: true,
    createdAt: "2022-09-27T00:00:00.000Z",
    userName: "Rizky Wijaya",
    userEmail: "rizkywijaya@gmail.com",
    discussions: [
      {
        id: 1,
        userName: "Rizky Wijaya",
        message:
          "Saya sangat tertarik untuk mendaftar sebagai mahasiswa di Polstat STIS. Bisakah Anda memberikan informasi lebih lengkap mengenai tata cara pendaftarannya? Saya ingin mengetahui langkah-langkah yang harus saya ikuti.",
        createdAt: "2021-08-01T00:00:00.000Z",
      },
      {
        id: 2,
        userName: "Humas Polstat STIS",
        message:
          "Anda perlu mengisi formulir pendaftaran online dan membayar biaya pendaftaran. Selanjutnya, kirimkan dokumen-dokumen pendukung yang diminta. Setelah itu, Anda akan mengikuti ujian seleksi sesuai dengan program studi yang Anda pilih. Setelah proses seleksi selesai, Polstat STIS akan mengumumkan hasil seleksi dan jika diterima, Anda perlu melakukan registrasi dan pembayaran biaya kuliah. Jika Anda membutuhkan bantuan tambahan, kami siap membantu.",
        createdAt: "2021-08-01T00:00:00.000Z",
      },
    ],
  };

  return (
    <main className="flex flex-col justify-center mx-7 md:mx-36">
      <DiscussionHead ticket={tiket} />
      <DiscussionBody ticket={tiket} />
      <DiscussionForm />
    </main>
  );
};

export default page;
