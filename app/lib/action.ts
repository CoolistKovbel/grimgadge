// -
"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./iteonSessoin";
import { redirect } from "next/navigation";

// User session
export const getSession = async () => {
    const cookieStore: any = cookies();
    const session = await getIronSession<SessionData>(
    cookieStore,
      sessionOptions
    );
  
    if (!session.isLoggedIn) {
      session.isLoggedIn = defaultSession.isLoggedIn;
    }
  
    return session;
};
  
//   logout
export const logout = async () => {
const session = await getSession();
session.destroy();
redirect("/");
};

// user login
// Create login


// user register
export const registerUser = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  try {
    console.log(data);
    // Finish register...

    

    return {
      status: "success",
      payload: "you suck",
    };
  } catch (error) {
    return {
      status: "err",
      payload: error,
    };
  }
};
