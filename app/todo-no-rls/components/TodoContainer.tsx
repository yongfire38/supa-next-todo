"use client";
import React from "react";
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onDeleteTodos,
    onSearchTodos,
  } = useTodosController();

  return <div>TodoContainer</div>;
};

export default TodoContainer;
