'use client'
import { useEffect } from "react";
import { updateQRCode } from '#/lib/qrcode'
import { useTranslation } from "#/lib/i18n/client";
import Button from "#/components/common/Button";

export default function ConfirmDialog({lng, confirmAction = async () => {
  console.log("Confirm action")
}, closeAction = async () => {
  console.log("Close action")
}}:{  lng: string,desc?: string, confirmAction : () => Promise<boolean|void>,
  closeAction : () => Promise<boolean|void>
}) {
  
  // async function windowReady() {
    
  //   const favDialog = document.getElementById('favDialog') as HTMLDialogElement
     
     
  //   if (favDialog === null || favDialog.querySelector('#confirmBtn') === null) {
  //     throw new Error('No document find with id' + 'favDialog')
  //   }
  //   const confirmBtn = favDialog.querySelector('#confirmBtn')
    
  //   favDialog.open = false
  //   favDialog.showModal()
    
   
  //   // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
  //   favDialog.addEventListener('close', () => {
      
  //   })
  // }
  const {t} = useTranslation(lng, "dialog")
  useEffect( () => {
    (async () => {
       
      const favDialog = document.getElementById('favDialog') as HTMLDialogElement
     
     
      if (favDialog === null || favDialog.querySelector('#confirmBtn') === null) {
        throw new Error('No document find with id' + 'favDialog')
      }
      const confirmBtn = favDialog.querySelector('#confirmBtn') as HTMLButtonElement
      
      favDialog.open = false
      favDialog.showModal()
      
      confirmBtn.onclick = async () => {
      
        confirmAction()

      }
      // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
      favDialog.addEventListener('close', () => {
        closeAction()
        
      })
     
    })()
    // window.onload = windowReady
    return () => {
      //window.onload = null
    }
  }, [])
  
	return (
    <dialog id="favDialog">
      <form method="dialog">
        <p>
          Confirm the option
        </p>
        
        <div className="w-full flex">
          <Button id="confirmBtn" type="submit"className="flex-1 bg-slate-50">
            {t("Confirm")}
          </Button>
         
          <Button id="confirmBtn" value="bg-slate-50">
            {t("Cancel")}
          </Button>
        </div>
      </form>
    </dialog>
  )
}