import Navbar from "@/components/layout/Navbar";
import logoImage from "@assets/Logo_-_Silver_with_white_background_1772057157870.png";

export default function MeetBernie() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 text-center">About</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-foreground text-center leading-tight">
              Meet Bernie
            </h3>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="bg-secondary/30 rounded-3xl p-12 flex items-center justify-center aspect-square">
                <p className="text-muted-foreground text-center">[Insert photo of Bernie here]</p>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>[Write a brief introduction about Bernie here. Include background, where you grew up, and what drew you to the legal profession. This is the first thing visitors will read, so make it personal and welcoming.]</p>
                <p>[Write about your education, bar admissions, and professional qualifications here. Include law school, any honors or distinctions, and years of experience practicing law.]</p>
              </div>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Why I Practice Law</h4>
                <p>[Write about your motivation for practicing law. What drives you? What experiences shaped your approach to legal representation? Why did you choose to focus on criminal defense, civil litigation, and the practice areas you serve?]</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Community Involvement</h4>
                <p>[Write about your ties to the Monterey County community. Include any volunteer work, community organizations, pro bono efforts, or local involvement that reflects your commitment beyond the courtroom.]</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Outside the Courtroom</h4>
                <p>[Write about your personal interests and hobbies. This helps clients connect with you as a person. Include family life, hobbies, or passions that give visitors a sense of who you are beyond your legal practice.]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-foreground">Attorney Bernie</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} | Attorney Bernie: Legal Services | All rights reserved.
            </p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
              The information on this website is provided for general informational purposes only and is not legal advice. Sending a message through this site, filling out a contact form, or communicating with Attorney Bernie in any way does not create an attorney-client relationship. No attorney-client relationship is formed unless and until a written agreement is signed. Please do not send confidential or sensitive information through this site.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
