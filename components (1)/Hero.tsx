import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-black to-[#8C52FF]/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8C52FF]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C52FF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C52FF]/10 border border-[#8C52FF]/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#8C52FF]" />
          <span className="text-white/90">AI-Powered Digital Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-5xl mx-auto leading-tight">
          Grow Your Business with{" "}
          <span className="bg-gradient-to-r from-[#8C52FF] to-purple-400 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Digital Marketing
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          We help brands scale using Ads, Automation, SEO, and Creative Systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#8C52FF] to-purple-600 hover:from-[#7a45e8] hover:to-purple-700 text-white px-8 py-6 rounded-full shadow-lg shadow-[#8C52FF]/50 hover:shadow-xl hover:shadow-[#8C52FF]/60 transition-all duration-300 group"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[#8C52FF] text-white hover:bg-[#8C52FF]/10 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            View Services
          </Button>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-20 flex justify-center gap-8 text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8C52FF] rounded-full"></div>
            <span>500+ Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8C52FF] rounded-full"></div>
            <span>100+ Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8C52FF] rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}