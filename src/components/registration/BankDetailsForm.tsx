
import { useState } from 'react';
import { CreditCard, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface BankDetailsFormProps {
  onNext: () => void;
  onPrev: () => void;
  onDataChange: (data: any) => void;
}

const BankDetailsForm = ({ onNext, onPrev, onDataChange }: BankDetailsFormProps) => {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: ''
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.accountHolderName.trim()) newErrors.accountHolderName = 'Account holder name is required';
    if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
    if (!formData.confirmAccountNumber.trim()) newErrors.confirmAccountNumber = 'Please confirm account number';
    else if (formData.accountNumber !== formData.confirmAccountNumber) {
      newErrors.confirmAccountNumber = 'Account numbers do not match';
    }
    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required';
    else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode)) {
      newErrors.ifscCode = 'Invalid IFSC code format';
    }
    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
    if (!formData.branchName.trim()) newErrors.branchName = 'Branch name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onDataChange(formData);
      onNext();
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <CreditCard className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Bank Account Details
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Add your bank account for secure transactions
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="accountHolderName">Account Holder Name</Label>
          <Input
            id="accountHolderName"
            value={formData.accountHolderName}
            onChange={(e) => handleChange('accountHolderName', e.target.value)}
            className={errors.accountHolderName ? 'border-red-500' : ''}
          />
          {errors.accountHolderName && <p className="text-red-500 text-sm mt-1">{errors.accountHolderName}</p>}
        </div>

        <div>
          <Label htmlFor="accountNumber">Account Number</Label>
          <Input
            id="accountNumber"
            value={formData.accountNumber}
            onChange={(e) => handleChange('accountNumber', e.target.value)}
            className={errors.accountNumber ? 'border-red-500' : ''}
          />
          {errors.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>}
        </div>

        <div>
          <Label htmlFor="confirmAccountNumber">Confirm Account Number</Label>
          <Input
            id="confirmAccountNumber"
            value={formData.confirmAccountNumber}
            onChange={(e) => handleChange('confirmAccountNumber', e.target.value)}
            className={errors.confirmAccountNumber ? 'border-red-500' : ''}
          />
          {errors.confirmAccountNumber && <p className="text-red-500 text-sm mt-1">{errors.confirmAccountNumber}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="ifscCode">IFSC Code</Label>
            <Input
              id="ifscCode"
              value={formData.ifscCode}
              onChange={(e) => handleChange('ifscCode', e.target.value.toUpperCase())}
              className={errors.ifscCode ? 'border-red-500' : ''}
              placeholder="e.g., SBIN0001234"
            />
            {errors.ifscCode && <p className="text-red-500 text-sm mt-1">{errors.ifscCode}</p>}
          </div>
          <div>
            <Label htmlFor="bankName">Bank Name</Label>
            <Input
              id="bankName"
              value={formData.bankName}
              onChange={(e) => handleChange('bankName', e.target.value)}
              className={errors.bankName ? 'border-red-500' : ''}
            />
            {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="branchName">Branch Name</Label>
          <Input
            id="branchName"
            value={formData.branchName}
            onChange={(e) => handleChange('branchName', e.target.value)}
            className={errors.branchName ? 'border-red-500' : ''}
          />
          {errors.branchName && <p className="text-red-500 text-sm mt-1">{errors.branchName}</p>}
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onPrev}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button type="submit">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BankDetailsForm;
