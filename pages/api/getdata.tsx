import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "postgresql://postgres:Uqp6SV74PBJ8lzP4@db.xfijsoegltqwqnffmngf.supabase.co:5432/postgres";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmaWpzb2VnbHRxd3FuZmZtbmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0OTE5MDEsImV4cCI6MjAxNTA2NzkwMX0.YdmPa-ZR3BcbmuaFGj_S4RC7zSKpbLdSM9vNOZ6dIh4";

const supabase = createClient(supabaseUrl, supabaseKey);

