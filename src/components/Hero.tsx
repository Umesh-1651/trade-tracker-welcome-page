
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Background Images */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop" 
          alt="Trading background" 
          className="absolute top-10 left-10 w-80 h-60 object-cover rounded-2xl"
        />
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop" 
          alt="Stock charts" 
          className="absolute bottom-10 right-10 w-80 h-60 object-cover rounded-2xl"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-8 leading-tight">
            The future of
            <span className="block text-gray-500 dark:text-gray-400">
              trade tracking
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Advanced AI-powered analytics for smarter trading decisions. Track, analyze, and optimize your portfolio like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:scale-105 transition-all duration-300">
              <div className="bg-black dark:bg-white p-4 rounded-xl w-fit mx-auto mb-6">
                <BarChart3 className="h-6 w-6 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Real-time Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant insights with advanced AI-powered market analysis and performance tracking.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:scale-105 transition-all duration-300">
              <div className="bg-black dark:bg-white p-4 rounded-xl w-fit mx-auto mb-6">
                <TrendingUp className="h-6 w-6 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Smart Predictions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leverage machine learning algorithms to predict market trends and optimize your strategy.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:scale-105 transition-all duration-300">
              <div className="bg-black dark:bg-white p-4 rounded-xl w-fit mx-auto mb-6">
                <Shield className="h-6 w-6 text-white dark:text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bank-level encryption and security protocols to keep your trading data completely safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
