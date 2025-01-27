import { useTranslations } from "next-intl";
import Image from "next/image";

function Companies() {
  // Translation
  const t = useTranslations();
  return (
    <section className="py-10">
      <div className="w-[1280px] bg-[#FEEDF7] py-10 px-6 mx-auto rounded-[20px]">
        <h3 className=" text-center font-inter font-bold text-3xl capitalize ">
          {t.rich("less-than-span-greater-than-trusted-by-less-than-span-greater-than-over", {
            span: (val) => (
              <span className="underline underline-offset-8 decoration-custom-rose-900">{val}</span>
            ),
          })}
          {t.rich("less-than-span-greater-than-4-5k-less-than-span-greater-than-companies", {
            span: (val) => <span className="text-custom-rose-900">{val}</span>,
          })}
        </h3>
        <div className="mt-10 flex justify-between">
          <Image src="/assets/imges/comp1.png" alt="company1" width={150} height={50} />
          <Image src="/assets/imges/comp2.png" alt="company1" width={150} height={50} />
          <Image src="/assets/imges/comp3.png" alt="company1" width={150} height={50} />
          <Image src="/assets/imges/comp4.png" alt="company1" width={150} height={50} />
          <Image src="/assets/imges/comp5.png" alt="company1" width={150} height={50} />
          <Image src="/assets/imges/comp6.png" alt="company1" width={150} height={50} />
        </div>
      </div>
    </section>
  );
}

export default Companies;
