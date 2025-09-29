import { MapPin, Award, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Dramatic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm20 0h1v1h-1V0zm0 20h1v1h-1v-1zM0 20h1v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg shadow-blue-500/10">
            <MapPin size={16} />
            Problem-Solving Cartographer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transforming Complex Geography Into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Crystal Clear Stories
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            From WWI battlefields to modern travel guides, I solve geographical puzzles 
            that make complex information accessible and engaging. 20+ years creating maps 
            for publishers, museums, and educational institutions worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a 
              href="#portfolio" 
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              Start a Project
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">200+</div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Maps Created</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">50+</div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Books Published</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">15</div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
