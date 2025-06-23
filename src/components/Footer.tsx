
import { TrendingUp, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TradeTracker</span>
            </div>
            <p className="text-slate-400 mb-4">
              The ultimate platform for tracking and analyzing your trading performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2024 TradeTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
