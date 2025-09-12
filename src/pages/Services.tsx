import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud, 
  Megaphone, 
  Palette, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
      pricing: "Starting at $2,999"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      pricing: "Starting at $4,999"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation, machine learning models, and AI-powered features to enhance your business.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      pricing: "Custom Quote"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure, deployment, and management using AWS, Google Cloud, and Azure.",
      features: ["Auto Scaling", "High Availability", "Cost Optimization", "Security"],
      pricing: "Starting at $1,499/month"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience and conversion in mind.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      pricing: "Starting at $1,999"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Complete digital marketing strategies including SEO, social media, and performance marketing.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      pricing: "Starting at $999/month"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Comprehensive security solutions and ongoing maintenance to protect your digital assets.",
      features: ["Security Audits", "Regular Updates", "Data Protection", "24/7 Monitoring"],
      pricing: "Starting at $499/month"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with performance optimization.",
      features: ["Code Optimization", "Database Tuning", "CDN Setup", "Performance Monitoring"],
      pricing: "Starting at $799"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Digital Solutions for{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology solutions 
              that scale with your business and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift group cursor-pointer border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-primary">{service.pricing}</span>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-large">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-lg">
                Get a free consultation and custom quote for your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="premium" size="lg" className="bg-background text-primary hover:bg-background/90">
                    Get Free Quote
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

export default Services;