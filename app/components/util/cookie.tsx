import { cookies } from "next/headers";

export function getCookieByName(cookieName: string){
  return cookies().get(cookieName)?.value
}