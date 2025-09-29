export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Eric Olason</h3>
            <p className="text-slate-400 mb-4">Master Cartographer & Geographic Storyteller</p>
            <p className="text-slate-400 text-sm">
              To buy a copy of any map or order a custom map contact me@ericolason.com
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Historical Maps</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Educational Materials</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Commercial Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="http://www.artpal.com/wallartmaps" className="hover:text-white transition-colors">Wall Art Maps</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Eric Olason. All rights reserved. | Professional Cartographer serving clients worldwide.</p>
        </div>
      </div>
    </footer>
  );
};
