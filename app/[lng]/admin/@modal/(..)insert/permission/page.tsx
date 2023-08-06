'use client'
import Button from "#/components/common/Button";
import { useTranslation } from "#/lib/i18n/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PermissionDialog({ params: {lng}}: {params: {lng: string}}) {
  console.log("This dialog is rendered")
  const { t } = useTranslation(lng)
  const router = useRouter()
  useEffect( () => {
    //@ts-ignore
    (window.permissionDialog).showModal()
  })
  return (
    <dialog id="permissionDialog">
      <form method="post">
        <div className="w-full flex">
          <Button
            id="confirmBtn"
            type="submit"
            className="flex-1 bg-slate-50"
            onClick={async () => {
              router.back();
            }}
          >
            {t("Confirm")}
          </Button>

          <Button id="cancelBtn" className="flex-1 bg-slate-50">
            {t("Cancel")}
          </Button>
        </div>
      </form>
    </dialog>
  );
}