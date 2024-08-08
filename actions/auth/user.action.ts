import { createServerSideClient } from "@/lib/supabase";

export const getUser = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase.auth.getUser();

  return result?.data?.user;
};
