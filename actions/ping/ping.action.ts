"use server";

export const pingAction = async () => {
  console.log("Ping action income");
  return "pong";
};
