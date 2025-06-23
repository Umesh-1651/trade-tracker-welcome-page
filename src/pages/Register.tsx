
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import PersonalDetailsForm from '../components/registration/PersonalDetailsForm';
import BankDetailsForm from '../components/registration/BankDetailsForm';
import PANVerificationForm from '../components/registration/PANVerificationForm';
import OTPVerificationForm from '../components/registration/OTPVerificationForm';
import RegistrationComplete from '../components/registration/RegistrationComplete';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    bankDetails: {},
    panDetails: {},
    otpVerification: {}
  });

  const steps = [
    { id: 1, title: 'Personal Details', completed: false },
    { id: 2, title: 'Bank Details', completed: false },
    { id: 3, title: 'PAN Verification', completed: false },
    { id: 4, title: 'OTP Verification', completed: false },
    { id: 5, title: 'Complete', completed: false }
  ];

  const updateFormData = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof prev], ...data }
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm onNext={nextStep} onDataChange={(data) => updateFormData('personalDetails', data)} />;
      case 2:
        return <BankDetailsForm onNext={nextStep} onPrev={prevStep} onDataChange={(data) => updateFormData('bankDetails', data)} />;
      case 3:
        return <PANVerificationForm onNext={nextStep} onPrev={prevStep} onDataChange={(data) => updateFormData('panDetails', data)} />;
      case 4:
        return <OTPVerificationForm onNext={nextStep} onPrev={prevStep} onDataChange={(data) => updateFormData('otpVerification', data)} />;
      case 5:
        return <RegistrationComplete formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Join TradeTracker
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete your registration to start trading smarter
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep === step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : currentStep > step.id
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'bg-white border-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {renderCurrentStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
