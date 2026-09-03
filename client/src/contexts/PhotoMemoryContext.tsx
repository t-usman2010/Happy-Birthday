/* Petal Postcard design reminder: photo choices are private parcels for the kite—never previewed
   in the sharing step, only revealed as part of Isbah’s airborne memory tail. */
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const fallbackPhotos = ["/media/isbah-memory-1.jpeg", "/media/isbah-memory-2.jpeg", "/media/isbah-memory-3.jpeg"];

type PhotoMemoryContextValue = {
  photos: string[];
  uploadCount: number;
  setPhoto: (index: number, file: File | undefined) => void;
  useFallbackPhotos: () => void;
};

const PhotoMemoryContext = createContext<PhotoMemoryContextValue | null>(null);

export function PhotoMemoryProvider({ children }: { children: ReactNode }) {
  const [uploads, setUploads] = useState<Array<string | null>>([null, null, null]);
  const value = useMemo<PhotoMemoryContextValue>(() => ({
    photos: fallbackPhotos.map((fallback, index) => uploads[index] ?? fallback),
    uploadCount: uploads.filter(Boolean).length,
    setPhoto: (index, file) => {
      if (!file || !file.type.startsWith("image/")) return;
      const previewUrl = URL.createObjectURL(file);
      setUploads((current) => current.map((item, itemIndex) => itemIndex === index ? previewUrl : item));
    },
    useFallbackPhotos: () => setUploads([null, null, null]),
  }), [uploads]);
  return <PhotoMemoryContext.Provider value={value}>{children}</PhotoMemoryContext.Provider>;
}

export function usePhotoMemories() {
  const context = useContext(PhotoMemoryContext);
  if (!context) throw new Error("usePhotoMemories must be used inside PhotoMemoryProvider");
  return context;
}
