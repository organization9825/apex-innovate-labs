import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Smartphone, Brush, Shield } from "lucide-react";

const TechStackSection = () => {
  const categories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", logo: "⚛️" },
        { name: "Next.js", logo: "▲" },
        { name: "TypeScript", logo: "TS" },
        { name: "Tailwind", logo: "🎨" },
        { name: "Vue.js", logo: "Vue" },
        { name: "Angular", logo: "🅰️" },
      ]
    },
    {
      icon: Database,
      title: "Backend", 
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", logo: "🟢" },
        { name: "Python", logo: "🐍" },
        { name: "Go", logo: "🔷" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Redis", logo: "🔴" },
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "from-purple-500 to-violet-500", 
      technologies: [
        { name: "AWS", logo: "☁️" },
        { name: "Google Cloud", logo: "🌤️" },
        { name: "Docker", logo: "🐳" },
        { name: "Kubernetes", logo: "☸️" },
        { name: "Terraform", logo: "🏗️" },
        { name: "GitHub Actions", logo: "⚡" },
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-pink-500 to-rose-500",
      technologies: [
        { name: "React Native", logo: "📱" },
        { name: "Flutter", logo: "💙" },
        { name: "iOS", logo: "🍎" },
        { name: "Android", logo: "🤖" },
        { name: "Expo", logo: "⚫" },
        { name: "Ionic", logo: "⚡" },
      ]
    },
    {
      icon: Brush,
      title: "AI & ML",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "TensorFlow", logo: "🧠" },
        { name: "PyTorch", logo: "🔥" },
        { name: "OpenAI", logo: "🤖" },
        { name: "Hugging Face", logo: "🤗" },
        { name: "LangChain", logo: "⛓️" },
        { name: "Pinecone", logo: "🌲" },
      ]
    },
    {
      icon: Shield,
      title: "Security & Testing",
      color: "from-indigo-500 to-blue-500",
      technologies: [
        { name: "Jest", logo: "🃏" },
        { name: "Cypress", logo: "🌿" },
        { name: "Auth0", logo: "🔐" },
        { name: "Supabase", logo: "⚡" },
        { name: "Firebase", logo: "🔥" },
        { name: "Stripe", logo: "💳" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Technology Stack</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage the latest and most reliable technologies to build scalable, 
            secure, and high-performance applications that stand the test of time.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift group border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-smooth`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-smooth cursor-pointer group/tech"
                      style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                    >
                      <span className="text-lg">{tech.logo}</span>
                      <span className="text-sm font-medium text-muted-foreground group-hover/tech:text-foreground transition-smooth">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 shadow-large">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Always Learning, Always Improving
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do we. Our team continuously learns new technologies 
              and best practices to ensure we're always delivering cutting-edge solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
              <div>
                <div className="text-2xl font-bold mb-2">Latest Frameworks</div>
                <div className="text-sm">We stay updated with the newest technology releases</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Best Practices</div>
                <div className="text-sm">Following industry standards and security guidelines</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Performance Focus</div>
                <div className="text-sm">Optimized for speed, scalability, and efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;