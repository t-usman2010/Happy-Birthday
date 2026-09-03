/* Petal Postcard design reminder: this is the hidden reveal—the kite carries Isbah’s letter while
   three previously unseen memories are joined to one tail and sway together in the open sky. */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import BirthdayShell from "@/components/BirthdayShell";
import { usePhotoMemories } from "@/contexts/PhotoMemoryContext";

const captions = ["a little sparkle", "a favorite moment", "more to come"];

export default function Kite() {
  const [, setLocation] = useLocation();
  const { photos } = usePhotoMemories();
  return (
    <BirthdayShell step={3} label="A kite full of memories for Isbah">
      <section className="screen kite-screen" aria-labelledby="kite-title">
        <div className="screen-heading compact-heading kite-heading">
          <p className="chapter-label"><Sparkles size={13} /> chapter three</p>
          <h1 id="kite-title">A little sky,<br /><em>just for you.</em></h1>
          <p>The saved birthday memories have found their way into the tail.</p>
        </div>
        <motion.div className="kite-sky" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}>
          <span className="sky-doodle doodle-one">✦</span><span className="sky-doodle doodle-two">♡</span><span className="sky-doodle doodle-three">✦</span>
          <motion.div className="kite-object" animate={{ y: [0, -9, 0], rotate: [-1, 1.5, -1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="kite-ribbon kite-ribbon-left" /><div className="kite-ribbon kite-ribbon-right" />
            <div className="kite-paper"><span className="kite-corner kite-corner-one" /><span className="kite-corner kite-corner-two" /><div className="kite-letter"><Heart size={16} fill="currentColor" /><p>Isbah, may this year carry you toward the dreams that feel like home. May ordinary days shine a little brighter, and remember: you are cherished, capable, and deeply loved. Keep looking up — beautiful things are coming.</p></div></div>
            <div className="kite-knot"><Heart size={13} fill="currentColor" /></div>
          </motion.div>
          <div className="kite-thread" aria-hidden="true" />
          <motion.div className="kite-tail kite-tail-wave" aria-label="A linked, waving photo tail of birthday memories" animate={{ x: [0, 7, -5, 0], rotate: [-1, 2.5, -1.5, -1] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
            <svg className="kite-tail-path" viewBox="0 0 220 250" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M92 0 C132 25 63 54 148 91 C190 120 47 162 97 220" stroke="#cf4c7b" strokeWidth="2" strokeDasharray="7 7" /><circle cx="92" cy="0" r="4" fill="#ffc6d7" /><circle cx="148" cy="91" r="4" fill="#ffc6d7" /><circle cx="97" cy="220" r="4" fill="#ffc6d7" /></svg>
            {photos.map((photo, index) => <motion.figure className={`kite-photo kite-photo-${index + 1}`} key={photo} initial={{ opacity: 1, y: 0, rotate: index === 1 ? 5 : -6 }} animate={{ y: [0, 5, 0], rotate: index === 1 ? [5, 9, 5] : [-6, -2, -6] }} transition={{ delay: 0.12 + index * 0.1, duration: 2.6 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}><img src={photo} alt={`A birthday memory for Isbah, photo ${index + 1}`} /><figcaption>{captions[index]}</figcaption></motion.figure>)}
          </motion.div>
        </motion.div>
        <div className="page-actions kite-actions"><button className="text-button" onClick={() => setLocation("/little-notes")}><ArrowLeft size={15} /> Back to the notes</button><button className="seal-button" onClick={() => setLocation("/wish")}><span>Make a wish</span> <ArrowRight size={16} /></button></div>
      </section>
    </BirthdayShell>
  );
}
