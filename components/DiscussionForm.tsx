import React from "react";

type Props = {};

const DiscussionForm = (props: Props) => {
  return (
    <form className="mb-8 md:mb-12 border-t-[1px] border-grey-light pt-6">
      <h2 className="text-h2 font-h2 mb-4">Kirim Jawaban</h2>
      <textarea
        cols={30}
        rows={6}
        placeholder="Tuliskan jawabanmu dengan rinci"
        className="w-full border-[1.5px] p-2 rounded-md border-grey-light focus:outline-none focus:border-dark shadow-shadow-4 placeholder:text-base placeholder:text-grey-light mb-3"
      ></textarea>
      <button
        className="block text-biru text-base border-[1.5px] border-biru border-dashed px-5 py-2 rounded-lg hover:bg-grey-light shadow-shadow-2 w-full md:w-fit mb-8"
        type="button"
      >
        Klik untuk unggah dokumen
      </button>
      <button
        className="block bg-biru px-6 md:px-9 py-3 md:py-2 text-active font-active rounded-lg text-grey-base shadow-shadow-2 w-full md:w-fit"
        type="submit"
      >
        Kirim jawaban
      </button>
    </form>
  );
};

export default DiscussionForm;
