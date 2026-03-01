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
                <p>I became a lawyer because I like making complicated things simple. Growing up, I translated English to Spanish for my mom, and that’s when I realized people need help navigating systems that weren’t built for them. I liked helping then, and I like helping now. Today, I translate the legal system for clients facing some of the most stressful moments of their lives. My goal is always the same: to give people clarity and the confidence to make informed decisions. </p>
                <p>I received my Juris Doctorate from Monterey College of Law in 2021. I have been practicing locally since then. The first ten years of my legal career was with a local criminal defense firm, the first seven years as a Paralegal and then three as an attorney. After 10 years, I branched out and began a solo practice widening my scope of services beyond criminal defense. </p>
              </div>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Why I Practice Law</h4>
                <p>I believe in holistic representation. Legal problems don’t happen in isolation. They affect families, futures, and peace of mind. That’s why I don’t just focus on the immediate case; I focus on what resolution will truly move your life forward. Sometimes that means trial. Sometimes it means negotiation. Either way, it means advocacy tailored to the person, not just the paperwork.</p>

                <p className="pl-[0px] pr-[0px] pt-[20px] pb-[20px]">As one of the few Latino and Spanish-speaking attorneys in this community, my role is essential. All people, including my Spanish-speaking and immigrant clients, deserve to feel secure in their choice of lawyer. To know that the person representing them truly has their back. That’s the standard I hold myself to, every single time.</p>

                <p className="pt-[20px] pb-[20px]">Clients describe me as informed, caring, and patient. What excites me most about law isn’t handing down directives but walking my clients through every step, explaining my thought process, sharing the strategy, and incorporating their goals into the plan. That way, the final result always feels like a success that reflects their voice as much as mine.</p>

                <p>I was raised in Salinas and built my career here in Monterey County, with cases extending into Santa Cruz, San Benito, and Santa Clara counties. These are my communities, and I draw on the relationships I’ve built across them to advocate more effectively for my clients.</p>

                <p>Outside of work, I’m a lifelong learner and problem-solver. I’m currently on my second custom PC build and love keeping up with the latest tech. I also regularly am baking and enjoy formulating new recipes and flavor combinations. In another life, I would’ve gone to pastry school instead of law school.</p>

                <p>Contact me today, and let’s chart a clear path forward — together.</p>
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
