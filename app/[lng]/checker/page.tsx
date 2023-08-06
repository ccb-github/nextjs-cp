import { BasePageProps } from '#/types/pageProp';

import { usePathname } from 'next/navigation';


import Link from 'next/link';
import { useTranslation } from '#/lib/i18n';
import { NavItem } from '#/types/webContent';


export default async function CheckerPage({ params: {lng}}: BasePageProps) {
  const pathName = usePathname()
  const { t } = await useTranslation(lng)
  
  return (
    <div className="space-y-4">
      {checkerMainPanelItems.map((section) => (
          <div key={section.name} className="space-y-5">
            <div className="text-xl font-semibold uppercase tracking-wider text-gray-400">
              {t(section.name)}
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {section.items.map((item) => (
                <Link
                  href={`${pathName ? pathName : ''}/${item.link}`}
                  key={item.name}
                  className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <div
                    className="font-medium text-gray-200 group-hover:text-gray-50"
                  >
                    {t(item.name)}
                  </div>

                  {item.description ? (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {t(item.description)}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        ))
      }
      

    </div>
  );
}

const checkerMainPanelItems: { name: string; items: NavItem[] }[] = [	
  {
    name: 'Operation Panel',
    items: [
      {
        name: 'Product info enter',
        link: './',
        description: 'Insert new check record',
      },
      {
        name: 'Grouped Layouts',
        link: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Streaming with Suspense',
        link: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
    ],
  }
 
]