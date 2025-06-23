
import { useState, useEffect } from 'react';
import { Shield, ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

interface OTPVerificationFormProps {
  onNext: () => void;
  onPrev: () => void;
  onDataChange: (data: any) => void;
}

const OTPVerificationForm = ({ onNext, onPrev, onDataChange }: OTPVerificationFormProps) => {
  const [emailOTP, setEmailOTP] = useState('');
  const [mobileOTP, setMobileOTP] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!emailOTP || emailOTP.length !== 6) {
      newErrors.emailOTP = 'Please enter 6-digit email OTP';
    }
    if (!mobileOTP || mobileOTP.length !== 6) {
      newErrors.mobileOTP = 'Please enter 6-digit mobile OTP';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleResendOTP = async () => {
    setCanResend(false);
    setTimer(300);
    // Simulate resending OTP
    console.log('Resending OTP...');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onDataChange({ emailOTP, mobileOTP });
      onNext();
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          OTP Verification
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We've sent verification codes to your email and mobile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Email OTP */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Email Verification
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter the 6-digit code sent to your email
            </p>
          </div>
          
          <div className="flex justify-center mb-4">
            <InputOTP
              maxLength={6}
              value={emailOTP}
              onChange={(value) => {
                setEmailOTP(value);
                if (errors.emailOTP) {
                  setErrors((prev: any) => ({ ...prev, emailOTP: '' }));
                }
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          {errors.emailOTP && <p className="text-red-500 text-sm text-center">{errors.emailOTP}</p>}
        </div>

        {/* Mobile OTP */}
        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Mobile Verification
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter the 6-digit code sent to your mobile
            </p>
          </div>
          
          <div className="flex justify-center mb-4">
            <InputOTP
              maxLength={6}
              value={mobileOTP}
              onChange={(value) => {
                setMobileOTP(value);
                if (errors.mobileOTP) {
                  setErrors((prev: any) => ({ ...prev, mobileOTP: '' }));
                }
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          {errors.mobileOTP && <p className="text-red-500 text-sm text-center">{errors.mobileOTP}</p>}
        </div>

        {/* Timer and Resend */}
        <div className="text-center">
          {timer > 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              Resend OTP in {formatTime(timer)}
            </p>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={handleResendOTP}
              disabled={!canResend}
              className="text-blue-600"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend OTP
            </Button>
          )}
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button type="submit">
            Verify & Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerificationForm;
