import React from 'react';
import { CreditCard, Plus } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: string;
  name: string;
  lastFour?: string;
  isDefault: boolean;
}

export default function PaymentMethods() {
  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'bank',
      name: 'Chase Bank',
      lastFour: '4567',
      isDefault: true
    },
    {
      id: '2',
      type: 'paypal',
      name: 'PayPal',
      isDefault: false
    }
  ];

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 bg-black/20 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-violet-400" />
              <div>
                <p className="font-medium">{method.name}</p>
                {method.lastFour && (
                  <p className="text-sm text-gray-400">****{method.lastFour}</p>
                )}
              </div>
            </div>
            {method.isDefault && (
              <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">
                Default
              </span>
            )}
          </div>
        ))}
        <button className="w-full button-primary flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add Payment Method
        </button>
      </div>
    </div>
  );
}