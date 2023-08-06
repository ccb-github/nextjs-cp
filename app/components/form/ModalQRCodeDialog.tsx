'use client'
import { useEffect, useRef } from "react";
import { updateQRCode } from '#/lib/qrcode'
import { useTranslation } from "#/lib/i18n/client";
import { close } from "inspector";
import Button from "../common/Button";

export default function ModalQRCodeDialog(props: {
  src: string;
  lng: string;
  closeAction: () => Promise<any>
  desc?: string;
}) {
  const { closeAction } = props
  async function windowReady() {
    
    alert("Window ready called");
    //   const qrCodeDialog = document.getElementById('qrCodeDialog') as HTMLDialogElement

    //   if (qrCodeDialog === null || qrCodeDialog.querySelector('#downloadBtn') === null) {
    //     throw new Error('No document find with id' + 'qrCodeDialog')
    //   }
    //   const confirmBtn = qrCodeDialog.querySelector('#downloadBtn')

    //   qrCodeDialog.open = false
    //   qrCodeDialog.showModal()

    //   updateQRCode(props.src)
    //   // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    //   qrCodeDialog.addEventListener('close', () => {

    //   })
  }

  const { t } = useTranslation(props.lng, "dialog");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const qrContainerRef = useRef<HTMLDivElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
    // qrCodeDialog.addEventListener('close', () => {
    //   console.log(`Dialog close event`)
    // })
    //dialogRef.current.open = false
    dialogRef.current?.showModal();
    updateQRCode(props.src, qrContainerRef.current!);
    window.onload = windowReady;
  }, []);
  /**
 * Initize the download link with the qrcode in canvas tag
 * With the principle <a href={data} download={qrcode.png}>
 * 
*/
function download() {
  const canvasEl = dialogRef.current!.querySelector('canvas');
  let data = canvasEl!.toDataURL('image/png');

  downloadLinkRef.current!.setAttribute('href', data);
  downloadLinkRef.current!.setAttribute('download', 'qrcode.png');
  //downloadEl.style.display = 'inline-block';
}
  return (
    <>
     
      <dialog
        id="qrCodeDialog"
        ref={dialogRef}
        open={false}
        onClose={() => {
          //This will execute on dialog close
          closeAction()
        }}
      >
        <form method="dialog">
          <h2>{t("Download the qrcode image for your need")}</h2>
          <div id="qrcode" ref={qrContainerRef}></div>
         
          <div className="w-full flex">
            <button
              type="submit"
              id="downloadBtn"
              className="flex-1"
              value="default"
            >
              <a>{t("Confirm")}</a>
            </button>
            <Button className="flex-1">
              {t("Cancel")}
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}