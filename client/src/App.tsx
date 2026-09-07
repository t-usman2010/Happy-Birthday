/* Petal Postcard design reminder: the experience is a mobile-first birthday journey of distinct,
   tactile postcard scenes for Isbah, using cherry-plum ink, satin bows, and paper-layer reveals. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import AudioPlayer from "./components/AudioPlayer";
import ErrorBoundary from "./components/ErrorBoundary";
import InteractiveLoader from "./components/InteractiveLoader";
import { LoaderProvider, useLoader } from "./contexts/LoaderContext";
import { PhotoMemoryProvider } from "./contexts/PhotoMemoryContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Kite from "./pages/Kite";
import Notes from "./pages/Notes";
import Wish from "./pages/Wish";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/little-notes" component={Notes} />
      <Route path="/kite" component={Kite} />
      <Route path="/wish" component={Wish} />
      <Route component={Home} />
    </Switch>
  );
}

function AppContent() {
  const { isLoaderOpen, closeLoader } = useLoader();

  return (
    <>
      <InteractiveLoader isOpen={isLoaderOpen} onComplete={closeLoader} />
      <Router />
      <AudioPlayer />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <PhotoMemoryProvider>
          <LoaderProvider>
            <TooltipProvider>
              <Toaster />
              <AppContent />
            </TooltipProvider>
          </LoaderProvider>
        </PhotoMemoryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
