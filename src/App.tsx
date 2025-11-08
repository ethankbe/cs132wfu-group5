import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Dataset } from "./components/Dataset";
import { ResearchQuestions } from "./components/ResearchQuestions";
import { Hypotheses } from "./components/Hypotheses";
import { HypothesisTesting } from "./components/HypothesisTesting";
import { AboutUs } from "./components/AboutUs";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <Dataset />
      <ResearchQuestions />
      <Hypotheses />
      <HypothesisTesting />
      <AboutUs />
      
      <footer className="bg-slate-950 text-white py-16 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <div className="text-2xl mb-2">Unemployment in the Philippines</div>
                <p className="text-slate-400 text-sm">
                  Research Project 2024 • Educational & Research Purposes
                </p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider">
                  Methodology
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider">
                  Data
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 border-2 border-purple-500/30 text-purple-400 rounded-full shadow-2xl transition-all z-50"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
