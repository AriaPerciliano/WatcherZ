import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://knqzqperjebhxhfpkajn.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtucXpxcGVyamViaHhoZnBrYWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNTQ1NDQsImV4cCI6MTk4MzczMDU0NH0.mOoNS6SEa4s1ARoQkXITUJX8hj2hBYDC05uOFAfFhpA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}