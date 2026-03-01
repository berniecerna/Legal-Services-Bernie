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
                <p>I became a lawyer because I like making complicated things simple. Growing up, I translated English to Spanish for my mom, and that’s when I realized people need help navigating systems that weren’t built for them. I liked helping then, and I like helping now. Today, I translate the legal system for clients facing some of the most stressful moments of their lives. My goal is always the same: to give people clarity and the confidence to make informed decisions.

                I believe in holistic representation. Legal problems don’t happen in isolation. They affect families, futures, and peace of mind. That’s why I don’t just focus on the immediate case; I focus on what resolution will truly move your life forward. Sometimes that means trial. Sometimes it means negotiation. Either way, it means advocacy tailored to the person, not just the paperwork.

                I balanced a full-time job while attending law school at night, graduating and passing the bar on the same timeline as traditional students. During that time, I worked for two of the top criminal defense attorneys in California, who instilled in me the practical courtroom strategies, client-first discipline, and relentless preparation that drive my practice today. Because of them, I have the foundation to continue fighting for my clients, in my own way.

                Since becoming licensed in 2022, I’ve focused on criminal defense and related civil matters. I trained in mediation as well, because sometimes the smartest win is the one you negotiate. In the courtroom, my strength lies in being personable and professional with judges, clerks, and opposing counsel. I use that rapport to open the door for fair outcomes. But if those doors close, I don’t hesitate to push back with everything I have to protect my clients.

                As one of the few Latino and Spanish-speaking attorneys in this community, my role is essential. All people, including my Spanish-speaking and immigrant clients, deserve to feel secure in their choice of lawyer. To know that the person representing them truly has their back. That’s the standard I hold myself to, every single time.

                Clients describe me as informed, caring, and patient. What excites me most about law isn’t handing down directives but walking my clients through every step, explaining my thought process, sharing the strategy, and incorporating their goals into the plan. That way, the final result always feels like a success that reflects their voice as much as mine.

                I was raised in Salinas and built my career here in Monterey County, with cases extending into Santa Cruz, San Benito, and Santa Clara counties. These are my communities, and I draw on the relationships I’ve built across them to advocate more effectively for my clients.

                Outside of work, I’m a lifelong learner and problem-solver. I’m currently on my second custom PC build and love keeping up with the latest tech. I enjoy baking (in another life, I would’ve gone to pastry school instead of law school), and I love intimate hangouts with close friends. Whether it’s law, tech, or creating fine pastries, my approach is the same: learn it, simplify it, execute it.

                Contact me today, and let’s chart a clear path forward — together.</p>
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
