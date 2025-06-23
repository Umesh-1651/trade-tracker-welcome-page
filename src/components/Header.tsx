
import { useState } from 'react';
import { TrendingUp, Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-black dark:bg-white p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <TrendingUp className="h-5 w-5 text-white dark:text-black" />
            </div>
            <span className="text-xl font-semibold text-black dark:text-white transition-all duration-300 group-hover:scale-105">
              TradeTracker
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm">
              About
            </a>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Login/Register Buttons */}
            <div className="flex items-center space-x-2">
              <a
                href="/register"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium px-3 py-2"
              >
                Register
              </a>
              <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-800/20">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 dark:text-gray-400 text-sm">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-400 text-sm">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 text-sm">
                About
              </a>
              <div className="pt-4 border-t border-gray-200/20 dark:border-gray-800/20">
                <a href="/register" className="block text-gray-600 dark:text-gray-400 text-sm mb-2">
                  Register
                </a>
                <button className="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium">
                  Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
