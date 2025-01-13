import { useCurrencyStore } from '../stores/currencyStore';

export const formatCurrency = (amount: number): string => {
  const { currency } = useCurrencyStore.getState();
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }).format(amount);
};