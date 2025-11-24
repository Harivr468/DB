import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8C52FF] via-purple-600 to-[#6b3fd9]"></div>
      
      {/* Animated Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl mx-auto">
          Ready to Grow Your Business?
        </h2>
        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Let's discuss how we can take your brand to the next level with our proven strategies
        </p>

        {/* CTA Button with Glow */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-[#8C52FF] hover:bg-gray-50 px-10 py-7 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 group border-2 border-white/20"
            style={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)" }}
          >
            <Phone className="mr-2 w-5 h-5" />
            Book a Free Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-white">
          <div>
            <div className="text-4xl md:text-5xl mb-2">500+</div>
            <div className="text-white/80">Successful Projects</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl mb-2">100+</div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl mb-2">300%</div>
            <div className="text-white/80">Average ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
