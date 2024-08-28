import {
  createTodos,
  deleteTodosSoft,
  getTodosByUserId,
  searchTodos,
  updateTodos,
} from "@/actions/todo/server.action";
import { Database } from "@/types/supabase";
import { useCallback, useEffect, useState } from "react";

type TodoDto = Database["public"]["Tables"]["todos_with_rls"]["Row"];

const useTodosController = (oweUserId = "") => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>();

  const onGetTodos = useCallback(async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodosByUserId(oweUserId);
      if (resultTodos) {
        setTodos(resultTodos);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [oweUserId]);

  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  // 비어 있는 todo 생성
  const onCreateEmptyTodos = async () => {
    await createTodos("");
    await onGetTodos();
  };

  // todo 업데이트
  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodos(id, content);
    await onGetTodos();
  };

  //todo 삭제
  const onDeleteTodos = async (id: number) => {
    await deleteTodosSoft(id);
    await onGetTodos();
  };

  //todo 검색
  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const todoResult = await searchTodos(terms);
      if (todoResult) setTodos(todoResult);
    } else {
      await onGetTodos();
    }
  };

  return {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  };
};

export default useTodosController;
