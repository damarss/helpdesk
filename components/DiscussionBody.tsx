import React from "react";
import DiscussionCard from "./DiscussionCard";
import { ticket } from "@/app/check-ticket/[number]/page";
import { LuCheckSquare } from "react-icons/lu";

type Props = {
  ticket: ticket | null;
};

const DiscussionBody = (props: Props) => {
  const { ticket } = props;

  return (
    <div className="mb-4 md:mb-6">
      <span className="block text-secondary text-grey-light mb-10 text-center">
        Dibuka oleh {ticket?.userName} pada{" "}
        {ticket && new Date(ticket?.createdAt).toLocaleDateString("id", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric"
        })}.
      </span>
      {ticket &&
        ticket?.discussions.map((discussion) => (
          <DiscussionCard
            key={discussion.id}
            creator={ticket.userName}
            name={discussion.userName}
            message={discussion.message}
            createdAt={discussion.createdAt}
          />
        ))}
      {ticket?.isClosed && (<div className="flex space-x-2 items-center">
        <LuCheckSquare className="text-xl text-hijau" />
        <p className="text-secondary text-grey-light">Ditutup oleh {ticket?.closedBy} dengan status selesai pada {new Date(ticket?.closedAt || "").toLocaleDateString("id", {day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric"})}.</p>
      </div>)}
    </div>
  );
};

export default DiscussionBody;
