import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Users, BarChart3 } from "lucide-react";

export function Introduction() {
  const highlights = [
    { icon: TrendingUp, text: "Advanced statistical analysis", color: "orange" },
    { icon: Users, text: "Demographic segmentation", color: "purple" },
    { icon: BarChart3, text: "Regional comparisons", color: "cyan" }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Playful shapes */}
      <motion.div
        className="absolute top-40 right-10 w-32 h-32 border-4 border-orange-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-purple-100 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Text content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="mb-6">
              <span className="font-mono text-orange-600 uppercase tracking-[0.3em] text-xs">Introduction</span>
            </div>
            
            <h2 className="font-display text-6xl mb-8 text-slate-900 tracking-tight leading-tight">
              Understanding Labor Market{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Dynamics
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
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
              
              <p>
                Our analysis examines the key factors contributing to unemployment, identifies regional disparities, 
                and evaluates how demographic variables influence employment outcomes in the Philippine labor market.
              </p>
            </div>

            {/* Creative highlight cards */}
            <div className="flex flex-wrap gap-4 mt-12">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const colorMap = {
                  orange: "border-orange-200 bg-orange-50 text-orange-700",
                  purple: "border-purple-200 bg-purple-50 text-purple-700",
                  cyan: "border-cyan-200 bg-cyan-50 text-cyan-700"
                };
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className={`flex items-center gap-2 px-4 py-3 border-2 rounded-full ${colorMap[item.color as keyof typeof colorMap]} cursor-pointer`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Key metrics with hover effects */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-200">
              <motion.div whileHover={{ y: -5 }} className="cursor-pointer">
                <div className="font-mono text-4xl text-orange-600 mb-2">25+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Variables</div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="cursor-pointer">
                <div className="font-mono text-4xl text-purple-600 mb-2">6 Years</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Time Span</div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="cursor-pointer">
                <div className="font-mono text-4xl text-cyan-600 mb-2">5</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Hypotheses</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image with tilt effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ rotate: 2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664371354575-a776003a417d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pbGElMjBwaGlsaXBwaW5lcyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjI1ODM4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manila cityscape"
                className="rounded-2xl w-full h-[600px] object-cover shadow-2xl"
              />
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-2xl opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
