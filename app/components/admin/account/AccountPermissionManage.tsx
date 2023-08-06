'use client'
import { useTranslation } from "#/lib/i18n/client";
import { useApp } from "#/hooks/useApp";
import { getUser } from "#/lib/api/mongoService";
import { UserProfile } from "#/types/data";
import { BSON } from 'realm-web'
import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import useDataList from "#/hooks/useDataList";
import { FaStickyNote } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "#/components/common/Button";




type Account = {
  _id: BSON.ObjectID
  _userId: string
  role: 'globalAdmin' | 'customer' | 'enterprise' | 'regulatory'
  email: string,
  emailVerified: boolean
}
type RoleNameLabel = {
  [key in (Account["role"])]: string;
};
//map the role value in database to the value on the web page
const roleNameLabelMap : RoleNameLabel = {
	"globalAdmin" : "Admin(global)",
	"enterprise" : "Enterprise",
  "customer" : "Customer",
  "regulatory": "Regulatory"
}
type RoleList = keyof RoleNameLabel


const roleList = ["globalAdmin", "enterprise", "customer"]



export default function AccountPermissionManage({lng, id, userProfile}: {lng: string, id: string, userProfile?: UserProfile}){
  
  const {t} = useTranslation(lng, "common")
  
  const [loading, setLoading] = useState(true)
  const pathName = usePathname()
  //TODO consider the permission issue
  const catgorys = useDataList("Catgory")
  const currentProfileInfo = useRef<UserProfile>()
  const loginUser = useApp().currentUser
 
	useEffect(() => {

    if(loginUser){
      const { role } = loginUser.customData
      if(!(role as string).toLowerCase().endsWith("admin")) {
        alert("This component are not allowed for non-admin user")
        throw new Error("No admin permission")
      }
      console.log(catgorys)
      // (async () => {
      //   const { catgory } = await getByName("Catgory")
      //   console.log(catgory)
      // })()
      getUser(loginUser, { _id: new BSON.ObjectId(id) })
        .then((account) => (currentProfileInfo.current = account))
        .catch((error) => {
          throw new Error(error);
        })
        .finally(() => setLoading(false));
    }
  },[loginUser])

  
  return (
    <div
      id="account-profile-manage"
      className="flex flex-col flex-1 items-center rounded  border-b border-gray-800 max-w-md"
    >
      <div className="flex h-20 items-center lg:h-auto">
        <span className="flex-1 w-8">
          <p>{t("Email")}</p>
        </span>
        <div style={{ flex: 2 }} className="p-1">
          <input
            type="text"
            contentEditable={false}
            defaultValue={currentProfileInfo.current?.email}
            className="rounded"
          />
        </div>
      </div>
      <div className="flex h-20 items-center lg:h-auto">
        <span className="flex-1 w-8">
          <p>{t("Role")}</p>
        </span>
        <div style={{ flex: 2 }} className="p-1">
          <input
            type="text"
            contentEditable={false}
            defaultValue={currentProfileInfo.current?.role}
            className="rounded"
          />
        </div>
      </div>
      <div className="flex h-20 items-center  lg:h-auto">
        <span className="flex-1 w-8">
          <p>{t("Id")}</p>
        </span>
        <div style={{ flex: 2 }} className="p-1">
          <input
            type="text"
            defaultValue={currentProfileInfo.current?._userId}
          />
        </div>
      </div>
      <table className="overflow-x-scroll max-w">
        <thead>
          <tr>
            <th>{t("Type")}</th>
            <th>{t("Permission")}</th>
          </tr>
        </thead>
        <tbody>
          {loginUser?.customData.role === "enterprise" ? (
            <tr className="overflow-x-scroll">
              <th scope="row">
                <FaStickyNote className="w-4 inline-block" />
                {t("Catgory")}
              </th>
              <td>
                {catgorys?.map((catgory) => (
                  <>
                    <input type="checkbox" value={catgory.name}></input>
                    <label>{catgory.name}</label>
                    <br />
                  </>
                ))}
              </td>
              <td>
                <Link
                  href={
                    "./" + pathName.split("/").at(-1) + "/insert/permission"
                  }
                >
                  {t("assign")}
                </Link>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Button type="submit" className="rounded border p-2">
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
}

