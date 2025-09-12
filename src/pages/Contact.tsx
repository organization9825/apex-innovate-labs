import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Instagram
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@techflow.dev",
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM to 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "123 Tech Street, Downtown San Francisco"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9 AM - 6 PM",
      description: "Weekend support available for urgent matters"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with us 
              and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="cloud-services">Cloud & DevOps</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select 
                      id="budget"
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">$50,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you within 24 hours. Usually much faster!
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're here to help you transform your business with technology. 
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={info.title} className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-smooth hover-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.value}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="p-6 bg-gradient-card shadow-soft">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-smooth hover-lift ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </Card>

              {/* Quick Response Promise */}
              <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-primary-foreground/90 text-sm">
                  We understand that time is valuable. That's why we guarantee a response to all 
                  inquiries within 24 hours, and often much faster. For urgent matters, 
                  don't hesitate to call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center shadow-large">
            <div className="w-full h-64 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
              <div className="text-center text-primary-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p className="text-primary-foreground/80">San Francisco, California</p>
                <p className="text-primary-foreground/60 text-sm mt-2">Interactive map coming soon</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Located in the heart of San Francisco's tech district, we're at the center of innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;