import { CommonLayoutProps } from "#/types/pageProp";

import AccountFooter from "#/components/normal/AccountFooter";
import BreadCrumb from "#/components/common/BreadCrumb";
import { enterPriseSideBarItems } from "#/lib/webcontents/sideBar";
import SideNavItem from "#/components/common/SideNavItem";
import Link from "next/link";
import SideBarToggleButton from "../SideBarToggleButton";
import Script from "next/script";
import { useTranslation } from "#/lib/i18n";




export default async function CustomerRootLayout({
  children,
  params: { lng },
}: CommonLayoutProps) {
  const {t} = await  useTranslation(lng)
  return (
    <>
        {/* <the nav sidebar */}
      <div
        id="admin-nav"
        className="fixed top-0 z-10 flex w-full flex-col border-b 
                border-gray-800 bg-black 
                  lg:bottom-0 lg:z-auto lg:w-72   lg:border-r lg:border-gray-800"
      >
        <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
          <Link
            href={`/${lng}`}
            id="backToHomeLink"
            className="group flex w-full items-center space-x-2.5"
            
          >
            {/* <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
              Admin
             
            </div> */}

            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              {t`Admin`}
            </h3>
          </Link>
        </div>
        <SideBarToggleButton/>
        <Script id={"toggle-button"}>
          {`
              document.querySelector('#sidebar-toggle').onclick =  async (event) =>{
                console.log('Event handler')
                document.querySelector('nav').classList.toggle("sidebar-open")
              }
          `}
          
        </Script>
        {/* <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
        </button> */}
        
        <div
          className={"overflow-y-auto lg:static lg:block"}
        >
          <nav id="side-nav" className="hidden">
            {enterPriseSideBarItems.map((sideBarItem) => {
              return (
                <SideNavItem
                  lng={lng}
                  name={t(`sideBar.${sideBarItem.name}`)}
          
                  link={
                    sideBarItem.link ? `/${lng}/${sideBarItem.link}` : undefined
                  }
                  description={sideBarItem.description}
                  close={
                    async () => {
                      "use server"
                      return false
                  }}
                  key={sideBarItem.name}
                  items={sideBarItem.items}
                />
              )
            })}
          </nav>
        </div>
      </div>

      <div className="flex h-full flex-col lg:pl-72">
        <BreadCrumb className="flex-grow-0" lng={lng}/>

        <div
          id="app-root-container"
          className="overflow-y-scroll flex-grow rounded-lg p-2 
			           shadow-lg shadow-black/20"
        >
          {children}
        </div>

        <div className="flex-grow-0 rounded-lg" id="sign">
          <AccountFooter lng={lng}/>
        </div>
      </div>
    </>
  )
}