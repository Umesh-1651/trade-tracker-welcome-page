
import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop" 
          alt="Trading background" 
          className="absolute top-0 left-0 w-1/3 h-1/2 object-cover rounded-lg"
        />
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop" 
          alt="Stock charts" 
          className="absolute top-1/4 right-0 w-1/3 h-1/2 object-cover rounded-lg"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in">
            Track Your Trades
            <span className="block bg-gradient-to-r from-emerald-400 via-green-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              Like a Pro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed animate-fade-in">
            Monitor your portfolio, analyze performance, and make smarter trading decisions with our comprehensive trade tracking platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <button className="bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 hover:from-emerald-600 hover:via-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-bounce flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-emerald-400 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights with Bright Colors */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-emerald-200 dark:border-emerald-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-3 rounded-lg w-fit mx-auto mb-4 animate-pulse">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Real-time Analytics
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get instant insights into your trading performance with live charts and metrics.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-green-200 dark:border-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-r from-emerald-400 to-cyan-600 p-3 rounded-lg w-fit mx-auto mb-4 animate-pulse">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Performance Tracking
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monitor your wins, losses, and overall portfolio performance over time.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-pink-200 dark:border-pink-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-lg w-fit mx-auto mb-4 animate-pulse">
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
