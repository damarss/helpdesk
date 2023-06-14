import React from "react";
import { CheckForm } from "../components";

type Props = {};

const CheckTicketPage = (props: Props) => {
  return (
    <main className="flex flex-col mx-7 md:mx-36">
      <div className="mt-8 md:mt-18 mb-4 pl-1 w-full">
        <h1 className="text-3xl font-bold leading-[54px]">
          Cek Status Tiket
        </h1>
        <p className="text-[13px] text-grey-mid font-normal mb-4 leading-5">
          Ingin mengecek status tiket yang telah dibuat? Silahkan masukan email
          dan nomor tiket anda.
        </p>
      </div>
      <CheckForm />
    </main>
  );
};

export default CheckTicketPage;
