/* Petal Postcard design reminder: this shared frame makes every route feel like one chapter of a
   hand-prepared birthday card, with an ownable bow-heart seal and clear mobile progress cues. */
import { Heart, Sparkles } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";

const logo = "/media/petal-bow-heart-logo.png";

type BirthdayShellProps = {
  children: ReactNode;
  step: number;
  label: string;
};

export default function BirthdayShell({ children, step, label }: BirthdayShellProps) {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <div className="birthday-app">
      <div className="paper-grain" aria-hidden="true" />
      <header className="journey-header">
        <button className="journey-brand" onClick={() => setLocation("/")} aria-label="Return to Isbah's birthday home">
          <img src={logo} alt="" />
          <span><strong>Birthday, Isbah</strong><small>a little surprise</small></span>
        </button>
        <div className="journey-tag"><Sparkles size={14} /> Made with love</div>
      </header>
      <div className="journey-progress" aria-label={`Journey step ${step} of 4: ${label}`}>
        {[1, 2, 3, 4].map((item) => <span className={item <= step ? "is-current" : ""} key={item} />)}
      </div>
      <main className="journey-main">{children}</main>
      <footer className="journey-footer"><Heart size={12} fill="currentColor" /> <span>Made just for Isbah</span></footer>
    </div>
  );
}
