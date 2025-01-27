import Image from "next/image";

function TestmonialCard() {
  return (
    <div className=" h-[344px] bg-white rounded-[100px] rounded-tl-[50px] p-6">
      <div className=" flex gap-4 items-center">
        <div className=" w-[50px] h-[50px] relative">
          <Image
            className="rounded-full object-cover "
            src="/assets/imges/Ellipse 2.png"
            alt="Profile"
            width={50}
            height={50}
          />
          <div
            className="absolute rounded-full border-4 border-transparent 
            border-l-custom-rose-900  border-b-custom-rose-900
              -inset-1"
          ></div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-custom-blue-900 font-inter">Ahmed Mohamed</h3>
          <p className="text-custom-rose-900 text-lg font-bold font-inter">Customer</p>
        </div>
      </div>
      <div className="h-[.5px] w-full bg-custom-blue-500 mt-5" />
      <p
        className="
      mt-5 
      text-custom-blue-500 text-sm font-normal font-inter capitalize"
      >
        Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut.
        Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum.
        Dignissimos laborum necessitatibus vero nihil.
      </p>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex ">
            <img src="/assets/icons/star.svg" alt="" className="h-[15px] w-[15px]" />
            <img src="/assets/icons/star.svg" alt="" className="h-[15px] w-[15px]" />
            <img src="/assets/icons/star.svg" alt="" className="h-[15px] w-[15px]" />
            <img src="/assets/icons/star.svg" alt="" className="h-[15px] w-[15px]" />
            <img src="/assets/icons/star.svg" alt="" className="h-[15px] w-[15px]" />
          </div>
        </div>
        <div
          className=" w-[50px] h-[50px]
        relative"
        >
          <img
            src="/assets/icons/text-circle.svg"
            alt=""
            className=" w-[50px] h-[50px] absolute right-1/2 top-1/4 "
          />
          <img
            src="/assets/icons/half-circle.svg"
            alt=""
            className=" w-[50px] h-[50px] absolute   "
          />
        </div>
      </div>
    </div>
  );
}

export default TestmonialCard;
