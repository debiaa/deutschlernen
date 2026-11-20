import { createClient } from '@supabase/supabase-js';

// Use the configured URL only when it is a valid HTTP(S) URL.
// This prevents a stale/placeholder Vercel environment variable from blanking the app.
const fallbackUrl = 'https://lpzubglxwbikdrbqjvhb.supabase.co';
const configuredUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const isValidHttpUrl = (value) => {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
};
const supabaseUrl = isValidHttpUrl(configuredUrl) ? configuredUrl : fallbackUrl;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || 'sb_publishable_gjJCdoAfXYc90PvRZ9RBaA_9jLNF5mA';

export const isSupabaseConfigured = isValidHttpUrl(supabaseUrl) && Boolean(supabaseAnonKey);
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
