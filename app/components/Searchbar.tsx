import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

const Searchbar = (props: Props) => {
  return (
    <div className="hidden lg:flex relative">
      <span className="pointer-events-none text-grey-mid absolute inset-y-0 start-0 grid w-10 place-content-center">
        <BiSearchAlt />
      </span>

      <input
        type="input"
        id="search"
        placeholder="Cari di pertanyaan umum"
        className="ps-10 sm:text-sm text-h3 font-h3 placeholder:text-h3 placeholder:font-h3 h-[42px] w-[276px] rounded-md shadow-shadow-1 border-[1px] border-grey-light"
      />

    </div>
  );
};

export default Searchbar;
