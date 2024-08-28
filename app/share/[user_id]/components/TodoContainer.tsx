"use client";
import React from "react";
import TodoList from "@/components/ui/TodoList";
import useTodosController from "@/app/share/[user_id]/hooks/useTodosController";

interface TodoContainerProps {
  sharedUserFullName?: string;
  oweUserId?: string;
}

const TodoContainer = ({
  sharedUserFullName,
  oweUserId,
}: TodoContainerProps) => {
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
        sharedUserFullName={sharedUserFullName}
        oweUserId={oweUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={true}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
