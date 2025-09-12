import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "100+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Star },
    { number: "20+", label: "Countries Served", icon: Globe },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Full-Stack Developer",
      image: "/placeholder.svg",
      description: "Expert in React, Node.js, and cloud architecture with 8+ years of experience."
    },
    {
      name: "Sarah Chen",
      role: "AI/ML Engineer",
      image: "/placeholder.svg",
      description: "Specialized in machine learning, computer vision, and natural language processing."
    },
    {
      name: "Marcus Rodriguez",
      role: "Mobile App Developer",
      image: "/placeholder.svg",
      description: "Flutter and React Native expert with expertise in cross-platform development."
    },
    {
      name: "Emily Foster",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
      description: "Creative designer focused on user experience and modern interface design."
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that matter."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality, design, and user experience."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About TechFlow</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building the{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of developers, designers, and AI specialists dedicated 
              to building digital solutions that empower businesses and transform ideas into reality.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is to transform ideas into modern, scalable, and innovative digital experiences. 
                We believe that technology should be accessible, beautiful, and powerful enough to drive real business growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Deliver exceptional user experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Use cutting-edge technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Provide ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-primary-foreground animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To become the leading technology partner for businesses worldwide, known for our innovation, 
                quality, and commitment to client success. We envision a future where every business, 
                regardless of size, has access to enterprise-level technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing your digital vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="p-6 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-large">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-lg">
                Let's discuss how we can help transform your business with technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
                    View Our Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="premium" size="lg" className="bg-background text-primary hover:bg-background/90">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;