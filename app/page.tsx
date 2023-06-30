"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Features, Hero, HomeFAQ, TicketFlow } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const HomePage = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex flex-col justify-center mx-7 md:mx-36">
      <Hero />
      <div className="mt-16 md:mt-24" data-aos="fade-up" data-aos-once="true">
        <TicketFlow id="ticket-flow" />
      </div>
      <div className="mt-16 md:mt-24" data-aos="fade-up" data-aos-once="true">
        <Features />
      </div>
      <div className="mt-16 md:mt-24" data-aos="fade-up" data-aos-once="true">
        <HomeFAQ />
      </div>
    </main>
  );
};

export default HomePage;
