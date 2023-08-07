import Link from "next/link";
import { useTranslation } from "./lib/i18n";
import { fallbackLng } from "./lib/i18n/settings";
import { BasePageProps } from "./types/pageProp";

export default async function DefaultRootPage({

  params
}: BasePageProps){
  const { t } = await useTranslation(fallbackLng)
  return <Link href={"./en"}>{t("Is this working?")}</Link>
}