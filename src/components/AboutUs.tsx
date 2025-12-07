import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutUs() {
  const team = [
    {
      name: "Ethan Kurt Espejo",
      bio: "A third-year UP Diliman BS Computer Science student with an interest in graphic and web design.",
      color: "red",
      image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRhdGElMjBzY2llbnRpc3R8ZW58MXx8fHwxNzY0MjkwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Raphael Felix",
      bio: "A UP Diliman BS Computer Science student with interests in artificial intelligence and software development. Currently a member of UP Association of Computer Science Majors (UP CURSOR).",
      color: "blue",
      image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjByZXNlYXJjaGVyfGVufDF8fHx8MTc2NDI5MDY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Miguel Guiang",
      bio: "A UP Diliman BS Computer Science student with interests in backend web development. Currently a member of UP Center of Student Innovations and a Junior Engineering Aide of UP Diliman CRS. ",
      color: "yellow",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVuZ2luZWVyfGVufDF8fHx8MTc2NDE3MDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-950/30 to-transparent" />
      
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-3xl"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/20 mb-8">
            <span className="text-blue-400 uppercase tracking-widest text-sm">About Us</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            Research Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team of researchers from Group 5 of CS 132 WFU aiming to contribute to <span className="text-blue-400 font-semibold">SDG 8: Decent Work and Economic Growth</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const colorMap = {
              red: { border: 'border-red-500/50', text: 'text-red-400' },
              blue: { border: 'border-blue-500/50', text: 'text-blue-400' },
              yellow: { border: 'border-yellow-500/50', text: 'text-yellow-400' }
            };
            const colors = colorMap[member.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col w-full">
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-display text-3xl mb-2 text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className={`text-lg ${colors.text}`}>{member.role}</p>
                    <p className="text-slate-400 mt-4 flex-1">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}