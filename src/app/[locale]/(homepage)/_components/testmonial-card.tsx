import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

// Types
type TestMonialCardProps = {
  imageSrc: string;
  name: string;
  rating: number;
  comment: string;
  type: string;
};

export default function TestmonialCard({
  name,
  imageSrc,
  comment,
  rating,
  type,
}: TestMonialCardProps) {
  // Translation
  const t = useTranslations();

  return (
    <div className="h-80 bg-white rounded-[6.25rem] p-6 rtl:rounded-tr-3xl ltr:rounded-tl-3xl">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 relative ">
          {/* Customer Profile Image */}
          <Image
            className="rounded-full object-cover w-full h-full"
            width={50}
            height={50}
            src="/assets/imges/customer-pic.jpg"
            alt={t("profile-image")}
          />

          {/* Profile border */}
          <div
            className="absolute rounded-full border-4 border-transparent 
            border-l-custom-rose-900 border-b-custom-rose-900 -inset-1"
          ></div>
        </div>
        <div>
          {/* Customer Name */}
          <h3 className="text-lg font-bold text-custom-blue-900 font-inter">{name}</h3>

          {/* Customer Type */}
          <p className="text-custom-rose-900 text-lg font-bold font-inter">{type}</p>
        </div>
      </div>
      <div className="border-t w-full bg-custom-blue-500 mt-5" />

      {/* Customer comment */}
      <p className="mt-5 text-custom-blue-500 text-sm font-normal font-inter capitalize h-28">
        {comment}
      </p>
      <div className="mt-1 flex items-center justify-between">
        {/* Customer Rating */}
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star className="text-custom-rose-900" fill="currentColor" size={15} key={i} />
          ))}
        </div>

        {/* Customer Svgs */}
        <div className="flex-1 flex justify-end rtl:justify-start rtl:flex-row-reverse">
          <Image src="/assets/icons/text-circle.svg" alt="" width={50} height={50} />
          <Image
            src="/assets/icons/half-circle.svg"
            alt=""
            width={50}
            height={50}
            className="-ml-5 -mt-5"
          />
        </div>
      </div>
    </div>
  );
}
