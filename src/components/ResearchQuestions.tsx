import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ResearchQuestions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questions = [
    {
      number: "01",
      question: "How does educational attainment affect unemployment rates in the Philippines?",
      description: "Examining the relationship between education levels and unemployment likelihood across demographic groups.",
      details: "We analyze data across five education levels (Elementary, High School, Vocational, College, Graduate) to understand how educational investment correlates with employment outcomes. Our Chi-Square analysis reveals strong statistical evidence (p < 0.001) of this relationship.",
    },
    {
      number: "02",
      question: "Are there significant regional disparities in unemployment rates?",
      description: "Analyzing unemployment patterns across 17 regions to identify geographic and economic factors.",
      details: "Using ANOVA methodology, we compare unemployment rates across all Philippine regions. NCR shows the lowest rate at 4.5%, while certain rural regions exceed 7%. This geographic variation highlights the need for region-specific interventions.",
    },
    {
      number: "03",
      question: "Does gender significantly influence employment opportunities?",
      description: "Investigating statistical differences in unemployment rates between male and female job seekers.",
      details: "Our two-sample t-test reveals females experience 5.6% unemployment compared to 4.8% for males. This 0.8 percentage point gap is statistically significant (p = 0.004), suggesting systemic barriers in the labor market.",
    },
    {
      number: "04",
      question: "What is the impact of age on unemployment vulnerability?",
      description: "Studying unemployment experiences across age groups, with focus on youth and older workers.",
      details: "Youth (15-24) face the highest unemployment at 12.4%—more than double the national average. This concentration highlights the critical need for youth employment programs and skills training initiatives.",
    },
    {
      number: "05",
      question: "How do urban and rural areas differ in employment opportunities?",
      description: "Comparing unemployment rates and job search patterns between urban and rural locations.",
      details: "Urban areas benefit from concentrated economic activity and infrastructure, resulting in lower unemployment. Rural areas face challenges including limited job diversity, seasonal employment, and geographic isolation from economic centers.",
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-orange-950/15 via-transparent to-transparent" />
      
      {/* Elegant floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/8 via-red-500/4 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/6 via-yellow-500/3 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-yellow-400 uppercase tracking-[0.4em] text-xs mb-6 block">Research Questions</span>
          <h2 className="font-display text-6xl mb-6 text-white tracking-tight">
            Core <span className="bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 bg-clip-text text-transparent">Inquiries</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Five fundamental questions that guide our investigation. Click to explore each in detail.
          </p>
        </motion.div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <motion.div
                  className={`relative border rounded-2xl overflow-hidden transition-all cursor-pointer ${
                    isExpanded 
                      ? 'border-yellow-500/40 bg-gradient-to-br from-yellow-500/5 via-blue-500/5 to-transparent shadow-2xl shadow-yellow-500/10' 
                      : 'border-slate-800/80 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:border-yellow-500/20 hover:shadow-lg backdrop-blur-xl'
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  whileHover={{ scale: isExpanded ? 1 : 1.005 }}
                >
                  {/* Subtle gradient overlay on hover */}
                  {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500/5 transition-all duration-500" />
                  )}
                  
                  <div className="flex gap-8 p-8 relative z-10">
                    <motion.div 
                      className={`font-mono text-6xl tracking-tighter transition-colors ${
                        isExpanded ? 'text-yellow-400' : 'text-slate-800 group-hover:text-yellow-500/50'
                      }`}
                      animate={{ scale: isExpanded ? 1.05 : 1 }}
                    >
                      {item.number}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={`font-display text-2xl mb-3 tracking-tight leading-tight transition-colors ${
                          isExpanded ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={`w-6 h-6 transition-colors ${
                            isExpanded ? 'text-yellow-400' : 'text-slate-600 group-hover:text-slate-400'
                          }`} />
                        </motion.div>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="pt-6 border-t border-yellow-500/20">
                              <p className="text-slate-300 leading-relaxed text-lg">
                                {item.details}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative p-12 bg-gradient-to-br from-yellow-500/5 via-red-500/5 to-transparent rounded-2xl border border-yellow-500/20 shadow-xl backdrop-blur-xl overflow-hidden"
          >
            {/* Subtle animated gradient */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
              style={{
                background: 'linear-gradient(45deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)',
                backgroundSize: '200% 200%'
              }}
            />
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl mb-4 text-white tracking-tight">Methodological Approach</h3>
              <p className="text-slate-400 leading-relaxed text-lg max-w-4xl">
                Each research question is addressed through rigorous statistical analysis, including descriptive 
                statistics, correlation analysis, and hypothesis testing. Our methodology ensures findings are 
                scientifically valid, reproducible, and actionable for policy development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}