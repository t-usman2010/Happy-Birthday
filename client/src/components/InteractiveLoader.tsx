/* Petal Postcard: Interactive Birthday Loader & Memory Preloader
   Gives Isbah an enchanting, tactile welcome with clickable floating sparkles,
   real asset preloading so all pictures and media are guaranteed loaded before entering,
   and an interactive wax seal unboxing moment that also starts the birthday waltz. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ASSETS_TO_PRELOAD = [
  { url: "/media/petal-postcard-hero.jpg", label: "Birthday Hero Postcard" },
  { url: "/media/petal-bow-heart-logo.png", label: "Satin Ribbon Seal" },
  { url: "/media/pink-birthday-cake.jpg", label: "Birthday Candle Cake" },
  { url: "/media/isbah-memory-1.jpeg", label: "Cherished Memory 1" },
  { url: "/media/isbah-memory-2.jpeg", label: "Cherished Memory 2" },
  { url: "/media/isbah-memory-3.jpeg", label: "Cherished Memory 3" },
];

const STATUS_MESSAGES = [
  "Preparing a little surprise for Isbah...",
  "Gathering sweet birthday memories...",
  "Polishing photo keepsakes...",
  "Tying the satin ribbon with care...",
  "Lighting the birthday candles...",
  "Sealing with love & sparkles... 💌",
];

type SparkleTap = {
  id: number;
  x: number;
  y: number;
  emoji: string;
};

type InteractiveLoaderProps = {
  onComplete: () => void;
  isOpen: boolean;
};

const EMOJIS = ["🌸", "✨", "💖", "🎂", "🎀", "⭐", "💕"];

export default function InteractiveLoader({ onComplete, isOpen }: InteractiveLoaderProps) {
  const [progress, setProgress] = useState(15);
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [tapCounter, setTapCounter] = useState(0);
  const [taps, setTaps] = useState<SparkleTap[]>([]);
  const [isOpening, setIsOpening] = useState(false);
  const tapIdRef = useRef(0);

  // Reset opening animation flag if re-opened
  useEffect(() => {
    if (isOpen) {
      setIsOpening(false);
    }
  }, [isOpen]);

  // Cycle status messages
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Preload all critical assets
  useEffect(() => {
    let loadedCount = 0;
    const total = ASSETS_TO_PRELOAD.length;

    const updateProgress = () => {
      loadedCount++;
      const calculated = Math.min(100, Math.round((loadedCount / total) * 85) + 15);
      setProgress((prev) => Math.max(prev, calculated));

      if (loadedCount >= total) {
        setTimeout(() => {
          setProgress(100);
          setIsAssetsLoaded(true);
        }, 350);
      }
    };

    // Preload audio
    const audio = new Audio();
    audio.src = "/media/isbah-birthday-petal-waltz.mp3";
    audio.preload = "auto";

    // Preload video for the kite page
    const video = document.createElement("video");
    video.src = "/media/isbah.mp4";
    video.preload = "auto";

    // Preload all images
    ASSETS_TO_PRELOAD.forEach(({ url }) => {
      const img = new Image();
      img.src = url;
      if (img.complete && img.naturalWidth > 0) {
        updateProgress();
      } else {
        img.onload = updateProgress;
        img.onerror = updateProgress; // Don't block if network hiccup
      }
    });

    // Fallback safety timer: ensure loader never hangs if connection is slow
    const safetyTimer = setTimeout(() => {
      setProgress(100);
      setIsAssetsLoaded(true);
    }, 4000);

    return () => clearTimeout(safetyTimer);
  }, []);

  // Handle interactive screen taps/clicks
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If clicking on the unseal button, let the button click handler take over
    if ((e.target as HTMLElement).closest(".loader-unseal-btn")) return;

    tapIdRef.current += 1;
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const newTap: SparkleTap = {
      id: tapIdRef.current,
      x: e.clientX,
      y: e.clientY,
      emoji,
    };

    setTapCounter((c) => c + 1);
    setTaps((prev) => [...prev.slice(-12), newTap]);

    setTimeout(() => {
      setTaps((prev) => prev.filter((t) => t.id !== newTap.id));
    }, 1000);
  };

  const handleUnseal = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Dispatch global interaction event so background audio can start playing immediately
    window.dispatchEvent(new CustomEvent("birthday:unseal"));

    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="interactive-loader"
          className={`interactive-loader-overlay ${isOpening ? "is-opening" : ""}`}
          onClick={handleScreenClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
          role="dialog"
          aria-label="Birthday envelope loading screen"
        >
          {/* Floating background decorative petals & stars */}
          <div className="loader-floating-decorations" aria-hidden="true">
            <span className="float-petal p1">🌸</span>
            <span className="float-petal p2">✨</span>
            <span className="float-petal p3">🎀</span>
            <span className="float-petal p4">🌸</span>
            <span className="float-petal p5">♡</span>
            <span className="float-petal p6">✨</span>
            <span className="float-petal p7">🌷</span>
            <span className="float-petal p8">✦</span>
          </div>

          {/* Interactive tap burst particles */}
          {taps.map((t) => (
            <motion.div
              key={t.id}
              className="tap-burst-particle"
              style={{ left: t.x, top: t.y }}
              initial={{ opacity: 1, scale: 0.5, y: 0 }}
              animate={{ opacity: 0, scale: 1.6, y: -45 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span>{t.emoji}</span>
              <small className="tap-plus">+1</small>
            </motion.div>
          ))}

          <div className="loader-content-wrap">
            {/* Main Envelope & Postcard Card */}
            <motion.div
              className={`loader-envelope-card ${isAssetsLoaded ? "is-ready" : ""}`}
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
             
              {/* Letter Headings */}
              <div className="envelope-header">
                <span className="envelope-badge">
                  <Sparkles size={13} /> Birthday Delivery
                </span>
                <h2 className="envelope-title">
                  For Dearest <em>Isbah</em>
                </h2>
                <p className="envelope-subtitle">A handcrafted birthday surprise awaits</p>
              </div>

              {/* Realistic Progress Bar & Micro-Status */}
              <div className="loader-progress-section">
                <div className="progress-info-row">
                  <span className="progress-status-text">
                    <Heart size={12} fill="currentColor" className="text-berry animate-pulse" />{" "}
                    {isAssetsLoaded ? "Your Surprises Prepared!" : STATUS_MESSAGES[statusIndex]}
                  </span>
                  <span className="progress-percentage">{progress}%</span>
                </div>

                <div className="loader-progress-track">
                  <motion.div
                    className="loader-progress-fill"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Tap mini-interaction prompt */}
              <div className="tap-prompt">
                {tapCounter > 0 ? (
                  <span className="tap-counter-active">
                    ✨ <strong>{tapCounter}</strong> birthday wishes sprinkled!
                  </span>
                ) : (
                  <span className="tap-hint">
                    <Sparkles size={12} /> Tap anywhere on the screen to shower sparkles
                  </span>
                )}
              </div>

              {/* Interactive Unseal Action Button */}
              <div className="loader-actions">
                {isAssetsLoaded ? (
                  <motion.button
                    className="loader-unseal-btn"
                    onClick={handleUnseal}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="unseal-sparkle">✦</span>
                    <span>Reveal Isbah's Surprise</span>
                    <ArrowRight size={17} />
                  </motion.button>
                ) : (
                  <div className="loading-gentle-pulse">
                    <span className="pulse-dot" />
                    <span>Loading pictures & memories...</span>
                  </div>
                )}
              </div>
            </motion.div>

            <p className="loader-foot-note">
              Crafted with love · Made for Isbah
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
