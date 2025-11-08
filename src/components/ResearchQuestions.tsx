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
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border-4 border-amber-300 rounded-lg"
        animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full"
        animate={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-amber-600 uppercase tracking-[0.3em] text-xs">Research Questions</span>
          <h2 className="font-display text-6xl mt-6 mb-6 text-slate-900 tracking-tight">
            Core <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Inquiries</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Five fundamental questions that guide our investigation. Click to explore each in detail.
          </p>
        </motion.div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  layout
                  className={`border-2 rounded-2xl overflow-hidden transition-all cursor-pointer ${
                    isExpanded 
                      ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl' 
                      : 'border-slate-200 bg-white hover:border-amber-300 hover:shadow-lg'
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  whileHover={{ scale: isExpanded ? 1 : 1.01 }}
                >
                  <div className="flex gap-6 p-8">
                    <motion.div 
                      className={`font-mono text-6xl tracking-tighter transition-colors ${
                        isExpanded ? 'text-amber-500' : 'text-slate-200 group-hover:text-amber-400'
                      }`}
                      animate={{ scale: isExpanded ? 1.1 : 1 }}
                    >
                      {item.number}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={`font-display text-2xl mb-3 tracking-tight leading-tight transition-colors ${
                          isExpanded ? 'text-amber-700' : 'text-slate-900 group-hover:text-amber-600'
                        }`}>
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={`w-6 h-6 transition-colors ${
                            isExpanded ? 'text-amber-600' : 'text-slate-400'
                          }`} />
                        </motion.div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
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
                            <div className="pt-4 border-t border-amber-200">
                              <p className="text-slate-700 leading-relaxed text-lg">
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
          className="mt-20 relative"
        >
          <motion.div
            whileHover={{ rotate: -1, scale: 1.01 }}
            className="p-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 shadow-lg"
          >
            <h3 className="font-display text-3xl mb-4 text-slate-900 tracking-tight">Methodological Approach</h3>
            <p className="text-slate-700 leading-relaxed text-lg max-w-4xl">
              Each research question is addressed through rigorous statistical analysis, including descriptive 
              statistics, correlation analysis, and hypothesis testing. Our methodology ensures findings are 
              scientifically valid, reproducible, and actionable for policy development.
            </p>
          </motion.div>
          
          {/* Decorative accent */}
          <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-3xl opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
