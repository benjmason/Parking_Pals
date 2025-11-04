<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

  // REPLACE with your real values from Supabase → Project Settings → API
  const SUPABASE_URL = 'https://objauqyapbcgetfvnmbm.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iamF1cXlhcGJjZ2V0ZnZubWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMTAyOTYsImV4cCI6MjA3Nzc4NjI5Nn0.2I0lO98cq9kLBmyKkOr5maVNaUHKvGv3biYt-NF2JcY';

  window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
</script>