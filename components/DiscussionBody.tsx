import React from "react";
import DiscussionCard from "./DiscussionCard";
import { ticket } from "./DiscussionHead";

type Props = {
  ticket: ticket;
};

const DiscussionBody = (props: Props) => {
  const { ticket } = props;

  return (
    <div className="mb-6 md:mb-8 border-b-[1px] border-grey-light">
      <span className="block text-secondary text-grey-light mb-10 text-center">
        Dibuka oleh {ticket.userName} pada{" "}
        {new Date(ticket.createdAt).toLocaleDateString("id", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric"
        })}
      </span>
      {ticket &&
        ticket.discussions.map((discussion) => (
          <DiscussionCard
            key={discussion.id}
            creator={ticket.userName}
            name={discussion.userName}
            message={discussion.message}
            createdAt={discussion.createdAt}
          />
        ))}
    </div>
  );
};

export default DiscussionBody;
