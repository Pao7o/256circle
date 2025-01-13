import React from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  liked: boolean;
  likes: number;
  onLike: (e: React.MouseEvent) => void;
}

export default function LikeButton({ liked, likes, onLike }: LikeButtonProps) {
  return (
    <button
      onClick={onLike}
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
        liked
          ? 'bg-rose-500/20 text-rose-300'
          : 'bg-gray-500/10 text-gray-400 hover:bg-rose-500/10 hover:text-rose-300'
      }`}
    >
      <Heart
        className={`w-4 h-4 ${liked ? 'fill-rose-300' : ''}`}
      />
      <span>{likes}</span>
    </button>
  );
}