"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";

const AuthUI = () => {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = useCallback(async () => {
    const result = await supabase.auth.getUser();
    console.log(result.data.user);
    if (result?.data?.user) {
      setUser(result?.data?.user);
    }
  }, [supabase]);

  const handleLogOut = async () => {
    supabase.auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  if (!isMount) return null;

  return (
    <section className="w-full p-10">
      <div>{user ? `로그인 됨 ${user?.email}` : "로그아웃"}</div>
      <>
        {user && (
          <button onClick={handleLogOut} className="border-2 border-black">
            로그아웃
          </button>
        )}
      </>
      <div className="mx-auto max-w-[500px]">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_TEST}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
};

export default AuthUI;
