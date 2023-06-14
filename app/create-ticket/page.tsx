import React from "react";
import { CreateForm } from "../components";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const CreateTicketPage = (props: Props) => {
  return (
    <main className="flex flex-col justify-center mx-7 md:mx-36">
      <div className="mt-8 md:mt-18 mb-6 md:mb-10 md:w-2/3">
        <h1 className="text-3xl font-h1 mb-2">Buka Tiket Baru</h1>
        <p className="text-base">
          Tidak menemukan jawaban atas pertanyaan anda di pertanyaan umum? Buat
          tiket sekarang dengan mengisi formulir berikut.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <CreateForm />
        <div className="ms-auto p-4 md:pe-0 hidden md:block">
          <Image
            src="/assets/img/create-ticket-illustration.png"
            alt="Create Ticket Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <p className="text-grey-mid text-secondary mb-16 md:mb-24">
        Sudah pernah membuat tiket? Cek status tiket anda{" "}
        <Link
          className="text-dark font-semibold underline"
          href="/check-ticket"
        >
          di sini
        </Link>
        .
      </p>
    </main>
  );
};

export default CreateTicketPage;
