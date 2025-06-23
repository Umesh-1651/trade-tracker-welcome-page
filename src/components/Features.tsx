
import { PieChart, Calculator, Bell, Smartphone, Globe, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: PieChart,
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio analysis with AI-powered insights and real-time performance metrics."
    },
    {
      icon: Calculator,
      title: "P&L Calculator",
      description: "Advanced profit and loss calculations with automated tax reporting and optimization suggestions."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent notifications powered by machine learning to never miss important market movements."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Seamless experience across all devices with our progressive web application technology."
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Track and analyze trades across stocks, crypto, forex, and commodities worldwide."
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with professional traders and share strategies in our exclusive community platform."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Background Images */}
      <div className="absolute inset-0 opacity-3 dark:opacity-2">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop" 
          alt="Stock trading" 
          className="absolute top-10 left-10 w-64 h-48 object-cover rounded-2xl"
        />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
          alt="Trading workspace" 
          className="absolute bottom-10 right-10 w-64 h-48 object-cover rounded-2xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Everything you need
            <span className="block text-gray-500 dark:text-gray-400">
              to trade smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional-grade tools powered by artificial intelligence to help you make better trading decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:scale-105 transition-all duration-500 group"
            >
              <div className="bg-black dark:bg-white p-4 rounded-xl w-fit mb-6 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-black dark:bg-white rounded-3xl p-12 md:p-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6">
              Ready to get started?
            </h3>
            <p className="text-gray-300 dark:text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professional traders who trust TradeTracker for their portfolio management.
            </p>
            <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
