import { adminMainPanels } from "#/lib/webcontents/mainPanel";
import Link from "next/link";
import { useTranslation } from "#/lib/i18n";
import { NavItem } from "#/types/webContent";
import { UserCircleIcon } from "@heroicons/react/outline";
import QRCodeImg from "#/components/qrcode/QRCodeImg";


type PageParams = {
	lng: string
}

export default async function AdminHomePage({params}: {params: PageParams}) {
  const { lng } = params   
  const { t } = await useTranslation(lng, 'admin')
 
 
 
  return (
    <>
      {adminMainPanels.map((section) => (
        <div key={section.name} className="space-y-5">
          {/* <div className="text-xl font-semibold uppercase tracking-wider">
            {t(`mainPanel.${section.name}`)}
          </div> */}
          
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="flex flex-row items-start rounded-lg">
              <UserCircleIcon className="w-24" />
              <section className="flex-grow">
                <div className="p-4 text-left">
                  <p>Users</p>
                </div>
                <div className="p-4 pt-0 text-left">
                  <p className="font-bold text-lg">{56}</p>
                </div>
              </section>
            </div>
            {section.items.map((item: NavItem) => (
              <Link
                href={`/${lng}/admin/${item.link}`}
                key={item.name}
                className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
              >
                <div className="font-medium text-gray-200 group-hover:text-gray-50">
                  {t(`mainpanel.${item.name}`)}
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
      {/* <section>
        
        <QRCodeImg src="https://cn.bing.com"/>
      </section> */}
    </>
  );
}