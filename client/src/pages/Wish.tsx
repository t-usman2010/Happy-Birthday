/* Petal Postcard design reminder: the final page is a gentle birthday candle scene with a repeatable
   make-a-wish moment and a clear return path so Isbah can revisit the whole surprise whenever she wants. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CakeSlice, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import BirthdayShell from "@/components/BirthdayShell";

const wishes = [
  "A pocketful of days that feel like your favorite song.",
  "Good people, soft landings, and a wish that surprises you by coming true.",
  "Tiny moments of joy, arriving right on time.",
];

export default function Wish() {
  const [, setLocation] = useLocation();
  const [wishIndex, setWishIndex] = useState<number | null>(null);

  const makeWish = () => setWishIndex((current) => current === null ? 0 : (current + 1) % wishes.length);

  return (
    <BirthdayShell step={4} label="A wish for Isbah">
      <section className="screen wish-screen" aria-labelledby="wish-title">
        <motion.div className="wish-photo-wrap" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.48 }}>
          <img src="/media/pink-birthday-cake.jpg" alt="A strawberry-pink birthday cake with one lit candle" />
          <div className="cake-paper-note"><span>one more</span><strong>birthday<br />wish</strong></div>
        </motion.div>

        <div className="wish-copy-page">
          <p className="chapter-label"><Sparkles size={13} /> chapter four · final wish</p>
          <h1 id="wish-title">Make a wish, <em>Isbah.</em></h1>
          <p>For the moments that are still on their way. For all the beautiful things that have your name written on them.</p>
          <button className="seal-button cake-action" onClick={makeWish}><CakeSlice size={16} /><span>{wishIndex === null ? "Tap the candle" : "Make another wish"}</span></button>
          <AnimatePresence mode="wait">
            {wishIndex !== null && <motion.div className="wish-result" key={wishIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.24 }}><Sparkles size={17} /><p>{wishes[wishIndex]}</p></motion.div>}
          </AnimatePresence>
          <button className="replay-journey" onClick={() => setLocation("/")}><RotateCcw size={15} /> Start the surprise again <ArrowRight size={15} /></button>
        </div>
      </section>
    </BirthdayShell>
  );
}
