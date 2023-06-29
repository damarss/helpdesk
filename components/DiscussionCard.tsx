import React from "react";
import { FaUserAlt } from "react-icons/fa";

type Props = {
  creator: string;
  name: string;
  message: string;
  createdAt: string;
};

const DiscussionCard = (props: Props) => {
  const { creator, name, message, createdAt } = props;

  return (
    <div className="flex gap-x-3 mb-10 md:mb-14 w-full">
      <div className="flex p-4 text-4xl bg-grey-light text-grey-base items-center justify-center w-[50px] h-[50px] rounded-full">
        <FaUserAlt />
      </div>
      <div
        className={`flex flex-col relative w-full ${
          creator !== name ? "" : "-order-1 items-end"
        }`}
      >
        <p className="absolute -top-6 text-secondary text-grey-mid">{name}</p>
        <div
          className={`relative flex pb-6 ${
            creator !== name ? "bg-white" : "bg-biru"
          } shadow-shadow-1 px-5 py-3 rounded-lg md:w-4/5`}
        >
          <p
            className={`${
              creator !== name ? "text-dark" : "text-grey-base"
            } text-base text-justify`}
          >
            {message}
          </p>
          <span
            className={`absolute right-0 bottom-1 px-5 text-secondary ${
              creator !== name ? "text-grey-mid" : "text-gray-200"
            }`}
          >
            {new Date(createdAt).toLocaleDateString("id", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;
