
import { PieChart, Calculator, Bell, Smartphone, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: "Portfolio Overview",
      description: "Get a comprehensive view of your entire portfolio with detailed breakdowns and visual charts."
    },
    {
      icon: Calculator,
      title: "P&L Calculator",
      description: "Automatically calculate your profits and losses with advanced analytics and tax reporting."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Set custom alerts for price movements, profit targets, and risk management thresholds."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your trading data anywhere with our responsive web app and mobile optimization."
    },
    {
      icon: Globe,
      title: "Multi-Market Support",
      description: "Track trades across stocks, crypto, forex, and commodities all in one place."
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Learn from other traders and share strategies with our growing community of investors."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
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
              className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg w-fit mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Trading?
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using TradeTracker to improve their performance and maximize their profits.
            </p>
            <button className="bg-white text-green-600 hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
