'use client'

import { SchemaName } from "#/types/schema";
import { useEffect } from "react";
import RelatedObjectSelect from "./RelatedObjSelect";

export default function RelatedItemDialog(props:{ itemType: SchemaName}) {
  async function windowReady() {
    //@ts-ignore
    console.log(typeof this)
  }
  useEffect( () => {
    (async () => { 
      const favDialog = document.getElementById('favDialog') as HTMLDialogElement
      
      if (favDialog === null || favDialog.querySelector('#downloadBtn') === null) {
        throw new Error('No document find with id' + 'favDialog')
      }
      const confirmBtn = favDialog.querySelector('#downloadBtn')
      
      favDialog.open = false
      favDialog.showModal()

      
      // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
      favDialog.addEventListener('close', () => {
        alert("Downloading the image")
      })
     
    })()
    window.onload = windowReady
    return () => {
      window.onload = null
    }
  }, [])
  
	return (
    <dialog id="favDialog">
      <form method="dialog">
        <RelatedObjectSelect 
          objectType={props.itemType} 
          name={props.itemType}
          linked={false}
        />
        <div className="w-full flex">
          <button id="downloadBtn" className="flex-1" value="default">
            Confirm
          </button>
          <button value="cancel" className="flex-1">
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  )
}