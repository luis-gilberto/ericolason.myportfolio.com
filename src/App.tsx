import { Navigation } from "@/components/Navigation";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
