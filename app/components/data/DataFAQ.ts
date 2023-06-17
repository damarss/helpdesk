// faqData.ts

interface Question {
  id: number;
  question: string;
  answer: string;
}

const DataFAQ: {
  id: number;
  title: string;
  questions: Question[];
}[] = [
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
        id:4,
        question: "Kapan saya mendapatkan kode billing untuk pembayaran?",
        answer: `Kode billing untuk pembayaran biaya seleksi akan diberikan setelah dinyatakan lulus verifikasi berkas oleh panitia SPMB Politeknik Statistika STIS.
Proses verifikasi berkas dilakukan selama 3-5 hari kerja.`,
      },
      {
        id: 5,
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
        id: 6,
        question: "Kapan verifikasi berkas dilakukan?",
        answer: "Verifikasi berkas dilakukan setelah peserta mengupload berkas ke portal SPMB STIS. Setelah terverifikasi, peserta mendapat kode billing pembayaran.",
      },
    ],
  },
];

export default DataFAQ;
