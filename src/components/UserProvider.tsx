"use client";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/auth-js";
import { useState, useEffect, createContext, useContext } from "react";

const SessionContext = createContext<Session | null>(null);
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  async function getUser() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error(error);
      return;
    }
    setSession(data.session ?? null);
  }
  useEffect(() => {
    getUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
export const useSession = () => useContext(SessionContext);
