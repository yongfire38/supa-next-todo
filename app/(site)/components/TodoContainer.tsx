"use client";
import React from "react";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "@/app/(site)/hooks/useTodosController";

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
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
