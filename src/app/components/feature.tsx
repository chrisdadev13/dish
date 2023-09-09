"use client";

import React, { useRef, useEffect } from "react";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import classNames from "classnames";
import { useInView } from "framer-motion";
import { useFeatureStore } from "~/app/lib/feature-store";

import { Plus } from "tabler-icons-react";

import { LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface Props {
  children?: React.ReactNode;
  id: string;
}

interface CardProps {
  id: string;
}

export const FeatureTile: React.FC<Props> = ({ children, id }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInviewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInviewFeature(id);
    if (inViewFeature === "id" && !isInView) setInviewFeature(null);
  }, [isInView, id, setInviewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "font-heading py-16 text-left text-5xl font-bold transition-colors",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};

export const FeatureCard: React.FC<{
  children?: React.ReactNode;
  gradient: string;
  id: string;
}> = ({ children, gradient, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const FirstCard = ({ id }: CardProps) => (
  <FeatureCard id={id} gradient="from-green-50 to-green-100">
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg p-24 text-left">
      <div className="my-3 flex h-full w-2/4 flex-col rounded-l-lg bg-white py-5 pl-5 pr-3">
        <div className="h-full rounded-lg bg-[#70F8A6] p-2 shadow-md">
          <small>In the flow </small>
        </div>
        <div className="jusitfy-center my-2 flex flex-col items-center">
          <small className="text-xs text-gray-500">Preparation time</small>
          <Button
            variant="secondary"
            className="my-2 flex w-full items-center border border-gray-100 text-xs text-gray-600"
          >
            <Plus size={16} /> Add Order
          </Button>
          <small className="text-xs text-gray-500">Getting into the Flow</small>
        </div>
        <div className="h-full rounded-lg bg-[#70F8A6] p-2 shadow-md">
          <small>In the flow </small>
        </div>
      </div>
      <div className="my-3 flex h-full w-2/4 flex-col rounded-r-lg bg-white py-5 pr-5">
        <div className="h-full rounded-lg bg-[#70F8A6] p-2 shadow-md"></div>
      </div>
    </div>
  </FeatureCard>
);

export const SecondCard = ({ id }: CardProps) => (
  <FeatureCard id={id} gradient="from-orange-50 to-orange-100">
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg p-24 text-left">
      <div className="my-3 flex h-full w-full flex-col justify-center rounded-xl bg-white py-5 pl-5 pr-3">
        <p className="text-lg">Ordenes Realizadas:</p>
        <h1 className="my-1 text-2xl font-bold">$1220</h1>
        <p className="mb-10 text-sm text-gray-700">
          Crecimiento del +20% desde el ultimo mes
        </p>
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#000" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  </FeatureCard>
);

export const ThirdCard = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-blue-50 to-blue-200">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="my-3 flex w-8/12 flex-col justify-center rounded-md bg-white p-5 text-left ">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">The Dream Team:</h2>
            <p className="text-sm text-gray-600">Ordenes atendidas</p>
          </div>
          <Input
            type="text"
            placeholder="¿A quien quieres invitar?"
            className="my-3"
          />
          {["Chris Rock", "Joe Doe", "Rick Roll", "Taylor Sanchez"].map(
            (member: string, index: number) => (
              <div
                key={index}
                className="my-2 flex items-center justify-center"
              >
                <Avatar className="mr-2 h-10 w-10 border">
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/notionists/svg?seed=${member}`}
                    alt="Avatar example"
                  />
                </Avatar>

                <div className="ml-2 w-full">
                  <p className="text-lg font-semibold">{member}</p>
                  <p className="text-xs">
                    {member.replace(/ /g, "").trim().toLowerCase()}@dishes.io
                  </p>
                </div>
                <p>${parseInt(Math.random().toFixed(1)) + index}</p>
              </div>
            )
          )}
        </div>
      </div>
    </FeatureCard>
  );
};
