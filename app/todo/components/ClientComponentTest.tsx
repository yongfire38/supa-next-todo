"use client";
import { getTodoAction } from "@/actions/todo/server.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("handleClick result", result);
  };

  return (
    <div>
      <button onClick={handleClick}>Test Server Actions</button>
    </div>
  );
};

export default ClientComponentTest;
