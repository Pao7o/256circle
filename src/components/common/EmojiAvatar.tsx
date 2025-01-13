import React from 'react';
import { stringToNumber } from '../../utils/stringUtils';

interface EmojiAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const emojiList = ['👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🚀', '👩‍🚀', '🧑‍🚀', '👨‍🔬', '👩‍🔬', '🧑‍🔬', '👨‍💼', '👩‍💼', '🧑‍💼'];

export default function EmojiAvatar({ name, size = 'md' }: EmojiAvatarProps) {
  const hash = stringToNumber(name);
  const emoji = emojiList[hash % emojiList.length];
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-10 h-10 text-xl',
    lg: 'w-16 h-16 text-3xl'
  };

  return (
    <div className={`${sizeClasses[size]} bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0`}>
      {emoji}
    </div>
  );
}