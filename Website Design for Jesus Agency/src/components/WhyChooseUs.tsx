import { 
  Target, 
  Clock, 
  Users, 
  DollarSign, 
  Zap, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Result Driven",
    description: "Data-backed strategies that deliver measurable growth"
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your business runs smoothly around the clock"
  },
  {
    icon: Users,
    title: "Creative Experts",
    description: "Experienced team of marketing professionals"
  },
  {
    icon: DollarSign,
    title: "Affordable Packages",
    description: "Premium quality at competitive prices"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising quality"
  },
  {
    icon: Shield,
    title: "100% Transparency",
    description: "Clear communication and honest reporting"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#8C52FF] to-purple-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We're committed to delivering excellence in every project
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#8C52FF]/30 transition-all duration-300 h-full">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8C52FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#8C52FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8C52FF] transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#8C52FF] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl mb-3 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}