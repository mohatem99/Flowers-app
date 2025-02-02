import Image from "next/image";
import { Star } from "lucide-react";

//types
type TestMonialCardProps = {
  imageSrc: string;
  name: string;
  rating: number;
  comment: string;
  type: string;
};

//This component will not have translations because the
//  component only provides  display data from api

export default function TestmonialCard({
  name,
  imageSrc,
  comment,
  rating,
  type,
}: TestMonialCardProps) {
  return (
    <div className=" h-[344px] bg-white rounded-[100px] rounded-tl-[50px] p-6">
      <div className=" flex gap-4 items-center">
        <div className=" w-[50px] h-[50px] relative">
          {/* Customer Profile Image */}
          <Image
            className="rounded-full object-cover "
            src="/assets/imges/Ellipse 2.png"
            alt="Profile"
            width={50}
            height={50}
          />
          {/* Profile border */}
          <div
            className="absolute rounded-full border-4 border-transparent 
            border-l-custom-rose-900  border-b-custom-rose-900 -inset-1"
          ></div>
        </div>
        <div>
          {/* Customer Name */}
          <h3 className="text-lg font-bold text-custom-blue-900 font-inter">{name}</h3>

          {/* Customer Type */}
          <p className="text-custom-rose-900 text-lg font-bold font-inter">{type}</p>
        </div>
      </div>
      <div className="h-[.5px] w-full bg-custom-blue-500 mt-5" />

      {/* Customer comment */}
      <p className="mt-5 text-custom-blue-500 text-sm font-normal font-inter capitalize">
        {comment}
      </p>
      <div className="flex justify-between items-center">
        <div>
          {/* Customer Rating */}
          <div className="flex gap-1 ">
            {Array.from({ length: rating }).map((_, i) => (
              <Star fill="#F82BA9" color="#F82BA9" size={15} key={i} />
            ))}
          </div>
        </div>
        <div className=" w-[50px] h-[50px] relative">
          <img
            src="/assets/icons/text-circle.svg"
            alt=""
            className=" w-[50px] h-[50px] absolute right-1/2 top-1/4 "
          />
          <img
            src="/assets/icons/half-circle.svg"
            alt=""
            className=" w-[50px] h-[50px] absolute "
          />
        </div>
      </div>
    </div>
  );
}
