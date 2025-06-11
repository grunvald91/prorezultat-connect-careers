
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            PROREZULTAT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
            People make the difference. We help you find the right ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Submit a Request
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
      </div>
    </section>
  );
};

export default HeroSection;
