"use client";

import React from "react";
import { FeatureTile, FirstCard, SecondCard, ThirdCard } from "./feature";

const features = [
  {
    paragraph:
      "Diseña tus horarios y permite a tus clientes programar ordenes.",
    id: "first",
    card: FirstCard,
  },
  {
    paragraph: "Acelera, organiza y analiza las ordenes de tus clientes.",
    id: "second",
    card: SecondCard,
  },
  {
    paragraph: "Integra a tu equipo y toma el control de tus ordenes.",
    id: "third",
    card: ThirdCard,
  },
];

export default function Features() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center md:px-20 lg:px-72 xl:px-96">
        <div className="flex w-full items-start gap-20">
          <div className="w-full py-[25vh]">
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureTile id={feature.id}>{feature.paragraph}</FeatureTile>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-0 hidden h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
              {features.map((feature, index) => (
                <feature.card id={feature.id} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
