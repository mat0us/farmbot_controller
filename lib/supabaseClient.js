import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ggqtbppuitdhyfpdqeyq.supabase.co'        // ← sem vlož reálnou URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncXRicHB1aXRkaHlmcGRxZXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwODA0NjAsImV4cCI6MjA2MzY1NjQ2MH0.k9GEL3oNHoFypPfcykVa-x6yHB4843nKkD0n4IxiHe8'                    // ← sem vlož svůj anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
