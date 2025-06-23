
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface RegistrationCompleteProps {
  formData: any;
}

const RegistrationComplete = ({ formData }: RegistrationCompleteProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Registration Complete!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Welcome to TradeTracker! Your account has been successfully created and verified.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-2xl mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          What's Next?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-blue-600 font-semibold mb-2">1. Explore Dashboard</div>
            <p className="text-gray-600 dark:text-gray-400">
              Access your personalized trading dashboard
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-green-600 font-semibold mb-2">2. Fund Account</div>
            <p className="text-gray-600 dark:text-gray-400">
              Add funds to start trading immediately
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-purple-600 font-semibold mb-2">3. Start Trading</div>
            <p className="text-gray-600 dark:text-gray-400">
              Begin your smart trading journey
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={handleGoHome} size="lg" className="w-full md:w-auto">
          <Home className="mr-2 h-5 w-5" />
          Go to Dashboard
        </Button>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You will receive a confirmation email shortly
        </p>
      </div>
    </div>
  );
};

export default RegistrationComplete;
