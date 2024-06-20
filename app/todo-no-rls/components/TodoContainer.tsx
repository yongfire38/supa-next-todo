"use client";
import React from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName="test User"
        oweUserId="test"
        loading={loading}
        todoListData={todos}
      />
    </div>
  );
};

export default TodoContainer;
