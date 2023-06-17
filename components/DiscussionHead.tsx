import React from "react";
import { FaPrint } from "react-icons/fa";

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

type Props = {
  ticket: ticket;
};

const DiscussionHead = (props: Props) => {
  const { ticket } = props;

  return (
    <div className="relative mt-8 md:mt-18 border-b-[1px] border-grey-light mb-8 md:mb-12">
      <div className="flex flex-col mb-4 md:mb-6">
        <h1 className="text-3xl font-h1">
          Diskusi Tiket <span className="text-biru">#{ticket.number}</span>
        </h1>
        <p className="text-base text-grey-mid">
          Berikut merupakan diskusi hasil pengajuan tiket anda.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:w-5/6 space-y-3 md:space-y-0 md:space-x-3 mb-6">
        <div className="flex flex-col flex-1">
          <h2 className="text-h2 font-h2">Informasi Tiket</h2>
          <div className="flex flex-col">
            <div className="text-base grid grid-cols-12 space-x-1">
              <span className="col-span-4">Status Tiket</span>
              <span
                className={`col-span-8 font-active ${
                  ticket.isClosed ? "text-green" : "text-grey-mid"
                }`}
              >
                : {ticket.isClosed ? "Selesai" : "Berjalan"}
              </span>
            </div>
            <div className="text-base grid grid-cols-12 space-x-1">
              <span className="col-span-4">Tanggal Dibuat</span>
              <span className="col-span-8">
                : {new Date(ticket.createdAt).toLocaleDateString("id", {day: "numeric", month: "long", year: "numeric"})}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <span className="hidden md:block text-transparent absolute -left-20 bg-grey-light w-[1px] h-[57px]">
            {"."}
          </span>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-h2 font-h2">Informasi Pengguna</h2>
          <div className="flex flex-col">
            <div className="text-base grid grid-cols-12 space-x-1">
              <span className="col-span-4 md:col-span-3">Nama</span>
              <span className="col-span-8 md:col-span-9 font-active">
                : {ticket.userName}
              </span>
            </div>
            <div className="text-base grid grid-cols-12 space-x-1">
              <span className="col-span-4 md:col-span-3">Alamat Email</span>
              <span className="col-span-8 md:col-span-9">
                : {ticket.userEmail}
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute top-0 right-0 hover:bg-biru hover:text-grey-base drop-shadow-shadow-1 border-[1px] border-biru text-biru text-active font-active rounded-md p-3 md:px-5 md:py-1">
        <span className="hidden md:inline">Cetak Tiket</span>
        <span className="md:hidden text-3xl">
          <FaPrint />
        </span>
      </button>
    </div>
  );
};

export default DiscussionHead;
export type { Props, ticket, discussion };