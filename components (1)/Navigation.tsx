import { Sparkles, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8C52FF] to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#8C52FF]/30 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl hidden sm:block">
              Jesus Digital Beacon
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-[#8C52FF] transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-white/80 hover:text-[#8C52FF] transition-colors">
              Why Us
            </a>
            <a href="#portfolio" className="text-white/80 hover:text-[#8C52FF] transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-[#8C52FF] transition-colors">
              Testimonials
            </a>
            <Button 
              className="bg-gradient-to-r from-[#8C52FF] to-purple-600 hover:from-[#7a45e8] hover:to-purple-700 text-white rounded-full shadow-lg shadow-[#8C52FF]/30"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-white/80 hover:text-[#8C52FF] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-us" 
                className="text-white/80 hover:text-[#8C52FF] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#portfolio" 
                className="text-white/80 hover:text-[#8C52FF] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#testimonials" 
                className="text-white/80 hover:text-[#8C52FF] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <Button 
                className="bg-gradient-to-r from-[#8C52FF] to-purple-600 hover:from-[#7a45e8] hover:to-purple-700 text-white rounded-full shadow-lg shadow-[#8C52FF]/30 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
