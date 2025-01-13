// Environment configuration
const env = {
  supabase: {
    url: 'https://gijsuflycpbylijgumka.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpanN1Zmx5Y3BieWxpamd1bWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4ODk5MDAsImV4cCI6MjA1MTQ2NTkwMH0.yYGdull8oid_6vONfaBuqu0UvgPWRU2oO4ZFPvxEFfM'
  }
} as const;

// Type-safe config access
export type Config = typeof env;

// Validate required environment variables
Object.entries(env.supabase).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;