import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Dramatic gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      {/* Floating organic shapes with parallax */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-10 w-48 h-48 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-40 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating geometric decorations */}
      <motion.div
        className="absolute top-40 left-1/4 w-16 h-16 border-2 border-orange-500/30 rounded-lg"
        animate={{ 
          rotate: [0, 180, 360],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/3 w-12 h-12 bg-purple-500/20 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        style={{ opacity, scale }}
        className="relative max-w-7xl mx-auto px-6 py-32 text-center z-10 w-full"
      >
        {/* Overline with animated sparkles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-center gap-3"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </motion.div>
          <span className="font-mono text-cyan-400 tracking-[0.3em] uppercase text-sm">
            Data Science Research 2024
          </span>
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Main title with multiple creative effects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10 relative"
        >
          {/* Background text for depth effect */}
          <motion.h1 
            className="font-display text-7xl md:text-9xl lg:text-[13rem] tracking-tighter leading-[0.85] absolute inset-0 blur-sm opacity-30"
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Unemployment
            </span>
          </motion.h1>
          
          {/* Main title */}
          <h1 className="font-display text-7xl md:text-9xl lg:text-[13rem] tracking-tighter leading-[0.85] relative">
            {/* Animated gradient background */}
            <motion.span 
              className="block relative"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #06b6d4 25%, #a855f7 50%, #f97316 75%, #ffffff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% center', '200% center']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Unemployment
            </motion.span>
          </h1>
          
          {/* Decorative underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"
          />
        </motion.div>

        {/* Subtitle with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl text-slate-400 tracking-tight flex items-center justify-center gap-4 flex-wrap">
            <span>in the</span>
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-display">
                Philippines
              </span>
              {/* Glow effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-xl opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          </div>
          
          {/* Description with typing effect feel */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            A comprehensive statistical analysis uncovering{" "}
            <motion.span 
              className="text-cyan-400 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              patterns
            </motion.span>
            ,{" "}
            <motion.span 
              className="text-purple-400 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              disparities
            </motion.span>
            , and{" "}
            <motion.span 
              className="text-orange-400 font-mono"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              insights
            </motion.span>
            {" "}in labor market dynamics
          </motion.p>
        </motion.div>

        {/* Quick stats ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-20"
        >
          {[
            { label: "2.4M Citizens", color: "cyan" },
            { label: "17 Regions", color: "purple" },
            { label: "15K+ Data Points", color: "orange" },
            { label: "5 Hypotheses", color: "pink" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className={`group cursor-pointer`}
            >
              <div className="relative">
                <div className={`font-mono text-sm px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/5 border-2 border-${stat.color}-500/30 text-${stat.color}-400 hover:bg-${stat.color}-500/10 hover:border-${stat.color}-500/50 transition-all`}>
                  {stat.label}
                </div>
                {/* Animated ring on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 border-${stat.color}-500/50`}
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: [0, 1, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator with bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-mono text-xs text-slate-600 uppercase tracking-[0.3em]">
            Explore Research
          </span>
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <ArrowDown className="w-5 h-5 text-cyan-400" />
            {/* Glow effect on arrow */}
            <motion.div
              className="absolute inset-0 blur-md"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-cyan-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
