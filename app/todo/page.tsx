import { sleep } from "@/lib/utils";
import React from "react";
import ClientComponentTest from "./components/ClientComponentTest";
import { getTodoAction } from "@/actions/todo/server.action";

const Page = async () => {
  console.log(">> SSR start");

  const result = await getTodoAction();
  await sleep(1500);

  console.log(">> SSR end");

  return (
    <div>
      todo page {JSON.stringify(result)}
      <ClientComponentTest />
    </div>
  );
};

export default Page;
