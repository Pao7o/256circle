import React, { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import BackToDashboard from '../../components/common/BackToDashboard';
import { formatCurrency } from '../../utils/formatters';

interface WithdrawalMethod {
  id: string;
  name: string;
  processingTime: string;
  fee: number;
  minAmount: number;
}

export default function WithdrawalPage() {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [step, setStep] = useState(1);

  const availableBalance = 5249.50;
  
  const withdrawalMethods: WithdrawalMethod[] = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      processingTime: '2-3 business days',
      fee: 0,
      minAmount: 50
    },
    {
      id: 'paypal',
      name: 'PayPal',
      processingTime: 'Instant',
      fee: 2.9,
      minAmount: 1
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirm = () => {
    // Handle withdrawal confirmation
    console.log('Withdrawal confirmed');
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <BackToDashboard />
        
        <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8">
          <h1 className="text-2xl font-bold gradient-text mb-6">Withdraw Funds</h1>
          
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Available Balance
                </label>
                <p className="text-2xl font-bold">{formatCurrency(availableBalance)}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Withdrawal Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-black/30 border border-violet-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-violet-500"
                  placeholder="Enter amount"
                  min="1"
                  max={availableBalance}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Withdrawal Method
                </label>
                <div className="space-y-4">
                  {withdrawalMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`block p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedMethod === method.id
                          ? 'border-violet-500 bg-violet-500/10'
                          : 'border-violet-500/20 bg-black/30 hover:border-violet-500/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="withdrawalMethod"
                            value={method.id}
                            checked={selectedMethod === method.id}
                            onChange={(e) => setSelectedMethod(e.target.value)}
                            className="sr-only"
                            required
                          />
                          <span className="font-medium">{method.name}</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          Fee: {method.fee}%
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-gray-400">
                        Processing time: {method.processingTime}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full button-primary flex items-center justify-center gap-2 group"
              >
                Continue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-400 font-medium">Confirm Withdrawal</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Please review the details below carefully before confirming.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Amount</span>
                  <span className="font-medium">{formatCurrency(Number(amount))}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Method</span>
                  <span className="font-medium">
                    {withdrawalMethods.find(m => m.id === selectedMethod)?.name}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Fee</span>
                  <span className="font-medium">
                    {formatCurrency(Number(amount) * (withdrawalMethods.find(m => m.id === selectedMethod)?.fee || 0) / 100)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">You'll receive</span>
                  <span className="font-medium text-lg">
                    {formatCurrency(Number(amount) * (1 - (withdrawalMethods.find(m => m.id === selectedMethod)?.fee || 0) / 100))}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleConfirm}
                  className="flex-1 button-primary"
                >
                  Confirm Withdrawal
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-violet-500/50 hover:bg-violet-500/10 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}