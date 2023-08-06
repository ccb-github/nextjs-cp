"use client"
import ConfirmDialog from "#/components/common/dialog/ConfirmDialog";
import { useRouter } from "next/navigation";


export default function ModelConfirmDialog({ params: {lng}}: {params: {lng: string}}) {
  console.log("Yes this dialog is rendered")
  const router = useRouter()
  return (
    <ConfirmDialog
      lng={lng}
      closeAction={async () => {
        router.back();
        return true;
      }}
      confirmAction={async () => {
        return false;
      }}
    />
  );
}