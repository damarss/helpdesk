import DiscussionHead from "@/components/DiscussionHead";
import React from "react";

type Params = {
  number: string;
};

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

const page = ({ params }: { params: Params }) => {
  const tiket = {
    number: params.number,
    isClosed: true,
    createdAt: "2021-08-01T00:00:00.000Z",
    userName: "John Doe",
    userEmail: "johndoe@gmail.com",
    discussions: [
      {
        id: 1,
        userName: "John Doe",
        message: "lorem ipsum dolor sit amet",
        createdAt: "2021-08-01T00:00:00.000Z",
      },
      {
        id: 2,
        userName: "Humas",
        message: "lorem ipsum dolor sit amet",
        createdAt: "2021-08-01T00:00:00.000Z",
      },
    ],
  };
  
  return (
    <main className="flex flex-col justify-center mx-7 md:mx-36">
      <DiscussionHead ticket={tiket} />
    </main>
  );
};

export default page;
