import { stringToNumber } from './stringUtils';

const emojiList = ['👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🚀', '👩‍🚀', '🧑‍🚀', '👨‍🔬', '👩‍🔬', '🧑‍🔬', '👨‍💼', '👩‍💼', '🧑‍💼'];
const bgColors = [
  'bg-violet-500/20',
  'bg-blue-500/20',
  'bg-emerald-500/20',
  'bg-orange-500/20',
  'bg-pink-500/20',
  'bg-cyan-500/20',
  'bg-purple-500/20',
  'bg-rose-500/20'
];

export const generateEmojiAvatar = (name: string) => {
  const hash = stringToNumber(name);
  const emoji = emojiList[hash % emojiList.length];
  const bgColor = bgColors[hash % bgColors.length];
  
  return { emoji, bgColor };
};