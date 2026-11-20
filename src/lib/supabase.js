import { createClient } from '@supabase/supabase-js';

// Supabase publishable keys are designed to be used in browser applications.
// Environment variables can override these defaults in local/deployment builds.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lpzubglxwbikdrbqjvhb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gjJCdoAfXYc90PvRZ9RBaA_9jLNF5mA';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  : { auth: { getSession: async () => ({ data: { session: null } }), onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }), signInWithPassword: async () => ({ error: new Error('Supabase belum dikonfigurasi.') }), signUp: async () => ({ error: new Error('Supabase belum dikonfigurasi.') }), signOut: async () => ({}) } };
