"use client";
import React from "react";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "@/app/(site)/hooks/useTodosController";

interface TodoContainerProps {
  oweUserId?: string;
}

const TodoContainer = ({ oweUserId }: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController(oweUserId);

  return (
    <div>
      <TodoList
        oweUserId={oweUserId}
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
