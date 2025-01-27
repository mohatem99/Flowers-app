import Companies from "./_components/companies";
import Gallery from "./_components/gallery";
import Testmonials from "./_components/testmonials";

export default function Page() {
  return (
    <main>
      {" "}
      <Gallery />
      <Testmonials />
      <Companies />
    </main>
  );
}
