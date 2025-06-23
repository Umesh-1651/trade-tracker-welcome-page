
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Track Your Trades
            <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Like a Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Monitor your portfolio, analyze performance, and make smarter trading decisions with our comprehensive trade tracking platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Real-time Analytics
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get instant insights into your trading performance with live charts and metrics.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Performance Tracking
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monitor your wins, losses, and overall portfolio performance over time.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Secure & Private
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Your trading data is encrypted and secure with bank-level security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
