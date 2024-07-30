"use server";

import { createServerSideClient } from "@/lib/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  return result.data;
};

// todoList 가져오기 + getById
export const getTodosById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

// todoList 가져오기 + search
export const searchTodos = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);

  return result.data;
};

// todoList 추가
export const createTodos = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .insert([{ content }])
    .select();

  return result.data;
};

// todoList 수정
export const updateTodos = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList 삭제 (soft delete)
export const deleteTodosSoft = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      updated_at: new Date().toISOString(),
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList 삭제 (hard delete)
/*
export const deleteTodosHard = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .delete()
    .eq("id", id)
    .select();

  return result.data;
};
*/
