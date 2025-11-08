import { motion } from "motion/react";
import { Database, Calendar, Users, MapPin, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

export function Dataset() {
  const [activeTab, setActiveTab] = useState("all");

  const datasetFeatures = [
    { icon: Users, label: "Sample Size", value: "15,000+", unit: "records", color: "purple" },
    { icon: Calendar, label: "Time Period", value: "2018", unit: "to 2024", color: "cyan" },
    { icon: MapPin, label: "Coverage", value: "17", unit: "regions", color: "orange" },
    { icon: Database, label: "Variables", value: "25+", unit: "features", color: "pink" }
  ];

  const categoricalVars = [
    "Gender", "Education Level", "Region", "Employment Status", 
    "Industry Sector", "Urban/Rural", "Marital Status"
  ];

  const numericalVars = [
    "Age", "Years of Experience", "Monthly Income", 
    "Job Search Duration", "Household Size"
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-pink-500/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-purple-500/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          rotate: 360
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-purple-400 uppercase tracking-[0.3em] text-xs">Dataset Description</span>
          </div>
          <h2 className="font-display text-6xl mb-6 text-white tracking-tight">
            Data <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Foundation</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Comprehensive labor force survey data from the Philippine Statistics Authority (PSA), 
            enriched with socio-demographic variables for multidimensional analysis.
          </p>
        </motion.div>

        {/* Feature grid with playful hover effects */}
        <div className="grid md:grid-cols-4 gap-4 mb-24">
          {datasetFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const colorMap = {
              purple: { border: 'border-purple-500/50', text: 'text-purple-400', bg: 'from-purple-500/10' },
              cyan: { border: 'border-cyan-500/50', text: 'text-cyan-400', bg: 'from-cyan-500/10' },
              orange: { border: 'border-orange-500/50', text: 'text-orange-400', bg: 'from-orange-500/10' },
              pink: { border: 'border-pink-500/50', text: 'text-pink-400', bg: 'from-pink-500/10' }
            };
            const colors = colorMap[feature.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: index % 2 === 0 ? 3 : -3,
                  y: -10
                }}
                className="group cursor-pointer"
              >
                <div className={`backdrop-blur-xl bg-gradient-to-br ${colors.bg} to-transparent border border-slate-800 hover:${colors.border} rounded-xl p-8 h-full transition-all`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-10 h-10 ${colors.text} mb-6`} />
                  </motion.div>
                  <div className="font-mono text-5xl text-white mb-2 tracking-tight">{feature.value}</div>
                  <div className={`text-sm ${colors.text} mb-1`}>{feature.unit}</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider">{feature.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Variables section with better interactivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Database className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h3 className="font-display text-4xl text-white tracking-tight">Key Variables</h3>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-10 bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800">
              <TabsTrigger value="all" className="font-mono text-xs data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-400 data-[state=active]:scale-105 transition-all">
                ALL
              </TabsTrigger>
              <TabsTrigger value="categorical" className="font-mono text-xs data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-400 data-[state=active]:scale-105 transition-all">
                CATEGORICAL
              </TabsTrigger>
              <TabsTrigger value="numerical" className="font-mono text-xs data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-400 data-[state=active]:scale-105 transition-all">
                NUMERICAL
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-4 gap-3">
                {[...categoricalVars, ...numericalVars].map((variable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2,
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      borderColor: 'rgba(168, 85, 247, 0.3)'
                    }}
                    className="backdrop-blur-md bg-white/5 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 transition-all text-sm cursor-pointer"
                  >
                    {variable}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="categorical">
              <div className="grid md:grid-cols-4 gap-3">
                {categoricalVars.map((variable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="backdrop-blur-md bg-purple-500/10 border-2 border-purple-500/30 rounded-lg px-4 py-3 text-purple-200 text-sm cursor-pointer"
                  >
                    {variable}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="numerical">
              <div className="grid md:grid-cols-4 gap-3">
                {numericalVars.map((variable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="backdrop-blur-md bg-slate-800/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-200 text-sm cursor-pointer"
                  >
                    {variable}
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            className="mt-10 pt-10 border-t border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-slate-500 font-mono">
              <span className="text-white bg-purple-500/20 px-2 py-1 rounded">SOURCE:</span> Philippine Statistics Authority (PSA) Labor Force Survey
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
