import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-6 bg-gradient-to-r from-[#8C52FF] to-purple-400 bg-clip-text text-transparent">
              Jesus Digital Beacon
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We help brands scale with AI-powered digital marketing solutions, creative design, and strategic automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#8C52FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#8C52FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#8C52FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#8C52FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Meta Ads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  E-commerce Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#8C52FF] mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@jesusdigitalbeacon.com" className="hover:text-[#8C52FF] transition-colors">
                    info@jesusdigitalbeacon.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#8C52FF] mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-[#8C52FF] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#8C52FF] mt-1 flex-shrink-0" />
                <div>
                  123 Marketing Street<br />
                  Digital City, DC 10001
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Jesus Digital Beacon Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8C52FF] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
