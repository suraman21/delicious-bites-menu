// supabase-config.js - Replace with your actual credentials
const SUPABASE_CONFIG = {
    url: 'https://umupbrhhjjnbkscyacmn.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtdXBicmhoampuYmtzY3lhY21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzcwNTAsImV4cCI6MjA3NzE1MzA1MH0.lxMiEsGgK9VpUzcrjUSaw6ZvLK7uOtTz4S2_fSnJWOM'
};

// Initialize Supabase
const supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

