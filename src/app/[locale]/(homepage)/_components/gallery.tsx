import Image from "next/image";

function Gallery() {
  return (
    <section className="w-[1280px] mx-auto">
      <h2
        className="uppercase 
      text-center text-custom-rose-900 text-lg font-bold font-roboto tracking-[4px]"
      >
        Our Gallery
      </h2>
      <div className="mt-2 flex justify-center ">
        <h3
          className="text-custom-blue-900 font-bold text-3xl font-inter
          capitalize 
          relative before:content-[''] 
          before:absolute
         before:left-0 before:bottom-0
          before:w-[150px] before:h-[2px] before:bg-custom-rose-900
          after:absolute after:content[''] 
          after:w-[338px] after:h-[17px] after:bg-[#FEEDF7] 
           after:left-0
           after:bottom-0 after:-z-10 after:rounded-r-2xl"
        >
          Let's Check Our Photo Gallery
        </h3>
      </div>

      <div className="my-[40px] grid grid-rows-2 grid-cols-3 gap-3 ">
        <Image src="/assets/imges/Frame 74.png" alt="gift" width={411} height={411} />
        <Image src="/assets/imges/Frame 75.png" alt="gift" width={411} height={411} />
        <Image src="/assets/imges/Frame 76.png" alt="gift" width={411} height={411} />
        <Image
          className="col-span-2 object-cover"
          src="/assets/imges/Frame 77.png"
          alt="gift"
          width={845}
          height={411}
        />{" "}
        <Image src="/assets/imges/Frame 78.png" alt="gift" width={411} height={411} />
      </div>
    </section>
  );
}

export default Gallery;
