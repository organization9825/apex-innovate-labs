import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Github, 
  ShoppingCart, 
  GraduationCap, 
  MessageCircle, 
  Smartphone,
  Globe,
  Brain,
  Eye,
  ArrowRight
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online store with payment processing, inventory management, and customer analytics.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: ShoppingCart,
      features: ["Payment Integration", "Admin Dashboard", "Mobile Responsive", "SEO Optimized"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "School Management Portal",
      description: "Comprehensive school management system with student tracking, grade management, and parent portal.",
      image: "/placeholder.svg",
      category: "Web Application",
      technologies: ["React", "Firebase", "Material-UI", "Charts.js"],
      icon: GraduationCap,
      features: ["Student Management", "Grade Tracking", "Parent Portal", "Reports & Analytics"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI Chatbot Integration",
      description: "Intelligent customer service chatbot with natural language processing for a retail business.",
      image: "/placeholder.svg",
      category: "AI Solution",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      icon: MessageCircle,
      features: ["Natural Language Processing", "Multi-language Support", "Analytics Dashboard", "24/7 Support"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker Mobile App",
      description: "Cross-platform mobile app for fitness tracking with workout plans and progress monitoring.",
      image: "/placeholder.svg",
      category: "Mobile App",
      technologies: ["React Native", "Redux", "Firebase", "Health APIs"],
      icon: Smartphone,
      features: ["Workout Tracking", "Progress Analytics", "Social Features", "Health Integration"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "Prisma", "Mapbox"],
      icon: Globe,
      features: ["Property Search", "Virtual Tours", "Agent Dashboard", "Map Integration"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      description: "Business intelligence dashboard with machine learning models for sales forecasting.",
      image: "/placeholder.svg",
      category: "AI Solution",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      icon: Brain,
      features: ["Sales Forecasting", "Data Visualization", "Custom Reports", "API Integration"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "AI Solution", "Web Application"];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Showcasing Our{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Best Work
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects across web development, mobile apps, 
              AI solutions, and digital experiences that have helped businesses grow.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "hero" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.id}
                  className="group overflow-hidden bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift animate-fade-in border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-hero overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-primary-foreground/60" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button size="sm" variant="outline" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20">
                        <Eye className="w-4 h-4 mr-2" />
                        View Demo
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-large">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Inspired by Our Work?
              </h3>
              <p className="text-primary-foreground/80 mb-6 text-lg">
                Let's create something amazing together. Start your project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-md text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
                    View Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="premium" size="lg" className="bg-background text-primary hover:bg-background/90">
                    Start Your Project
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

export default Portfolio;