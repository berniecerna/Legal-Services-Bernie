import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Landmark, Users, MapPin, Phone, Mail, Scale } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import justiceAbstract from "@/assets/justice-abstract.png";
import logoImage from "@assets/Logo_-_Silver_with_white_background_1772057157870.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await apiRequest("POST", "/api/leads", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Bernie will get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern Law Office" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/95 to-white" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Clients
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                For Law. <br />
                <span className="text-primary">For Life.</span> <br />
                For You.
              </h1>
              <div className="relative h-48 w-48 md:h-72 md:w-72 shrink-0 overflow-hidden rounded-3xl bg-white shadow-xl border border-border/50 animate-in fade-in slide-in-from-right-8 duration-1000 ml-[-20px] mr-[-20px]">
                <img 
                  src={logoImage} 
                  alt="Attorney Bernie Logo" 
                  className="h-full w-full object-contain p-6"
                />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-light">Guiding you through challenges, in and out of the courtroom. Located in Monterey County and serving the surrounding San Benito, Santa Cruz, and Santa Clara areas.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-border hover:bg-secondary">
                Learn About Holistic Defense
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Holistic Approach Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -translate-x-4 translate-y-4 -z-10" />
              <img 
                src={justiceAbstract} 
                alt="Abstract Justice" 
                className="w-full h-auto rounded-3xl shadow-xl shadow-black/5"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Holistic Representation
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>My practice is rooted in holistic representation: the belief that a client is more than a case file. Holistic defense means understanding your story, your goals, and the circumstances that led you into your situation. Then, using that bigger picture to shape both strategy and outcome. By seeing the whole person, I can fight not just for a legal win, but for solutions that protect your future.</p>

                <p className="font-bold text-foreground">Solution Based Advocacy</p>

                <p>When your case goes to court, I provide aggressive, detail‑driven representation designed to protect your rights and fight for the best possible outcome. A holistic defense means I don’t just argue, I bring your full story into focus. The Court needs to know who you are beyond what is written about you. By connecting facts, context, and your long‑term goals, I build stronger arguments and fight for results that make a real difference in your life.</p>

                <p>Winning matters, but so does knowing you’re seen and heard as a whole person. From the first consultation to the final resolution, I stand beside you with strategy, persistence, and the full weight of my experience. A holistic approach means you stay informed, have a voice in the process, and know that your future, and not just your case, guides every decision we make together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Complete Representation
            </h3>
            <p className="text-lg text-muted-foreground font-light">
              From the first consultation to the final resolution, I stand beside you with strategy, persistence, and the full weight of my experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Users className="h-8 w-8" />}
              title="Client-Centered Focus"
              description="You stay informed, have a voice in the process, and know that your future, and not just your case, guides every decision."
            />
            <ServiceCard 
              icon={<Shield className="h-8 w-8" />}
              title="Advocacy Beyond Court"
              description="Not every fight has to play out in front of a judge. Many challenges can be resolved faster through negotiation or mediation."
            />
            <ServiceCard 
              icon={<Landmark className="h-8 w-8" />}
              title="Strategy & Litigation"
              description="Aggressive, detail-driven representation designed to protect your rights and fight for the best possible outcome when you go to court."
            />
          </div>
        </div>
      </section>
      {/* Practice Areas Strip */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h3 className="text-2xl font-bold font-heading whitespace-nowrap">Practice Areas</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-background/70 font-medium">
              <span className="text-[20px]">Criminal Defense & Record Expungement</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-[20px]">Civil Litigation</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-[20px]">Contracts</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-[20px]">Limited Family Law</span>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Scale className="h-12 w-12 text-primary/20 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-4xl font-heading font-medium leading-relaxed text-foreground mb-8">
            "The worst sin toward our fellow creatures is not to hate them, but to be indifferent to them: that's the essence of inhumanity."
          </blockquote>
          <cite className="text-lg text-muted-foreground font-medium">— George Bernard Shaw</cite>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-black/5 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 bg-primary text-primary-foreground flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 font-heading">Ready to protect your future?</h3>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed font-light">
                Schedule a free consultation today. Let's discuss your situation and build a strategy tailored to you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Monterey County</p>
                    <p className="text-sm text-primary-foreground/70">Serving San Benito & Santa Cruz</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">(831) 609-0022</p>
                    <p className="text-sm text-primary-foreground/70">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">email@yourattorneybernie.com</p>
                    <p className="text-sm text-primary-foreground/70">Confidential & Secure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-12">
              <form className="space-y-6" onSubmit={form.handleSubmit((data) => mutation.mutate(data))}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input 
                    {...form.register("name")}
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    {...form.register("email")}
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">How can we help?</label>
                  <textarea 
                    {...form.register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Briefly describe your situation..."
                  />
                  {form.formState.errors.message && <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>}
                </div>
                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg h-12 text-base font-medium"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Logo Section */}
      <section id="logo" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 text-center">Brand Identity</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Our Logo
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="bg-white rounded-3xl p-12 flex items-center justify-center border border-border/50 shadow-sm aspect-square relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={logoImage} 
                  alt="Attorney Bernie Silver Logo" 
                  className="w-full h-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  [Type your first 6-8 sentence paragraph here about the inspiration, meaning, or design process behind the Attorney Bernie logo. You can discuss how the visual elements represent holistic defense and the commitment to the Monterey County community.]
                </p>
                <p>
                  [Type your second 6-8 sentence paragraph here. This is a great place to elaborate on the "For Law. For Life. For You." tagline and how the logo serves as a visual anchor for the practice's mission to provide compassionate, detail-driven legal representation.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="" className="h-8 w-8 object-contain" />
            <span className="font-heading font-bold text-foreground">Attorney Bernie</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Attorney Bernie Legal Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="bg-primary/5 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 text-foreground">{title}</h4>
      <p className="text-muted-foreground font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
