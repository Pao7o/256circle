interface ColorScheme {
  gradientText: string;
  borderColor: string;
  skillsBg: string;
  skillsText: string;
  iconColor: string;
}

const colorSchemes: Record<string, ColorScheme> = {
  'E-commerce': {
    gradientText: 'bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/50',
    skillsBg: 'bg-emerald-500/10',
    skillsText: 'text-emerald-300',
    iconColor: 'text-emerald-400'
  },
  'SaaS': {
    gradientText: 'bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent',
    borderColor: 'border-blue-500/20 hover:border-blue-500/50',
    skillsBg: 'bg-blue-500/10',
    skillsText: 'text-blue-300',
    iconColor: 'text-blue-400'
  },
  'Digital Marketing': {
    gradientText: 'bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent',
    borderColor: 'border-pink-500/20 hover:border-pink-500/50',
    skillsBg: 'bg-pink-500/10',
    skillsText: 'text-pink-300',
    iconColor: 'text-pink-400'
  },
  'Mobile App': {
    gradientText: 'bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent',
    borderColor: 'border-orange-500/20 hover:border-orange-500/50',
    skillsBg: 'bg-orange-500/10',
    skillsText: 'text-orange-300',
    iconColor: 'text-orange-400'
  },
  'Web Development': {
    gradientText: 'bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent',
    borderColor: 'border-indigo-500/20 hover:border-indigo-500/50',
    skillsBg: 'bg-indigo-500/10',
    skillsText: 'text-indigo-300',
    iconColor: 'text-indigo-400'
  },
  'Blockchain': {
    gradientText: 'bg-gradient-to-r from-cyan-500 to-cyan-300 bg-clip-text text-transparent',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/50',
    skillsBg: 'bg-cyan-500/10',
    skillsText: 'text-cyan-300',
    iconColor: 'text-cyan-400'
  },
  'AI/ML': {
    gradientText: 'bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent',
    borderColor: 'border-purple-500/20 hover:border-purple-500/50',
    skillsBg: 'bg-purple-500/10',
    skillsText: 'text-purple-300',
    iconColor: 'text-purple-400'
  },
  'Content Creation': {
    gradientText: 'bg-gradient-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent',
    borderColor: 'border-rose-500/20 hover:border-rose-500/50',
    skillsBg: 'bg-rose-500/10',
    skillsText: 'text-rose-300',
    iconColor: 'text-rose-400'
  },
  'Others': {
    gradientText: 'bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent',
    borderColor: 'border-gray-500/20 hover:border-gray-500/50',
    skillsBg: 'bg-gray-500/10',
    skillsText: 'text-gray-300',
    iconColor: 'text-gray-400'
  }
};

export const getProjectCardColor = (category: string): ColorScheme => {
  return colorSchemes[category] || {
    gradientText: 'bg-gradient-to-r from-violet-500 to-violet-300 bg-clip-text text-transparent',
    borderColor: 'border-violet-500/20 hover:border-violet-500/50',
    skillsBg: 'bg-violet-500/10',
    skillsText: 'text-violet-300',
    iconColor: 'text-violet-400'
  };
};