
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss your talent needs and create a customized solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Fill in the Brief
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg font-medium transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
