"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import TestmonialCard from "./testmonial-card";

function Testmonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrolltoFirstPage = () => {
    console.log("first");
    if (api) api.scrollTo(0);
  };
  const scrolltoLastPage = () => {
    console.log("second");
    if (api) api.scrollTo(count - 1);
  };
  return (
    <div
      className="p-[80px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/imges/Birthday background.png')",
      }}
    >
      {" "}
      <div className="">
        <Carousel setApi={setApi} className=" w-[1280px] mx-auto  ">
          <CarouselContent className="m-0 justify-between gap-6  ">
            {Array.from({ length: 15 }, (_, index) => (
              <CarouselItem key={index} className="max-w-[302px] pl-0">
                <TestmonialCard />
              </CarouselItem>
            ))}{" "}
          </CarouselContent>{" "}
          <CarouselPrevious className="bg-custom-rose-900 text-white absolute z-10 left-0  top-1/2 -translate-y-1/2"></CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-custom-rose-900 text-white"></CarouselNext>
        </Carousel>{" "}
        <div className=" flex gap-2 justify-center mt-10 ">
          <div className="h-4 w-4 rounded-full bg-white" onClick={scrolltoFirstPage}></div>
          <div className="h-4 w-9 rounded-lg bg-white" onClick={scrolltoLastPage}></div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
