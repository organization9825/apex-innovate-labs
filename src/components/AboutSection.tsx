import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, TrendingUp, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "100+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital landscape."
    },
    {
      icon: Lightbulb,
      title: "Vision", 
      description: "To be the leading technology partner for businesses worldwide, creating digital experiences that transform industries and improve lives."
    },
    {
      icon: Users,
      title: "Values",
      description: "We believe in transparency, quality, innovation, and building long-term partnerships based on trust and measurable results."
    }
  ];

  const skills = [
    "React & Next.js",
    "Node.js & Express", 
    "Python & Django",
    "Flutter & React Native",
    "AWS & Google Cloud",
    "Machine Learning",
    "UI/UX Design",
    "Digital Marketing",
    "Cybersecurity",
    "DevOps & CI/CD"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">About Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building Tomorrow's{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Technology Today
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate developers, designers, and strategists dedicated to 
            creating exceptional digital experiences that drive business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="p-6 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mission, Vision, Values */}
          <div className="space-y-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills & Expertise */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team combines deep technical knowledge with creative problem-solving 
              to deliver solutions that exceed expectations and drive real business results.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge 
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-smooth cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Team Highlight */}
        <Card className="p-8 md:p-12 bg-gradient-hero text-center shadow-large">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Why Choose TechFlow?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            We don't just build applications; we craft digital experiences that connect with your audience, 
            drive engagement, and deliver measurable business results. Our agile approach ensures rapid 
            development without compromising on quality or security.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
            <div>
              <div className="text-2xl font-bold mb-2">Agile Development</div>
              <div className="text-sm">Fast, iterative development with regular feedback loops</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-sm">Round-the-clock technical support and maintenance</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Future-Proof</div>
              <div className="text-sm">Built with scalability and emerging technologies in mind</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;