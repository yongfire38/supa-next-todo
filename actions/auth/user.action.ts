import { createServerSideClient } from "@/lib/supabase";

export const getUser = async (serverComponent = false) => {
  const supabase = await createServerSideClient(serverComponent);
  const result = await supabase.auth.getUser();

  return result?.data?.user;
};

export const getProfileById = async ({
  serverComponent = false,
  userId = "",
}) => {
  const supabase = await createServerSideClient(serverComponent);
  const profile = await supabase.from("profiles").select("*").eq("id", userId);
  return profile?.data?.[0];
};
