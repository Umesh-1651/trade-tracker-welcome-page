
import { useState } from 'react';
import { TrendingUp, Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name with Animation */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
              <TrendingUp className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-emerald-500 group-hover:to-green-500 group-hover:scale-105">
              TradeTracker
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              About
            </a>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-slate-600 dark:text-slate-300" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
              )}
            </button>

            {/* Login Button */}
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
