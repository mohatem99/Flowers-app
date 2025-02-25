import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Gallery() {
  // Translation
  const t = useTranslations();

  return (
    <section className="container mx-auto">
      {/* Upper Title - Styled Rose Text */}
      <h2 className="uppercase text-center text-custom-rose-900 text-lg font-bold font-roboto tracking-wide">
        {t("our-gallery")}
      </h2>

      <div className="mt-2 flex justify-center">
        {/* Main Heading with Decorative Elements */}
        <h3
          className="relative font-inter text-3xl font-bold capitalize text-custom-blue-900
          before:absolute before:bottom-0 before:left-0 before:h-1 before:w-40 before:bg-custom-rose-900 before:content-['']
          after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-4
          after:w-80 after:rounded-r-2xl after:bg-[#FEEDF7] after:content-['']"
        >
          {t("lets-check-our-photo-gallery")}
        </h3>
      </div>

      {/* Image Grid Layout */}
      <div className="my-10 grid grid-rows-[411px_411px] grid-cols-3 gap-3 ">
        {/* Grid Item 1 */}
        <Image
          src="/assets/imges/gallery-1.png"
          alt="gift"
          width={411}
          height={411}
          className="w-full h-full rounded-3xl object-cover"
        />

        {/* Grid Item 2 */}
        <Image
          src="/assets/imges/gallery-2.png"
          alt="gift"
          width={411}
          height={411}
          className="w-full h-full rounded-3xl object-cover"
        />

        {/* Grid Item 3 */}
        <Image
          src="/assets/imges/gallery-3.jpg"
          alt="gift"
          width={411}
          height={411}
          className="w-full h-full rounded-3xl object-cover"
        />

        {/* Grid Item 4 */}
        <Image
          className="col-span-2 w-full h-full rounded-3xl object-cover"
          src="/assets/imges/gallery-4.png"
          alt="gift"
          width={845}
          height={411}
        />

        {/* Grid Item 5 */}
        <Image
          src="/assets/imges/gallery-5.png"
          alt="gift"
          width={411}
          height={411}
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
