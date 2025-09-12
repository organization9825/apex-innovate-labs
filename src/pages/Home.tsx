import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Smartphone, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    { icon: Code, title: "Web Development", description: "Modern, responsive websites" },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS & Android applications" },
    { icon: Brain, title: "AI Solutions", description: "Intelligent automation" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-glow" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary-glow/30 rounded-full blur-xl animate-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-md rounded-full border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-primary-foreground">Building the Future with AI & Technology</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              We Build{" "}
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                Websites
              </span>
              ,{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                Mobile Apps
              </span>{" "}
              &{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                AI Solutions
              </span>{" "}
              <br className="hidden sm:block" />
              for the Future
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology. We deliver premium websites, 
              mobile applications, AI solutions, and cloud services that drive growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact">
                <Button variant="premium" size="lg" className="group">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Core{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in modern technology solutions that help businesses scale and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="text-center group hover-lift">
                  <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="hero" size="lg">
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;