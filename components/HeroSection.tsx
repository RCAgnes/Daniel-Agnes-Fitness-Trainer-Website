import { Button } from "./ui/button";

// Using the first provided image as hero background
import heroImage from "figma:asset/1c5d2771ae917c96e65f105ef6041917af00cc9d.png";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Train with Daniel Agnes – Real results with professional guidance
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Achieve your fitness goals with personalized training plans and proven methods.
        </p>
        
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
          onClick={scrollToContact}
        >
          Start Your Journey
        </Button>
      </div>
    </section>
  );
}