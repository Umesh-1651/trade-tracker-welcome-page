
import { PieChart, Calculator, Bell, Smartphone, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: "Portfolio Overview",
      description: "Get a comprehensive view of your entire portfolio with detailed breakdowns and visual charts.",
      gradient: "from-emerald-500 to-cyan-600"
    },
    {
      icon: Calculator,
      title: "P&L Calculator",
      description: "Automatically calculate your profits and losses with advanced analytics and tax reporting.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Set custom alerts for price movements, profit targets, and risk management thresholds.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your trading data anywhere with our responsive web app and mobile optimization.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Multi-Market Support",
      description: "Track trades across stocks, crypto, forex, and commodities all in one place.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Learn from other traders and share strategies with our growing community of investors.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Stock Images */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop" 
          alt="Stock trading" 
          className="absolute top-10 left-10 w-64 h-48 object-cover rounded-lg"
        />
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop" 
          alt="Trading workspace" 
          className="absolute bottom-10 right-10 w-64 h-48 object-cover rounded-lg"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
            Everything You Need to
            <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Master Trading
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you track, analyze, and optimize your trading performance like never before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg w-fit mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                <feature.icon className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section with Enhanced Animation */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 rounded-2xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-pulse">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using TradeTracker to improve their performance and maximize their profits.
            </p>
            <button className="bg-white text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
