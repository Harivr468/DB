import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-commerce Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2Mzg0NTkyOHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYzODkxODY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM4OTM3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mzg1ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Landing Page Design",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM4ODIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Google Ads Strategy",
    category: "PPC",
    image: "https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM4OTM3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 text-white">
            Our Work Speaks{" "}
            <span className="bg-gradient-to-r from-[#8C52FF] to-purple-400 bg-clip-text text-transparent">
              for Itself
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore our portfolio of successful projects and campaigns
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[#8C52FF] mb-2">
                    <span className="text-sm">{item.category}</span>
                  </div>
                  <h3 className="text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 border-2 border-[#8C52FF] opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" style={{ boxShadow: "0 0 20px rgba(140, 82, 255, 0.5)" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}