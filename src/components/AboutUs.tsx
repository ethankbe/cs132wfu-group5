import { motion } from "motion/react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function AboutUs() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: "Maria Santos",
      role: "Lead Data Scientist",
      specialization: "Statistical Analysis & Machine Learning",
      education: "MS Data Science, University of the Philippines",
      bio: "10+ years experience in statistical modeling and predictive analytics for public policy research.",
      color: "red",
      image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRhdGElMjBzY2llbnRpc3R8ZW58MXx8fHwxNzY0MjkwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Juan dela Cruz",
      role: "Research Analyst",
      specialization: "Economic Analysis & Data Visualization",
      education: "BS Statistics, Ateneo de Manila University",
      bio: "Expert in transforming complex datasets into compelling visual narratives for stakeholder communication.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjByZXNlYXJjaGVyfGVufDF8fHx8MTc2NDI5MDY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Sofia Reyes",
      role: "Data Engineer",
      specialization: "Data Processing & Database Management",
      education: "BS Computer Science, De La Salle University",
      bio: "Specializes in building scalable data pipelines and ensuring data quality across research projects.",
      color: "yellow",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVuZ2luZWVyfGVufDF8fHx8MTc2NDE3MDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-950/30 to-transparent" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-3xl"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-blue-400 uppercase tracking-[0.3em] text-xs">About Us</span>
          <h2 className="font-display text-6xl mt-6 mb-6 text-white tracking-tight">
            Research <span className="bg-gradient-to-r from-red-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A dedicated team of data scientists, economists, and researchers. Hover over each card to learn more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mb-20 relative"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyNTMyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team collaboration"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          {/* Decorative corner */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-red-400 rounded-full blur-2xl opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {team.map((member, index) => {
            const isHovered = hoveredMember === index;
            const colorMap = {
              red: { border: 'border-red-500/50', bg: 'bg-red-500/10', text: 'text-red-400' },
              blue: { border: 'border-blue-500/50', bg: 'bg-blue-500/10', text: 'text-blue-400' },
              yellow: { border: 'border-yellow-500/50', bg: 'bg-yellow-500/10', text: 'text-yellow-400' }
            };
            const colors = colorMap[member.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
                className="group relative"
              >
                <motion.div
                  className={`backdrop-blur-xl bg-white/5 border border-slate-800 rounded-xl overflow-hidden h-full transition-all cursor-pointer relative ${
                    isHovered ? colors.border : ''
                  }`}
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    rotate: isHovered ? (index % 2 === 0 ? 2 : -2) : 0,
                  }}
                  whileHover={{ y: -8 }}
                >
                  {/* Animated background on hover */}
                  {isHovered && (
                    <motion.div
                      className={`absolute inset-0 ${colors.bg}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-8">
                    <h3 className={`font-display text-3xl mb-2 text-white tracking-tight transition-colors ${
                      isHovered ? colors.text : ''
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`mb-6 text-lg ${colors.text}`}>{member.role}</p>
                    
                    <div className="space-y-3 text-slate-400">
                      <p><span className="text-slate-300 font-mono text-xs uppercase tracking-wider">Specialization:</span><br/>{member.specialization}</p>
                      <p><span className="text-slate-300 font-mono text-xs uppercase tracking-wider">Education:</span><br/>{member.education}</p>
                      
                      {/* Bio appears on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? 'auto' : 0,
                          marginTop: isHovered ? 12 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="pt-3 border-t border-slate-700 text-slate-300">
                          {member.bio}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0
                    }}
                  >
                    <ExternalLink className={`w-5 h-5 ${colors.text}`} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01, rotate: 0.5 }}
          className="backdrop-blur-xl bg-slate-900/50 border-2 border-slate-800 text-white rounded-2xl p-12"
        >
          <h3 className="font-display text-4xl mb-6 tracking-tight">Mission Statement</h3>
          <p className="text-xl text-slate-300 leading-relaxed mb-16">
            To leverage data science and statistical analysis to provide actionable insights on unemployment 
            and labor market dynamics in the Philippines, contributing to evidence-based policymaking and 
            sustainable economic development.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Rigor", desc: "State-of-the-art statistical methodologies", color: "red" },
              { title: "Collaboration", desc: "Working with stakeholders and communities", color: "blue" },
              { title: "Impact", desc: "Creating real-world policy solutions", color: "yellow" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="cursor-pointer"
              >
                <div className={`font-display text-5xl text-${item.color}-400 mb-3 tracking-tight`}>{item.title}</div>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 border-t border-slate-800">
            <h4 className="font-display text-2xl mb-6 tracking-tight">Contact</h4>
            <div className="flex gap-4 mb-6">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-xl bg-white/5 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/50 p-4 rounded-xl transition-all"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-xl bg-white/5 hover:bg-blue-500/10 border border-slate-800 hover:border-blue-500/50 p-4 rounded-xl transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-xl bg-white/5 hover:bg-yellow-500/10 border border-slate-800 hover:border-yellow-500/50 p-4 rounded-xl transition-all"
              >
                <Github className="w-5 h-5" />
              </motion.button>
            </div>
            <p className="font-mono text-slate-400">contact@unemploymentph.research</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
