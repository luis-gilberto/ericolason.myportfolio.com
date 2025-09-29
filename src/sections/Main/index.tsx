import { Gallery } from "@/sections/Main/components/Gallery";
import { BackToTop } from "@/components/BackToTop";
import { FloatingButton } from "@/components/FloatingButton";
import { Footer } from "@/sections/Footer";

export const Main = () => {
  return (
    <main className="box-border caret-transparent w-full md:w-auto">
      <Gallery />
      <BackToTop />
      <FloatingButton />
      <Footer />
    </main>
  );
};
