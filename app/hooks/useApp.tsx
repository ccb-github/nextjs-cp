'use client'
import { useEffect, useState } from "react";
import * as Realm from "realm-web";
export function useApp() {
  if(process.env.NEXT_PUBLIC_APP_ID === undefined) {
    throw new Error("Missing NEXT_PUBLIC_APP_ID env varaiable, look up .env.local dir")
  }
  const [app] = useState<Realm.App>(Realm.getApp(process.env.NEXT_PUBLIC_APP_ID));
  // Run in useEffect so that App is not created in server-side environment
  
  return app;
}