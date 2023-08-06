import ReactTable from "#/components/common/ReactTable";
import { getCookieByName } from "#/components/util/cookie";
import { getAllEnterprises, getAllOrders } from "#/lib/api/gqlOperation";
import { useTranslation } from "#/lib/i18n";
import { BasePageProps } from "#/types/pageProp";

export default async function Page({ params: { lng } }: BasePageProps) {
  const { t } = await useTranslation(lng, "enterprise")
  const { orders } = await getAllOrders(getCookieByName("accessToken")!)
  //All field are return as string 
  console.log(orders)
  return(
    <ReactTable data={orders} schemaType={"Order"} deleteEnabled={false} />
  )
}