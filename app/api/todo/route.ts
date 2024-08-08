import { getTodos } from "@/actions/todo/server.action";
import { NextResponse } from "next/server";

export const GET = async () => {
  const result = await getTodos();

  console.log("ping GET API income", result);
  return NextResponse.json({ ...result });
};
