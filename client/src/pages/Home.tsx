/* Petal Postcard design reminder: welcome Isbah with an asymmetric, soft paper-card scene that
   feels personal on a phone first, setting up a deliberate multi-page sequence rather than a scroll. */
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import BirthdayShell from "@/components/BirthdayShell";

const logo = "/media/petal-bow-heart-logo.png";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <BirthdayShell step={1} label="A note for Isbah">
      <section className="screen welcome-screen" aria-labelledby="welcome-title">
        <motion.div className="welcome-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="chapter-label"><Heart size={13} fill="currentColor" /> a birthday note for</p>
          <h1 id="welcome-title">Dear <em>Isbah,</em></h1>
          <p className="welcome-message">Today has a little more sparkle in it because it is yours. This is a tiny birthday journey, saved especially for you.</p>
          <button className="seal-button" onClick={() => setLocation("/little-notes")}>
            <img src={logo} alt="" /> <span>Start your surprise</span> <ArrowRight size={16} />
          </button>
          <p className="tap-note"><Sparkles size={13} /> Four small chapters. Take your time.</p>
        </motion.div>

        <motion.div className="welcome-art" initial={{ opacity: 0, scale: 0.96, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <div className="welcome-art-frame"><img src="/media/petal-postcard-hero.jpg" alt="Pink birthday gifts, bows, flowers, and a heart-shaped keepsake" /></div>
          <div className="taped-note note-top"><span>for a very</span><strong>lovely<br />girl</strong></div>
          <div className="taped-note note-bottom"><strong>open me<br />slowly</strong><span>something sweet is inside</span></div>
          <Sparkles className="art-sparkle sparkle-one" size={28} aria-hidden="true" />
          <Heart className="art-heart" size={23} fill="currentColor" aria-hidden="true" />
        </motion.div>
      </section>
    </BirthdayShell>
  );
}
