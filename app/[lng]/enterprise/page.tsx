import { useTranslation } from "#/lib/i18n";
import { enterpriseMainPanels } from "#/lib/webcontents/mainPanel";
import { BasePageProps } from "#/types/pageProp";
import { NavItem } from "#/types/webContent";
import Link from "next/link";
const catgoryList = ["Tablet, Phone, Desktop"]

export default async function Page({ params: { lng } }: BasePageProps) {
  const { t } = await useTranslation(lng, "enterprise")
  return (
    <>
      {enterpriseMainPanels.map((section) => (
        <div key={section.name} className="space-y-5">
          <div className="text-xl font-semibold uppercase tracking-wider text-gray-400">
            {t(`mainPanel.${section.name}`)}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {section.items.map((item: NavItem) => (
              <Link
                href={`/${lng}/admin/${item.link}`}
                key={item.name}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
              >
                <div className="font-medium text-gray-200 group-hover:text-gray-50">
                  {t(`mainPanel.${item.name}`)}
                </div>
                {item.description ? (
                  <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                    {t(`mainPanel.${item.description}`)}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}