import React from 'react';
import { generateEmojiAvatar } from '../../utils/avatarUtils';

interface EmojiAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function EmojiAvatar({ name, size = 'md' }: EmojiAvatarProps) {
  const { emoji, bgColor } = generateEmojiAvatar(name);
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  };

  return (
    <div className={`${sizeClasses[size]} ${bgColor} rounded-full flex items-center justify-center`}>
      {emoji}
    </div>
  );
}