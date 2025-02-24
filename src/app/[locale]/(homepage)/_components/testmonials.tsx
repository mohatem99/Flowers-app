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
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Testmonials() {
  // Translation
  const t = useTranslations();

  // Locales
  const locale = useLocale();

  // State
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Testmonials Customers Data
  const testimonialsData = [
    {
      id: 1,
      type: "customer",
      name: "John Doe",
      imageSrc: "https://picsum.photos/id/1005/200/200",
      comment: t("comment-customer1"),
      rating: 5,
    },
    {
      id: 2,
      type: "customer",
      name: "Jane Smith",
      imageSrc: "https://picsum.photos/id/1011/200/200",
      comment: t("comment-customer2"),
      rating: 4,
    },
    {
      id: 3,
      type: "customer",
      name: "Mike Johnson",
      imageSrc: "https://picsum.photos/id/1027/200/200",
      comment: t("comment-customer3"),
      rating: 5,
    },
    {
      id: 4,
      type: "customer",
      name: "Sarah Williams",
      imageSrc: "https://picsum.photos/id/103/200/200",
      comment: t("comment-customer4"),
      rating: 5,
    },
    {
      id: 5,
      type: "customer",
      name: "David Wilson",
      imageSrc: "https://picsum.photos/id/1045/200/200",
      comment: t("comment-customer5"),
      rating: 5,
    },
    {
      id: 6,
      type: "customer",
      name: "Sophia Martinez",
      imageSrc: "https://picsum.photos/id/1052/200/200",
      comment: t("comment-customer6"),
      rating: 5,
    },
  ];

  // Functions
  const scrolltoFirstPage = () => {
    if (api) api.scrollTo(0);
  };
  const scrolltoLastPage = () => {
    if (api) api.scrollTo(count - 1);
  };

  // Effects
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

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} className="p-[80px] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Background Image */}
        <Image
          src="/assets/imges/Birthday-background.png"
          alt="Birthday background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        />
      </div>

      {/* Carousel */}
      <div>
        {/* Carsoule Content */}
        <Carousel
          setApi={setApi}
          className="w-[1280px] mx-auto"
          opts={{ direction: locale === "ar" ? "rtl" : "ltr" }}
        >
          <CarouselContent className="m-0 justify-between gap-6">
            {testimonialsData.map((item, index) => (
              <CarouselItem key={index} className="max-w-[302px] pl-0">
                <TestmonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Indicators */}
          <CarouselPrevious className="bg-custom-rose-900 text-white absolute z-10 left-0  top-1/2 -translate-y-1/2"></CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-custom-rose-900 text-white"></CarouselNext>
        </Carousel>

        {/* Pagination */}
        <div className=" flex gap-2 justify-center mt-10">
          <div className="h-4 w-4 rounded-full bg-white" onClick={scrolltoFirstPage}></div>
          <div className="h-4 w-9 rounded-lg bg-white" onClick={scrolltoLastPage}></div>
        </div>
      </div>
    </div>
  );
}
