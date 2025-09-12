import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
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

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-md rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground">Building the Future with AI & Technology</span>
          </div>

          {/* Main Heading */}
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

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology. We deliver premium websites, 
            mobile applications, AI solutions, and cloud services that drive growth and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="premium" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
              View Our Work
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-background/10 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">AI Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;