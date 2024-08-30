import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bmdubfmyhpyvhyvpbgku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtZHViZm15aHB5dmh5dnBiZ2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMTEzOTQsImV4cCI6MjAzODc4NzM5NH0.nfpy7-3d8NbzRW9vFgIsbpT1ZV6h_zMovhYdeMuWjAI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
