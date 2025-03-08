"use server";
import { createClient } from "@/lib/supabase";

export async function analyzeText(text: string) {
  const supabase = createClient();
  if (!text) {
    return { error: "Text input is required" };
  }

  try {
    const { data, error } = await supabase.functions.invoke("text-analysis", { body: { bookId: text } });
    return data;
  } catch (error: any) {
    console.error("Text Analysis Error:", error.message);
    return { error: error.message };
  }
}
