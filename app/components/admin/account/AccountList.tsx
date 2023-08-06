'use client'

import { useTranslation } from "#/lib/i18n/client";
import { useApp } from "#/hooks/useApp";
import { getUsers } from "#/lib/api/mongoService";
import ReactSelect from "react-select"
import { ObjectID } from "bson";
import { useEffect, useRef, useState } from "react";
import Button from "#/components/common/Button";
//Skeleton css file

import { useRouter, useSearchParams } from 'next/navigation';
import PermissionDialog from "#/components/common/PermissionDialog";
import Link from "next/link";
import { useCollection } from "#/hooks/useCollection";

type Account = {
  _id: ObjectID
  _userId: string
  role: 'globalAdmin' | 'customer' | 'enterprise' | 'regulatory' | "checker"
  email: string,
  emailVerified: boolean
}
type RoleNameLabel = {
  [key in (Account["role"])]: string;
};
//map the role value in database to the value on the web page
const roleNameLabelMap: RoleNameLabel = {
  "globalAdmin": "Admin(global)",
  "enterprise": "Enterprise",
  "customer": "Customer",
  "regulatory": "Regulatory",
  "checker": "Checker"
}
type RoleList = keyof RoleNameLabel


const roleList = ["globalAdmin", "enterprise", "customer", "checker"]

console.log(roleNameLabelMap)

export function AccountList({ lng }: { lng: string }) {
  const mongoApp = useApp()
  const { t } = useTranslation(lng, "account-list")
  const [accounts, setAccounts] = useState<Account[]>()
  //The collection name of user profile(store as custom data)
  const userprofileCollName = "User"
  const router = useRouter()
  //TODO env vara
  const accountsCollection = useRef( 
    mongoApp.currentUser?.mongoClient('mongodb-atlas').db('qrcodeTraceability').collection("User")
  )
  useEffect(() => {
    if (mongoApp?.currentUser) {
      getUsers(mongoApp.currentUser)
        .then(accounts => {
          setAccounts(accounts)
        })
        .catch((error) => console.error(error))
      
    }
  }, [mongoApp, mongoApp?.currentUser])

  //TODO consider the type of user collection
  const deleteItem = async (id: ObjectID) => {

    if (confirm("Are you sure you want to delete it")) {
      const mongoCollection = mongoApp
        ?.currentUser
        ?.mongoClient('mongodb-atlas')
        .db('qrcodeTraceability')
        .collection(userprofileCollName);
      
      mongoCollection?.deleteOne({ _id: id })
        .then(result => {
          if (confirm(`Delete ${result.deletedCount} account with ${id}`)) {
            router.refresh()
          }
        })
        .catch(
          error => console.error(error)
        )
    }
  }
  const accountActivate = async ( itemId: ObjectID) => {
    try {
      const result = await accountsCollection.current?.findOneAndUpdate(
        { _id: itemId },
        {
          $set: {
            emailVerified: true
          }
        }
      )
      console.log({ updateResult: result })
      alert(result)
    } catch (error) {
      throw error
    }
  }
  const profileSubmit = async (profileData: any) => {

    
      try {
        const result = await accountsCollection.current?.findOneAndUpdate(
          { _id: profileData["_id"] },
          {
            $set: {
              role: profileData.role
            }
          }
        )
        console.log({ updateResult: result })
      } catch (error) {
        throw error
      }
  }
 
  return (
    <table className="border-none">
      <thead>
        <tr>
          <th className="max-w-32 overflow-x-hidden" style={{ maxWidth: "8rem", overflowX: "hidden" }}>
            {t("User ID")}
          </th>
          <th style={{ maxWidth: "8rem", overflowX: "hidden" }}>
            {t("Email")}
          </th>
          <th style={{ maxWidth: "8rem", overflowX: "hidden" }}>
            {t("role")}
          </th>
          <th style={{ maxWidth: "8rem", overflowX: "hidden" }}>
            {t("Verified")}
          </th>
          <th colSpan={3}>{t("Action")}</th>
        </tr>
      </thead>
      <tbody>
        {accounts?.map((account, index) => (
          <tr key={index}>
            <td>{account._userId}</td>
            <td>{account?.email || "null"}</td>
            <td>
              {account.role}
              {/* <label htmlFor="role-select">{t('Choose')}</label>
            <select
              id="role-select"
              
              defaultValue={account.role || 'Set the role'}
            >
              {Object.keys(roleNameLabelMap).map((role) => (
                <option key={role} value={role}>
                  @ts-ignore
              {roleNameLabelMap[role]}
            </option>
              ))}
          </select> */}
            </td>
            <td>
              <Button
                className={account.emailVerified ? "" : "bg-gray-100"}
                disabled={account.emailVerified}
                onClick={() => {
                  accountActivate(account._id);
                }}
              >
                {account.emailVerified ? t("passed", "common") : t("pass","common")}
              </Button>
            </td>
            <td>
              <a href={`./account?id=${account._id.toHexString()}`}>{t("Edit", "common")}</a>
            </td>
            <td>
              <Button
                onClick={() => {
                  deleteItem(account._id);
                }}
              >
                {t("Delete", "common")}
              </Button>
            </td>
          </tr>
        ))}
        {/* <PermissionDialog /> */}
      </tbody>
    </table>
  );
}

