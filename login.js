// login.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://rvdnbylaiyvfdkbfhaey.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2ZG5ieWxhaXl2ZmRrYmZoYWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTgzMjEsImV4cCI6MjA2NjQzNDMyMX0.t2oLPBBp5d8RVNQIFGJenLH6Z7tHrKt0NxEj5rvtHqU';
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorBox = document.getElementById('error-message');

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    errorBox.textContent = 'Login failed. Check your credentials.';
  } else {
    window.location.href = 'https://salmon-farm-dashboard-29e8vfxjkl67v9wlzhcnbc.streamlit.app/';
  }
});
