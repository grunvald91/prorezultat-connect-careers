
const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            At PROREZULTAT, we believe that exceptional talent drives exceptional results. 
            Our approach goes beyond traditional recruitment – we focus on personalized selection 
            processes that truly understand both our clients' unique needs and candidates' 
            aspirations.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We don't just fill positions; we build lasting partnerships that deliver real, 
            measurable results for your business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
