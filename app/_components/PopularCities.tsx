"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function PopularCities() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular <span className="text-primary">destinations</span> to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Paris",
    title: "Explore the city of lights – Eiffel Tower awaits!",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "New York",
    title: "The city that never sleeps – discover NYC.",
    src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tokyo",
    title: "Tradition meets technology in Tokyo.",
    src: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "London",
    title: "Big Ben, bridges, and a royal experience.",
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Dubai",
    title: "Luxury, innovation, and desert adventures.",
    src: "https://images.unsplash.com/photo-1504272017915-32d1bd315a59?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "Sydney",
    title: "Harbour views and the iconic Opera House.",
    src: "https://images.unsplash.com/photo-1531033056439-63578c0d9f22?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Delhi",
    title: "Experience heritage at India Gate and Red Fort.",
    src: "https://images.unsplash.com/photo-1705219900008-4bea2740f837?q=80&w=835&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Mumbai",
    title: "The city of dreams – Gateway of India awaits.",
    src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Jaipur",
    title: "Discover the Pink City and its royal palaces.",
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Goa",
    title: "Sun, sand, and vibrant nightlife in Goa.",
    src: "https://images.unsplash.com/photo-1615473787506-24ca223bf0e1?q=80&w=354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
