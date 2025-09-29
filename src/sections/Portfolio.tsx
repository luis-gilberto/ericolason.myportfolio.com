import { useState } from "react";
import { Eye, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "A Greater Sum of Sorrows",
    category: "historical",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/352.jpg",
    description: "Complex WWI battlefield mapping with innovative terrain visualization",
    link: "/a-greater-sum-of-sorrows"
  },
  {
    id: 2,
    title: "Greece February to April 1941",
    category: "historical",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/365.jpg",
    description: "Military campaign analysis through detailed geographical storytelling",
    link: "/greece-february-to-april-1941"
  },
  {
    id: 3,
    title: "Florida Seashell Bucket List",
    category: "travel",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/406.jpg",
    description: "Tourist-friendly coastal mapping with educational elements",
    link: "/my-florida-seashell-bucket-list-wall-map"
  },
  {
    id: 4,
    title: "Battle of Sydney Maps",
    category: "historical",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/377.jpg",
    description: "Naval warfare visualization for historical publication",
    link: "/book-the-battle-of-sydney-3-maps"
  },
  {
    id: 5,
    title: "East Timor Peacekeeping Mission",
    category: "historical",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/422.jpg",
    description: "32 detailed maps documenting multinational peacekeeping operations",
    link: "/book-peacekeeping-mission-in-east-timor-32-maps"
  },
  {
    id: 6,
    title: "South Africa Guidebook",
    category: "travel",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/396.jpg",
    description: "Comprehensive travel mapping for overland exploration",
    link: "/south-africa-guidebook"
  },
  {
    id: 7,
    title: "Iraq War Official History",
    category: "historical",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/383.jpg",
    description: "22 maps documenting modern military operations",
    link: "/book-iraq-war-official-history-22-maps"
  },
  {
    id: 8,
    title: "Iceland by RV Guidebook",
    category: "travel",
    image: "https://c.animaapp.com/mfkf6vqgFr6eyt/assets/420.jpg",
    description: "Specialized mapping for recreational vehicle travel",
    link: "/iceland-by-rv-guidebook"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "historical", label: "Historical" },
  { id: "travel", label: "Travel & Tourism" },
  { id: "educational", label: "Educational" }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      {/* Dramatic section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent shadow-sm" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-100/50">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Maps That Solve Problems
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each project presents unique geographical challenges. Here's how I turn complexity into clarity.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/30 scale-105"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-200/50 hover:border-blue-200/50 hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-4 hover:rotate-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                    <a
                      href={item.link}
                      className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Eye size={18} />
                      View Details
                    </a>
                    <a
                      href={item.link}
                      className="flex items-center gap-2 bg-blue-600/95 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Floating category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-lg">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Showing {filteredItems.length} of 200+ projects</p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 font-medium border border-slate-200/50"
          >
            View Full Archive
          </a>
        </div>
      </div>
    </section>
  );
};
