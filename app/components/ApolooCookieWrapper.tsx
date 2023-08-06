'use client'
import { setCookie } from "nookies";

import { useEffect } from "react";
import { useApp } from "#/hooks/useApp";
export default function ApolloCookieWrapper({children}: {children: React.ReactNode}) {
  const app = useApp();
  // Reset the user access token in cookies on a regular interval
  useEffect(() => {
    const user = app?.currentUser;
   
    console.log(`App wrapper useEffect`)
    if (user) {
     
      setCookie(null, "accessToken", user.accessToken!);
      // Refresh token before session expires
      const TWENTY_MIN_MS = 20000;
      const resetAccessToken = setInterval(async () => {
        user
          .refreshAccessToken()
          .then(() => {
            console.log(`The token at ${new Date().toLocaleDateString()} ${user.accessToken}`);
            setCookie(null, "accessToken", user.accessToken!);
          })
          .catch((error) => {
            throw error;
          });
      }, TWENTY_MIN_MS);
      // Clear interval setting access token whenever component unmounts or
      // there's a change in user.
      return () => clearInterval(resetAccessToken);
    }
  }, [app?.currentUser]);
  return (
    <>
     {children}
    </>
  );
}
