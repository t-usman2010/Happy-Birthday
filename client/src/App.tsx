/* Petal Postcard design reminder: the experience is a mobile-first birthday journey of distinct,
   tactile postcard scenes for Isbah, using cherry-plum ink, satin bows, and paper-layer reveals. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import AudioPlayer from "./components/AudioPlayer";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Gift from "./pages/Gift";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Wish from "./pages/Wish";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/little-notes" component={Notes} />
      <Route path="/gift" component={Gift} />
      <Route path="/wish" component={Wish} />
      <Route component={Home} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <AudioPlayer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
