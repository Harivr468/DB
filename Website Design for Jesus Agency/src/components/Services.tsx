import { 
  Megaphone, 
  Search, 
  Globe, 
  ShoppingCart, 
  Palette, 
  Bot, 
  Video, 
  Sparkles,
  TrendingUp 
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Drive targeted traffic and conversions with data-driven Meta advertising campaigns."
  },
  {
    icon: TrendingUp,
    title: "Google Ads (PPC)",
    description: "Maximize ROI with strategic Google Ads campaigns that convert."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Rank higher on search engines and attract organic traffic to your website."
  },
  {
    icon: Globe,
    title: "Website & Landing Page Creation",
    description: "Beautiful, high-converting websites built with modern technologies."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Setup (Shopify)",
    description: "Launch your online store with complete Shopify setup and optimization."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered designs that create exceptional digital experiences."
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Leverage AI tools and automation to streamline your business processes."
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video content that engages and converts your audience."
  },
  {
    icon: Sparkles,
    title: "Creative Design",
    description: "Eye-catching graphics and branding that make your business stand out."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-black to-[#8C52FF] bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Comprehensive digital solutions to scale your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-[#8C52FF]/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8C52FF] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#8C52FF]/30">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-black group-hover:text-[#8C52FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}