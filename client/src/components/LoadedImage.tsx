/* Petal Postcard: resilient image component ensuring photos are always loaded,
   gracefully blurred-in, and never show broken gaps on any page. */
import { Sparkles } from "lucide-react";
import { ImgHTMLAttributes, useEffect, useState } from "react";

interface LoadedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export default function LoadedImage({
  src,
  alt,
  fallbackSrc = "/media/petal-postcard-hero.jpg",
  className = "",
  containerClassName = "",
  aspectRatio,
  fetchPriority,
  loading = "eager",
  decoding = "async",
  style,
  ...rest
}: LoadedImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setStatus("loading");
    setCurrentSrc(src);

    const img = new Image();
    img.src = src;
    if (img.complete && img.naturalWidth > 0) {
      setStatus("loaded");
      return;
    }

    img.onload = () => {
      setStatus("loaded");
    };

    img.onerror = () => {
      if (fallbackSrc && fallbackSrc !== src) {
        setCurrentSrc(fallbackSrc);
        const fallbackImg = new Image();
        fallbackImg.src = fallbackSrc;
        fallbackImg.onload = () => setStatus("loaded");
        fallbackImg.onerror = () => setStatus("error");
      } else {
        setStatus("error");
      }
    };
  }, [src, fallbackSrc]);

  return (
    <div
      className={`loaded-image-container ${containerClassName} ${status === "loading" ? "is-loading" : ""} ${status === "loaded" ? "is-loaded" : ""}`}
      style={{ aspectRatio, ...style }}
    >
      {/* Shimmer skeleton placeholder */}
      {status === "loading" && (
        <div className="loaded-image-skeleton" aria-hidden="true">
          <div className="skeleton-shimmer" />
          <Sparkles className="skeleton-sparkle" size={20} />
        </div>
      )}

      {/* Fallback art if both primary and fallback fail */}
      {status === "error" ? (
        <div className="loaded-image-fallback" role="img" aria-label={alt}>
          <div className="fallback-card">
            <span className="fallback-heart">🌸</span>
            <strong>Isbah's Keepsake</strong>
            <small>A sweet birthday moment</small>
          </div>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          decoding={decoding}
          // @ts-expect-error fetchPriority attribute is modern web standard
          fetchpriority={fetchPriority}
          className={`loaded-image-img ${className} ${status === "loaded" ? "img-visible" : "img-hidden"}`}
          onLoad={() => setStatus("loaded")}
          onError={() => {
            if (currentSrc !== fallbackSrc && fallbackSrc) {
              setCurrentSrc(fallbackSrc);
            } else {
              setStatus("error");
            }
          }}
          {...rest}
        />
      )}
    </div>
  );
}
