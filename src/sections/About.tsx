import { Award, Book, Globe, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
      {/* Dramatic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0L120 60L60 120L0 60Z' fill='%23334155' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }} />
      </div>
      
      {/* Section dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent shadow-sm" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/50 to-transparent shadow-sm" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Eric
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Two Decades of Geographic Problem-Solving
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I don't just create maps—I solve geographical puzzles. Whether it's making sense of 
                chaotic WWI battlefields or guiding modern travelers through complex island chains, 
                I transform confusion into clarity.
              </p>
              <p>
                Based in the Pacific Northwest, I've worked with publishers, museums, cruise lines, 
                and educational institutions across 15 countries. My maps have appeared in major 
                historical publications and guided millions of travelers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Professional Cartographer</h4>
                  <p className="text-sm text-slate-600">20+ years specialized experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Book className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Published Collaborator</h4>
                  <p className="text-sm text-slate-600">50+ books featuring my maps</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Globe className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">International Reach</h4>
                  <p className="text-sm text-slate-600">Work distributed in 15+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Pacific Northwest</h4>
                  <p className="text-sm text-slate-600">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-sm">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
            <div className="relative z-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Areas of Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 font-medium">Historical Military Maps</span>
                  <span className="text-slate-600 text-sm">95%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 font-medium">Travel & Tourism</span>
                  <span className="text-slate-600 text-sm">90%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 font-medium">Educational Materials</span>
                  <span className="text-slate-600 text-sm">88%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 font-medium">Commercial Applications</span>
                  <span className="text-slate-600 text-sm">85%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
