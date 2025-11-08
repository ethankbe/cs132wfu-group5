import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { CheckCircle, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HypothesisTesting() {
  const educationData = [
    { level: "Elementary", unemployment: 8.2 },
    { level: "High School", unemployment: 6.5 },
    { level: "Vocational", unemployment: 4.8 },
    { level: "College", unemployment: 3.2 },
    { level: "Graduate", unemployment: 2.1 }
  ];

  const regionalData = [
    { region: "NCR", unemployment: 4.5 },
    { region: "CAR", unemployment: 5.2 },
    { region: "Region I", unemployment: 6.1 },
    { region: "Region III", unemployment: 5.8 },
    { region: "Region IV-A", unemployment: 5.3 },
    { region: "Region V", unemployment: 7.2 },
    { region: "Region VII", unemployment: 6.4 }
  ];

  const ageData = [
    { age: "15-24", rate: 12.4 },
    { age: "25-34", rate: 5.8 },
    { age: "35-44", rate: 3.2 },
    { age: "45-54", rate: 2.6 },
    { age: "55+", rate: 2.1 }
  ];

  const genderData = [
    { name: "Male", value: 4.8, fill: "#06B6D4" },
    { name: "Female", value: 5.6, fill: "#EC4899" }
  ];

  const testResults = [
    {
      id: "H₁",
      hypothesis: "Education and Unemployment",
      test: "Chi-Square Test",
      statistic: "χ² = 156.32",
      pValue: "p < 0.001",
      conclusion: "Strong negative correlation between education level and unemployment rate. Higher education significantly reduces unemployment likelihood.",
    },
    {
      id: "H₂",
      hypothesis: "Regional Disparities",
      test: "ANOVA",
      statistic: "F = 23.45",
      pValue: "p < 0.001",
      conclusion: "Significant differences exist across regions. NCR shows lowest unemployment (4.5%) while rural regions show higher rates.",
    },
    {
      id: "H₃",
      hypothesis: "Gender Differences",
      test: "Two-Sample t-Test",
      statistic: "t = 2.87",
      pValue: "p = 0.004",
      conclusion: "Females experience slightly higher unemployment (5.6%) compared to males (4.8%), with statistical significance.",
    },
    {
      id: "H₄",
      hypothesis: "Age Impact",
      test: "Chi-Square Test",
      statistic: "χ² = 198.76",
      pValue: "p < 0.001",
      conclusion: "Youth unemployment (15-24) is significantly higher at 12.4%, more than double the national average.",
    },
    {
      id: "H₅",
      hypothesis: "Urban vs Rural",
      test: "Two-Sample t-Test",
      statistic: "t = 3.21",
      pValue: "p = 0.002",
      conclusion: "Urban areas show lower unemployment rates due to better job opportunities and economic infrastructure.",
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-br from-slate-50 to-cyan-50/30 transform skew-x-12 origin-top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-orange-600 uppercase tracking-[0.3em] text-xs">Hypothesis Testing</span>
          <h2 className="font-display text-6xl mt-6 mb-6 text-slate-900 tracking-tight">Analysis & Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Rigorous statistical testing with <span className="font-mono text-orange-600">α = 0.05</span> significance level to validate research hypotheses.
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <h3 className="font-display text-xl text-slate-900 tracking-tight">Education vs Unemployment</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={educationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="level" angle={-45} textAnchor="end" height={100} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="unemployment" fill="#F97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="font-display text-xl text-slate-900 tracking-tight">Regional Unemployment</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="unemployment" fill="#A855F7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-amber-300 transition-all"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-amber-600" />
              <h3 className="font-display text-xl text-slate-900 tracking-tight">Age Group Analysis</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="age" tick={{ fill: '#64748b', fontSize: 12 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="rate" stroke="#F59E0B" strokeWidth={3} dot={{ r: 5, fill: '#F59E0B' }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-pink-300 transition-all"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-pink-600" />
              <h3 className="font-display text-xl text-slate-900 tracking-tight">Gender Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYyNDY4ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Data analysis"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Test Results */}
        <div className="mb-20">
          <h3 className="font-display text-4xl mb-12 text-slate-900 tracking-tight">Test Results Summary</h3>
          
          <div className="space-y-6">
            {testResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-2xl text-orange-600">{result.id}</span>
                      <h4 className="font-display text-xl text-slate-900 tracking-tight">{result.hypothesis}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="font-mono text-xs bg-slate-100 px-3 py-1.5 rounded text-slate-700">{result.test}</span>
                      <span className="font-mono text-xs bg-slate-100 px-3 py-1.5 rounded text-slate-700">{result.statistic}</span>
                      <span className="font-mono text-xs bg-slate-100 px-3 py-1.5 rounded text-slate-700">{result.pValue}</span>
                      <span className="font-mono text-xs bg-orange-100 px-3 py-1.5 rounded text-orange-700">Reject H₀</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {result.conclusion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white rounded-2xl p-12 shadow-2xl"
        >
          <h3 className="font-display text-4xl mb-8 tracking-tight">Key Findings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "All five hypotheses showed statistical significance, providing strong evidence for our alternative hypotheses.",
              "Education emerged as the strongest predictor of employment, with each level showing measurable improvement.",
              "Youth unemployment represents a critical issue requiring targeted policy interventions.",
              "Regional economic development programs are essential to address geographic disparities."
            ].map((finding, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="leading-relaxed text-lg">
                  {finding}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
