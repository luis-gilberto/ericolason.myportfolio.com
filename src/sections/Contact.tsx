import { useState } from "react";
import { Mail, Clock, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Dramatic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-sm" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/10">
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Have a Geographical Challenge?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're publishing a historical book, creating educational materials, 
            or need custom maps for your business, I'm here to help solve your geographical puzzles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">ericolason@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Turnaround</h4>
                  <p className="text-slate-600">Simple maps: 1 week<br />Complex projects: 1-4 weeks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Pacific Northwest, USA<br />Serving clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Scope Estimator</h3>
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="font-medium text-slate-900">Simple Map</div>
                  <div className="text-sm text-slate-600">1-3 maps, basic geography</div>
                  <div className="text-sm text-blue-600 font-medium">1 week</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="font-medium text-slate-900">Complex Project</div>
                  <div className="text-sm text-slate-600">5-20 maps, detailed research needed</div>
                  <div className="text-sm text-blue-600 font-medium">1-4 weeks</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <div className="font-medium text-slate-900">Extensive Series</div>
                  <div className="text-sm text-slate-600">20+ maps, book/publication series</div>
                  <div className="text-sm text-blue-600 font-medium">1 month approx</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none" />
            <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="historical">Historical Maps</option>
                  <option value="travel">Travel & Tourism</option>
                  <option value="educational">Educational Materials</option>
                  <option value="commercial">Commercial Applications</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">When do you need this?</option>
                  <option value="rush">ASAP (rush fees apply)</option>
                  <option value="normal">1-2 months</option>
                  <option value="flexible">3+ months (flexible)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your geographical challenge. What makes this project complex? What story are you trying to tell?"
                  className="w-full px-4 py-3 bg-white/80 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Project Details
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
