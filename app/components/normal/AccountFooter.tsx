"use client"
//import { useTranslation } from "#/lib/i18n/client";
import { useApp } from "#/hooks/useApp";
import { UserProfile } from "#/types/data";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { FaAdjust } from "react-icons/fa";



export default function AccountFooter({lng}: {lng: string}) {
  const realmApp = useApp()
	const [userData, setUserData] = useState<UserProfile | undefined>()
  const t = (src: string) => src
	//const { t } = useTranslation(lng)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
	const [dialogOpen, toggleDialogOpen] = useState(false)
  
  useEffect( () => {
    if(realmApp.currentUser === null){
      throw new Error("You should login to use this AccountFooter")
    }
    realmApp.currentUser.refreshAccessToken()
    setUserData( () => {
      setIsLoading(false)
      return realmApp.currentUser!.customData as UserProfile
    })
  }, [realmApp?.currentUser])

	return (
    <div className="flex items-center space-x-4 p-3.5 lg:px-5 lg:py-3">
       <Button 
        className='fixed w-auto right-2 bottom-8' 
        onClick={
          async () => {
            realmApp.currentUser?.logOut().then(
              () => router.push(`/${lng}`)
            ).catch(
              (error) => {
                throw error
            })
          }
        }>{t("Log out")}<FaAdjust className="h-8 inline"/></Button> 
      {/* <div className="text-sm text-gray-400"> */}
      { 
        isLoading ? <p className="font-extrabold">Loading...</p> :
        <>
          <span className="">
            <span className="mr-2 font-extrabold">{t('Email')}</span>
            <a
              className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              {userData!.email}
            </a>
          </span>
          <span>
            <span className="mr-2 font-extrabold">{t('Role')}</span>
            <a
              className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              {userData!.role}
            </a>
          </span>
        </>  
      }  
      
    </div>
  )
}