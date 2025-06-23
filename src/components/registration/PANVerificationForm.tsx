
import { useState } from 'react';
import { FileText, ArrowLeft, ArrowRight, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface PANVerificationFormProps {
  onNext: () => void;
  onPrev: () => void;
  onDataChange: (data: any) => void;
}

const PANVerificationForm = ({ onNext, onPrev, onDataChange }: PANVerificationFormProps) => {
  const [formData, setFormData] = useState({
    panNumber: '',
    panHolderName: '',
    panDocument: null as File | null
  });

  const [errors, setErrors] = useState<any>({});
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, panDocument: file }));
      if (errors.panDocument) {
        setErrors((prev: any) => ({ ...prev, panDocument: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.panNumber.trim()) newErrors.panNumber = 'PAN number is required';
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
      newErrors.panNumber = 'Invalid PAN format (e.g., ABCDE1234F)';
    }
    if (!formData.panHolderName.trim()) newErrors.panHolderName = 'PAN holder name is required';
    if (!formData.panDocument) newErrors.panDocument = 'PAN document is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerifyPAN = async () => {
    if (!validateForm()) return;
    
    setIsVerifying(true);
    // Simulate PAN verification API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsVerifying(false);
    
    // In real implementation, you would verify PAN details here
    console.log('PAN verification completed');
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
        <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          PAN Verification
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Verify your PAN details for compliance
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="panNumber">PAN Number</Label>
          <Input
            id="panNumber"
            value={formData.panNumber}
            onChange={(e) => handleChange('panNumber', e.target.value.toUpperCase())}
            className={errors.panNumber ? 'border-red-500' : ''}
            placeholder="ABCDE1234F"
            maxLength={10}
          />
          {errors.panNumber && <p className="text-red-500 text-sm mt-1">{errors.panNumber}</p>}
        </div>

        <div>
          <Label htmlFor="panHolderName">Name as per PAN</Label>
          <Input
            id="panHolderName"
            value={formData.panHolderName}
            onChange={(e) => handleChange('panHolderName', e.target.value)}
            className={errors.panHolderName ? 'border-red-500' : ''}
          />
          {errors.panHolderName && <p className="text-red-500 text-sm mt-1">{errors.panHolderName}</p>}
        </div>

        <div>
          <Label htmlFor="panDocument">Upload PAN Card</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-600">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600 dark:text-gray-400">
                <label
                  htmlFor="panDocument"
                  className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                >
                  <span>Upload a file</span>
                  <input
                    id="panDocument"
                    name="panDocument"
                    type="file"
                    className="sr-only"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, PDF up to 10MB</p>
              {formData.panDocument && (
                <p className="text-sm text-green-600">{formData.panDocument.name}</p>
              )}
            </div>
          </div>
          {errors.panDocument && <p className="text-red-500 text-sm mt-1">{errors.panDocument}</p>}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <Button
            type="button"
            onClick={handleVerifyPAN}
            disabled={isVerifying}
            className="w-full mb-4"
            variant="outline"
          >
            {isVerifying ? 'Verifying...' : 'Verify PAN Details'}
          </Button>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Click to verify your PAN details before proceeding
          </p>
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

export default PANVerificationForm;
