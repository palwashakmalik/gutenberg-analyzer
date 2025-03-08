"use server";
import { createClient } from "@/lib/supabase";
export async function fetchBook(id: string) {

  try {
    const supabase = createClient();
    const { data, error } = await supabase.functions.invoke("book-content", { body: { book_id: id } });
    return data;
  } catch (error: any) {
    return { error: error.message };
  }
}
