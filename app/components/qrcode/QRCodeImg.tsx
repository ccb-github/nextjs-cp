'use client'
import { useEffect, useRef } from "react";
import { Trans } from "react-i18next";
import { updateQRCode } from '#/lib/qrcode'
import Image from "next/image";

export default function QRCodeImg({src, desc, id}:{ src: string, desc?: string, id?: string}) {
  const windowReady =  () => {
    console.log("Window ready", src)
    updateQRCode(src, qrContainerRef.current!);
    qrImgRef.current!.alt = desc || `A qrcode contain data ${desc}`
    return () => {"This is real window ready"}
  } 
  const qrContainerRef = useRef<HTMLDivElement>(null)
  const qrImgRef = useRef<HTMLImageElement>(null)
  const containerId = id || "qrcode"
  //Default id is qrcode
 
 
  useEffect( () => { 
   
    //document ? alert('Document exists') : null
    window  ? window.onload = windowReady() : null
    return () => {
      window.onload = null
    }
  }, [src])
  
	return (
    <div id={containerId} ref={qrContainerRef} className="flex items-center">
     <Image 
       ref={qrImgRef}
       alt={""} width={30} height={30}
       src={"https://chinatrace.org/barcode/gensvg?type=ean13&msg=697560240206&fmt=png&hrsize=5pt&hrfont=OCR-B&qz=0.2cm&wf=1&mw=0.17mm&height=1cm"}
     />
    </div>
      
   
  )
}