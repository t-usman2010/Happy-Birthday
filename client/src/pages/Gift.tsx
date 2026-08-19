/* Petal Postcard design reminder: the gift is the tactile center of the journey—an unmissable,
   replayable wrapped-object interaction that visibly opens before revealing Isbah's birthday message. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import BirthdayShell from "@/components/BirthdayShell";

const logo = "/media/petal-bow-heart-logo.png";
const confettiColors = ["#ff8daf", "#f7c654", "#df4e80", "#fff3cf", "#ffb8cb"];

type GiftState = "ready" | "opening" | "open";

export default function Gift() {
  const [, setLocation] = useLocation();
  const [giftState, setGiftState] = useState<GiftState>("ready");
  const [giftKey, setGiftKey] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (giftState !== "opening") return;
    const timer = window.setTimeout(() => setGiftState("open"), 780);
    return () => window.clearTimeout(timer);
  }, [giftState]);

  useEffect(() => {
    if (!showPopUp) return;
    const timer = window.setTimeout(() => setShowPopUp(false), 2600);
    return () => window.clearTimeout(timer);
  }, [showPopUp]);

  const unwrap = () => {
    if (giftState === "ready") {
      setShowPopUp(true);
      setGiftState("opening");
    }
  };

  const replay = () => {
    setShowPopUp(false);
    setGiftState("ready");
    setGiftKey((current) => current + 1);
  };

  return (
    <BirthdayShell step={3} label="Isbah's birthday gift">
      <section className="screen gift-screen" aria-labelledby="gift-title">
        <div className="screen-heading compact-heading gift-heading">
          <p className="chapter-label">chapter three</p>
          <h1 id="gift-title">A present for <em>Isbah.</em></h1>
          <p>{giftState === "open" ? "You found it. And it is meant to be opened as many times as you like." : "Tap the bow. This one will really open."}</p>
        </div>

        <div className="gift-page-stage">
          <div className="gift-postcard postcard-back" aria-hidden="true" />
          <div className="gift-postcard postcard-front" aria-hidden="true" />
          <div className="gift-side-note left"><span>this is</span><strong>your<br />moment</strong></div>
          <div className="gift-side-note right"><Sparkles size={15} /><span>ready when<br />you are</span></div>

          <motion.button
            className={`gift-object is-${giftState}`}
            key={giftKey}
            onClick={unwrap}
            whileTap={giftState === "ready" ? { scale: 0.97 } : undefined}
            aria-label={giftState === "ready" ? "Open Isbah's gift" : "Isbah's gift is open"}
            disabled={giftState !== "ready"}
          >
            <span className="gift-ribbon-tail tail-left" />
            <span className="gift-ribbon-tail tail-right" />
            <span className="gift-object-lid"><span className="gift-bow" /></span>
            <span className="gift-object-base"><span className="gift-seal"><img src={logo} alt="" /></span></span>
            <span className="gift-object-label">{giftState === "ready" ? "tap the bow" : "opening..."}</span>
          </motion.button>
          <Heart className="stage-heart one" size={22} fill="currentColor" aria-hidden="true" />
          <Heart className="stage-heart two" size={18} fill="currentColor" aria-hidden="true" />
          <AnimatePresence>
            {showPopUp && (
              <motion.div
                className="gift-pop-up"
                role="status"
                initial={{ opacity: 0, y: 18, scale: 0.92, rotate: 4 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="pop-up-seal"><Heart size={17} fill="currentColor" /></span>
                <div><strong>Yay, Isbah!</strong><span>Your little birthday surprise is open.</span></div>
                <Sparkles className="pop-up-sparkle" size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {giftState === "open" && (
            <>
              <motion.div className="confetti-layer" aria-hidden="true">
                {Array.from({ length: 56 }).map((_, index) => {
                  const angle = (index * 137.5 * Math.PI) / 180;
                  const distance = 90 + (index * 37) % 330;
                  const confettiType = index % 5 === 0 ? "is-star" : index % 3 === 0 ? "is-ribbon" : "is-petal";
                  return <motion.span className={`confetti ${confettiType}`} key={index} style={{ backgroundColor: confettiColors[index % confettiColors.length] }} initial={{ x: 0, y: 0, opacity: 1, rotate: index * 12, scale: 0.75 }} animate={{ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance + 390, opacity: 0, rotate: 270 + index * 37, scale: 1.1 }} transition={{ duration: 1.45 + (index % 5) * 0.12, ease: "easeOut" }} />;
                })}
              </motion.div>
              <motion.article className="gift-reveal-card" initial={{ opacity: 0, y: 20, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -1 }} transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>
                <img src={logo} alt="" />
                <p className="chapter-label">a birthday secret</p>
                <h2>Isbah, you are<br /><em>so loved.</em></h2>
                <p>May this year hand you more reasons to laugh, more beautiful little wins, and all the softness you deserve.</p>
                <div className="reveal-actions">
                  <button className="text-button" onClick={replay}><RotateCcw size={14} /> Open it again</button>
                  <button className="seal-button" onClick={() => setLocation("/wish")}><span>One last wish</span><ArrowRight size={15} /></button>
                </div>
              </motion.article>
            </>
          )}
        </AnimatePresence>

        {giftState !== "open" && <button className="text-button gift-back" onClick={() => setLocation("/little-notes")}><ArrowLeft size={15} /> Back to the notes</button>}
      </section>
    </BirthdayShell>
  );
}
