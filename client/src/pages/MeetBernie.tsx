import Navbar from "@/components/layout/Navbar";
import justiceAbstract from "@/assets/justice-abstract.png";

export default function MeetBernie() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -translate-x-4 translate-y-4 -z-10" />
              <img 
                src={justiceAbstract} 
                alt="Abstract Justice" 
                className="w-full h-auto rounded-3xl shadow-xl shadow-black/5"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Philosophy</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Holistic Representation
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>My practice is rooted in holistic representation: the belief that a client is more than a case file. Holistic defense means understanding your story, your goals, and the circumstances that led you into your situation. Then, using that bigger picture to shape both strategy and outcome. By seeing the whole person, I can fight not just for a legal win, but for solutions that protect your future.</p>

                <p className="font-bold text-foreground">Solution Based Advocacy</p>

                <p>When your case goes to court, I provide aggressive, detail‑driven representation designed to protect your rights and fight for the best possible outcome. A holistic defense means I don't just argue, I bring your full story into focus. The Court needs to know who you are beyond what is written about you. By connecting facts, context, and your long‑term goals, I build stronger arguments and fight for results that make a real difference in your life.</p>

                <p>Winning matters, but so does knowing you're seen and heard as a whole person. From the first consultation to the final resolution, I stand beside you with strategy, persistence, and the full weight of my experience. A holistic approach means you stay informed, have a voice in the process, and know that your future, and not just your case, guides every decision we make together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
