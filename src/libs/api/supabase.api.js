import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_HMM_SUPABASE_URL;
console.log(`🚀 - supabase.api.js:4 - supabaseUrl:`, supabaseUrl);
const supabaseKey = import.meta.env.VITE_HMM_SUPABASE_ANON_KEY;
console.log(`🚀 - supabase.api.js:6 - supabaseKey:`, supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
