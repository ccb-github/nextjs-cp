import Link from "next/link";
import { useTranslation } from "./lib/i18n";
import { fallbackLng, languages } from "./lib/i18n/settings";
import { BasePageProps } from "./types/pageProp";

export default async function DefaultRootPage({
  params
}: BasePageProps){
  const { t } = await useTranslation(fallbackLng)
  return(
    <main className="flex flex-col justify-center"> 
      <select name="language">
        {
          languages.map(
            lang => 
              <option value={lang} key={lang}>
                {lang}
              </option>
          )
        }
      </select>
      <Link href={"./en"}>{t("Go to home page")}</Link>
    </main>
  )
}