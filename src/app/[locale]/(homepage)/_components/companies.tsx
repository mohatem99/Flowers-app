import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Companies() {
  // Translation
  const t = useTranslations();

  return (
    <section className="py-10">
      <div className="w-[1280px] bg-[#FEEDF7] py-10 px-6 mx-auto rounded-[20px]">
        {/* Header */}
        <h3 className=" text-center font-inter font-bold text-3xl capitalize ">
          {/*  First part: "Trusted by" with an underlined span.
             The `t.rich` function is used to dynamically insert and style the span.  */}
          {t.rich("companies-header", {
            span: (val) => (
              <span className="underline underline-offset-8 decoration-custom-rose-900">{val}</span>
            ),
          })}

          {/* Second part: "4.5k Companies" with a custom-colored span.
         The `t.rich` function is used again to dynamically insert and style the span.*/}
          {t.rich("companies-number-of-companies", {
            span: (val) => <span className="text-custom-rose-900">{val}</span>,
          })}
        </h3>

        <div className="mt-10 flex justify-between">
          {/* Company coconut */}
          <Image src="/assets/imges/coconut.png" alt="Company coconut" width={150} height={50} />

          {/* Company ginyard */}
          <Image src="/assets/imges/ginyard.png" alt="Company ginyard" width={150} height={50} />

          {/* Company lingoude */}
          <Image src="/assets/imges/lingoude.png" alt="Company lingoude" width={150} height={50} />

          {/* Company velvet */}
          <Image src="/assets/imges/velvet.png" alt="Company velvet" width={150} height={50} />

          {/* Company ingoude */}
          <Image src="/assets/imges/ingoude.png" alt="Company ingoude" width={150} height={50} />

          {/* Company hobus */}
          <Image src="/assets/imges/hobus.png" alt="Company hobus" width={150} height={50} />
        </div>
      </div>
    </section>
  );
}
