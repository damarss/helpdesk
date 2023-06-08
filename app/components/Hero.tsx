import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-24">
      <Image className="block mb-16" src={"/assets/img/hero.png"} alt="Hero" width={956} height={492} />
      <div className="flex flex-col">
        <h1 className="uppercase text-h1 font-h1 text-center mb-10">
          HELPDESK POLITEKNIK STATISTIKA STIS
        </h1>
        <p className="text-active font-active text-justify">
          Dalam rangka mengatasi kendala/permasalahan yang terjadi, kami
          menyediakan sistem tiket bantuan. setiap permintaan bantuan akan
          diberikan nomor tiket yang unik yang dapat digunakan untuk memantau
          tanggapan dan kemajuan penanganan permasalahan. Sistem ini mencatat
          arsip lengkap dan riwayat dari semua permintaan bantuan. Alamat email
          yang valid diperlukan untuk dapat membuat tiket bantuan.Sebelum anda
          membuat tiket, periksalah Pertanyaan Umum kami terlebih dahulu,
          barangkali apa yang ingin akan dapatkan informasinya sudah tersedia di
          sana sehingga tidak perlu membuat tiket baru.
        </p>
      </div>
    </div>
  );
};

export default Hero;
