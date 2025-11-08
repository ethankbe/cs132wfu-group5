import { motion } from "motion/react";
import { X, Check, Zap } from "lucide-react";
import { useState } from "react";

export function Hypotheses() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hypotheses = [
    {
      id: "H₁",
      null: "There is no significant relationship between education level and unemployment rate.",
      alternative: "Higher education levels are associated with lower unemployment rates.",
    },
    {
      id: "H₂",
      null: "There is no significant difference in unemployment rates across different regions.",
      alternative: "Unemployment rates differ significantly across regions of the Philippines.",
    },
    {
      id: "H₃",
      null: "Gender has no significant effect on unemployment rates.",
      alternative: "There is a significant difference in unemployment rates between genders.",
    },
    {
      id: "H₄",
      null: "Age has no significant impact on unemployment rates.",
      alternative: "Youth (15-24) experience significantly higher unemployment rates than other age groups.",
    },
    {
      id: "H₅",
      null: "There is no significant difference in unemployment between urban and rural areas.",
      alternative: "Urban areas have different unemployment patterns compared to rural areas.",
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500/30"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-purple-400 uppercase tracking-[0.3em] text-xs">Hypotheses</span>
          </div>
          <h2 className="font-display text-6xl mb-6 text-white tracking-tight">
            Statistical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hypotheses</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Testable hypotheses formulated to systematically investigate factors affecting unemployment. 
            Hover to highlight the alternative hypothesis.
          </p>
        </motion.div>

        <div className="space-y-12">
          {hypotheses.map((hypothesis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.span 
                  className="font-display text-5xl group-hover:text-purple-300 transition-colors"
                  animate={{ 
                    color: hoveredIndex === index ? '#D8B4FE' : '#A78BFA',
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                >
                  {hypothesis.id}
                </motion.span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? 60 : 0 }}
                  className="h-0.5 bg-gradient-to-r from-purple-400 to-transparent"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="backdrop-blur-xl bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-4 transition-all relative overflow-hidden"
                  animate={{
                    opacity: hoveredIndex === index ? 0.5 : 1,
                    scale: hoveredIndex === index ? 0.98 : 1,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-500" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Null Hypothesis (H₀)</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {hypothesis.null}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="backdrop-blur-xl bg-purple-500/5 border border-purple-500/30 rounded-xl p-8 space-y-4 transition-all relative overflow-hidden cursor-pointer"
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    backgroundColor: hoveredIndex === index ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.05)',
                  }}
                  whileHover={{ rotate: 1 }}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center"
                      animate={{ 
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                        backgroundColor: hoveredIndex === index ? 'rgba(168, 85, 247, 0.3)' : 'rgba(168, 85, 247, 0.2)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <span className="font-mono text-xs text-purple-400 uppercase tracking-wider">Alternative Hypothesis (H₁)</span>
                  </div>
                  <p className="text-white leading-relaxed relative z-10">
                    {hypothesis.alternative}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01, rotate: -0.5 }}
          className="mt-24 backdrop-blur-xl bg-slate-900/50 border-2 border-purple-500/30 text-white rounded-2xl p-12 relative overflow-hidden"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'linear-gradient(45deg, #A78BFA 0%, #EC4899 100%)',
                'linear-gradient(90deg, #EC4899 0%, #A78BFA 100%)',
                'linear-gradient(135deg, #A78BFA 0%, #EC4899 100%)',
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl mb-4 tracking-tight">Testing Protocol</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              All hypotheses are tested using a significance level of <span className="font-mono text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded">α = 0.05</span>. We employ appropriate 
              statistical tests including Chi-Square tests, ANOVA, and t-tests to ensure robust and 
              reliable conclusions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
