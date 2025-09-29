import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-2xl shadow-slate-900/10" 
        : "bg-slate-900/80 backdrop-blur-md border-b border-white/10"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Eric Olason</h1>
            <p className={`text-xs -mt-1 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}>Master Cartographer</p>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#portfolio" className={`hover:text-blue-400 transition-colors font-medium ${isScrolled ? 'text-slate-700' : 'text-slate-300'}`}>Portfolio</a>
              <a href="#about" className={`hover:text-blue-400 transition-colors font-medium ${isScrolled ? 'text-slate-700' : 'text-slate-300'}`}>About</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#portfolio" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
