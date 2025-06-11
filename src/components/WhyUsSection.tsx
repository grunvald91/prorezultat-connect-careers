
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Proven Effectiveness",
    description: "Our track record speaks for itself with 95% client satisfaction rate and successful placements across various industries."
  },
  {
    title: "Deep Business Understanding",
    description: "We invest time to understand your company culture, goals, and challenges to ensure perfect candidate-company fit."
  },
  {
    title: "Partnership Mindset",
    description: "We're not just a vendor – we're your strategic partner committed to your long-term success and growth."
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What sets us apart in the world of talent acquisition
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-6 rounded-lg hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
