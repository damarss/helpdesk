import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16 md:mb-24">
      <Image className="mb-8 md:mb-12" src={"/assets/img/hero.png"} alt="Hero" width={956} height={492} />
      <div className="flex flex-col">
        <h1 className="uppercase text-3xl font-h1 text-center mb-5 md:mb-10">
          HELPDESK POLITEKNIK STATISTIKA STIS
        </h1>
        <p className="text-active font-active text-justify">
          Dalam rangka mengatasi kendala/permasalahan yang terjadi, kami
          menyediakan sistem tiket bantuan. Setiap permintaan bantuan akan
          diberikan nomor tiket yang unik yang dapat digunakan untuk memantau
          tanggapan dan kemajuan penanganan permasalahan. Sistem ini mencatat
          arsip lengkap dan riwayat dari semua permintaan bantuan. Alamat email
          yang valid diperlukan untuk dapat membuat tiket bantuan. Sebelum anda
          membuat tiket, periksalah <Link className="text-biru font-semibold underline" href="/faq">Pertanyaan Umum</Link> kami terlebih dahulu,
          barangkali apa yang ingin akan dapatkan informasinya sudah tersedia di
          sana sehingga tidak perlu membuat tiket baru.
        </p>
      </div>
    </div>
  );
};

export default Hero;
