// Environment configuration
const env = {
  firebase: {
    apiKey: 'AIzaSyDelQfrLAdfBAS8XJYgJtdKJiC58HWEFlQ',
    authDomain: 'circle-256.firebaseapp.com',
    projectId: 'circle-256',
    storageBucket: 'circle-256.firebasestorage.app',
    messagingSenderId: '477169156370',
    appId: '1:477169156370:web:482761f5d742e736c0b3cb',
    measurementId: 'G-9X36ESV38P'
  }
} as const;

// Type-safe config access
export type Config = typeof env;

// Validate required environment variables
Object.entries(env.firebase).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;