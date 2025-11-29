import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Users, BarChart3 } from "lucide-react";

export function Introduction() {
  const highlights = [
    { icon: TrendingUp, text: "Advanced statistical analysis", color: "yellow" },
    { icon: Users, text: "Demographic segmentation", color: "red" },
    { icon: BarChart3, text: "Regional comparisons", color: "blue" }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
      
      {/* Subtle floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-red-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-20 items-start">
          {/* Text content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-yellow-400 uppercase tracking-[0.4em] text-xs">Introduction</span>
            </motion.div>
            
            <h2 className="font-display text-6xl mb-10 text-white tracking-tight leading-[1.1]">
              Understanding Labor Market{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                  Dynamics
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed mb-12">
              <p>
                Unemployment remains one of the most pressing socio-economic challenges in the Philippines, 
                directly impacting the livelihoods of millions of citizens and their families. A thorough 
                understanding of unemployment patterns is essential for developing effective policy interventions.
              </p>
              
              <p>
                This research employs rigorous statistical methodologies to analyze unemployment across multiple 
                dimensions—demographic characteristics, geographic regions, and temporal trends. Through hypothesis 
                testing and advanced analytical techniques, we aim to uncover actionable insights.
              </p>
            </div>

            {/* Refined highlight cards */}
            <div className="flex flex-wrap gap-3 mb-16">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const colorMap = {
                  yellow: { border: "border-yellow-500/30", bg: "from-yellow-500/10 to-transparent", text: "text-yellow-400", glow: "group-hover:shadow-yellow-500/20" },
                  red: { border: "border-red-500/30", bg: "from-red-500/10 to-transparent", text: "text-red-400", glow: "group-hover:shadow-red-500/20" },
                  blue: { border: "border-blue-500/30", bg: "from-blue-500/10 to-transparent", text: "text-blue-400", glow: "group-hover:shadow-blue-500/20" }
                };
                const colors = colorMap[item.color as keyof typeof colorMap];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group flex items-center gap-2 px-4 py-2.5 border ${colors.border} rounded-full bg-gradient-to-br ${colors.bg} backdrop-blur-xl cursor-pointer transition-all shadow-lg ${colors.glow}`}
                  >
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                    <span className={`text-sm ${colors.text}`}>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Cleaner metrics */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-800/50">
              {[
                { value: "25+", label: "Variables", color: "yellow" },
                { value: "6 Years", label: "Time Span", color: "red" },
                { value: "5", label: "Hypotheses", color: "blue" }
              ].map((metric, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }} 
                  className="cursor-pointer group"
                >
                  <div className={`font-mono text-5xl text-${metric.color}-400 mb-2 group-hover:text-${metric.color}-300 transition-colors`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Refined image with better effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664371354575-a776003a417d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pbGElMjBwaGlsaXBwaW5lcyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjI1ODM4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manila cityscape"
                  className="rounded-2xl w-full h-[600px] object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}