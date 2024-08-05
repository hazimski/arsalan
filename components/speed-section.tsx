"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function SpeedTabs() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 !text-xl md:!text-4xl font-bold text-white bg-[black] border-[1px] border-[#8F78F1]">
          <p>Product Tab</p>
          <iframe
            src="https://www.chatpad.co/embed/clxc85c4h0003vo7g2o8vdgam/window?chatbox=false"
            style={{
              overflow: "hidden",
              height: "80vh",
              width: "480px",
              bottom: "-30px",
              border: "2px solid #e2e8f0",
              borderRadius: "0.375rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            allowFullScreen
            allow="clipboard-read; clipboard-write"
          ></iframe>
          {/* This chatbot is built using https://chatpad.co/ */}
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[black] border-[1px] border-[#8F78F1]">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[black] border-[1px] border-[#8F78F1]">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[black] border-[1px] border-[#8F78F1]">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[black] border-[1px] border-[#8F78F1]">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-40 mt-20 border-[#8F78F1]">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/heroImage.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
