
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Recruitment",
    description: "Comprehensive talent acquisition services tailored to your specific needs, from executive search to volume hiring."
  },
  {
    icon: FileText,
    title: "Staff Assessment & Audit",
    description: "In-depth evaluation of your current team's capabilities and organizational structure to optimize performance."
  },
  {
    icon: LayoutDashboard,
    title: "HR Process Support",
    description: "Strategic HR consulting to streamline your people processes and build sustainable talent management systems."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive talent solutions designed to accelerate your business success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
