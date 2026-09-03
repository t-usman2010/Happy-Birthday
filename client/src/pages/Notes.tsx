/* Petal Postcard design reminder: this route creates a playful handwritten-notes moment for Isbah,
   using three tap-to-reveal paper cards that unlock the hidden kite-memory scene. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import BirthdayShell from "@/components/BirthdayShell";

const notes = [
  { title: "Your warmth", body: "You make ordinary moments feel soft, safe, and a little more golden.", icon: Heart, color: "blush" },
  { title: "Your magic", body: "You carry a kind of sparkle that cannot be copied. Please never make it smaller.", icon: Sparkles, color: "butter" },
  { title: "Your next chapter", body: "May it bring gentle surprises, loud laughter, and wishes that find you.", icon: Star, color: "rose" },
];

export default function Notes() {
  const [, setLocation] = useLocation();
  const [opened, setOpened] = useState<number[]>([]);
  const allOpened = opened.length === notes.length;
  const reveal = (index: number) => setOpened((current) => current.includes(index) ? current : [...current, index]);

  return (
    <BirthdayShell step={2} label="Little notes for Isbah">
      <section className="screen notes-screen" aria-labelledby="notes-title">
        <div className="screen-heading compact-heading">
          <p className="chapter-label">chapter two</p>
          <h1 id="notes-title">Three little reminders,<br /></h1>
          <p>Tap every folded note. The next surprise is waiting quietly in the sky.</p>
        </div>
        <div className="note-stack" aria-label="Three birthday notes to reveal">
          {notes.map(({ title, body, icon: Icon, color }, index) => {
            const isOpen = opened.includes(index);
            return <motion.button className={`interactive-note ${color} ${isOpen ? "is-open" : ""}`} key={title} onClick={() => reveal(index)} whileTap={{ scale: 0.98 }} aria-pressed={isOpen}>
              <span className="note-pin"><Icon size={17} fill="currentColor" /></span>
              <AnimatePresence mode="wait">
                {isOpen ? <motion.span className="note-inside" key="inside" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}><strong>{title}</strong><small>{body}</small></motion.span> : <motion.span className="note-cover" key="cover" exit={{ opacity: 0, y: -5 }}><small>tap to unfold</small><strong>{index + 1}</strong></motion.span>}
              </AnimatePresence>
            </motion.button>;
          })}
        </div>
        <div className="page-actions two-actions">
          <button className="text-button" onClick={() => setLocation("/")}><ArrowLeft size={15} /> Back</button>
          <button className="seal-button" onClick={() => setLocation("/kite")} disabled={!allOpened}><span>{allOpened ? "Let the kite fly" : `${opened.length}/3 notes opened`}</span> <ArrowRight size={16} /></button>
        </div>
      </section>
    </BirthdayShell>
  );
}
