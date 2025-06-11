
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "PROREZULTAT transformed our hiring process. They found us exceptional talent that perfectly aligned with our company culture.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Inc."
  },
  {
    quote: "Their deep understanding of our business needs made all the difference. We've built an amazing team thanks to their expertise.",
    author: "Michael Chen",
    position: "HR Director, InnovateCorp"
  },
  {
    quote: "Professional, efficient, and results-driven. PROREZULTAT exceeded our expectations in every aspect of the recruitment process.",
    author: "Elena Rodriguez",
    position: "Founder, GrowthLab"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our partners say about working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
