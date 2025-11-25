import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}