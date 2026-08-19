/* Petal Postcard design reminder: the player is a small tactile keepsake control, not generic media
   chrome—use the bow-heart mark, warm paper materials, and clear touch-friendly controls for Isbah. */
import { Music2, Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const trackUrl = "/media/isbah-birthday-petal-waltz.mp3";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const changeVolume = (nextVolume: number) => {
    setVolume(nextVolume);
    if (nextVolume > 0 && isMuted) setIsMuted(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={trackUrl}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <aside className={`audio-player ${isExpanded ? "is-expanded" : ""}`} aria-label="Birthday music player">
        <button
          className={`audio-main-control ${isPlaying ? "is-playing" : ""}`}
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause birthday music" : "Play birthday music"}
          aria-pressed={isPlaying}
        >
          <span className="audio-icon-wrap">{isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</span>
          <span className="audio-main-copy"><strong>{isPlaying ? "Petal waltz playing" : "Play birthday music"}</strong><small>for Isbah</small></span>
          <Sparkles className="audio-sparkle" size={15} />
        </button>

        <button className="audio-expand-control" onClick={() => setIsExpanded((current) => !current)} aria-label={isExpanded ? "Close music controls" : "Open music controls"} aria-expanded={isExpanded}>
          <Music2 size={16} />
        </button>

        {isExpanded && (
          <div className="audio-details">
            <div className="audio-track-label"><span>Isbah’s Petal Waltz</span><small>instrumental birthday mix</small></div>
            <div className="audio-volume-row">
              <button className="audio-mute-control" onClick={() => setIsMuted((current) => !current)} aria-label={isMuted ? "Unmute music" : "Mute music"}>{isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
              <input type="range" min="0" max="1" step="0.05" value={isMuted ? 0 : volume} onChange={(event) => changeVolume(Number(event.target.value))} aria-label="Music volume" />
              <span>{Math.round((isMuted ? 0 : volume) * 100)}%</span>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
