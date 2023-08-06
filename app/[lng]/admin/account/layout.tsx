import { AccountList } from "#/components/admin/account/AccountList";
import BreadCrumb  from "#/components/common/BreadCrumb";
import SideNavItem from "#/components/common/SideNavItem";

import AccountFooter from "#/components/normal/AccountFooter";
import { adminSideBarItems } from "#/lib/webcontents/sideBar";
import { CommonLayoutProps } from "#/types/pageProp";
import clsx from "clsx";
import { t } from "i18next";
import Link from "next/link";

type AdminAccountLayoutProps = CommonLayoutProps & {
  item: React.ReactNode,
  list: React.ReactNode
}


export default async function AdminAccountPageLayout({
  children,
  item,
  list,
  params: { lng },
 
}: AdminAccountLayoutProps) {
  
  return (
    <div id="account-list-container" className="flex flex-row">
      {/*The list item*/}
      {/* <div className="space-y-8 bg-gradient-to-bl"> */}
      {/* </div> */}
      {children}
      {item}
    </div>
  )
}
