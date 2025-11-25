import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Jesus Digital Beacon transformed our online presence completely. Their Meta Ads strategy increased our conversions by 300% in just 3 months!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, E-commerce Plus",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Outstanding service! The team built our Shopify store from scratch and it looks absolutely premium. Sales have been incredible.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLab",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Professional, creative, and results-driven. They understood our brand vision perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Owner, Local Business Co",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Their SEO expertise helped us rank #1 for our key terms. Traffic has doubled and we're getting quality leads daily.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Director, Creative Studio",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "The UI/UX design they created for our app is stunning. User engagement increased by 150% after the redesign.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "VP Sales, SaaS Solutions",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM4NDUyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Fast, reliable, and transparent. Their automation setup saved us countless hours and improved our workflow significantly.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#8C52FF] to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#8C52FF] text-[#8C52FF]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#8C52FF] to-purple-600">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}