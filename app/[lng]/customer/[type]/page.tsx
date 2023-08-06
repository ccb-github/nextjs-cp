import EnterpriseItem from "#/components/common/item/EnterpriseItem";
import ProductItem from "#/components/common/item/ProductItem";
import { getCookieByName } from "#/components/util/cookie";
import { getOneProduct } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";
import { SchemaName } from "#/types/schema";
import { ArrowDownIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
// This page is for other data type
interface PagePropsWithType extends BasePageProps {
  params: {
    lng: string;
    type: Lowercase<SchemaName>;
  };
}  
export default async function Page({ params: { lng, type } }: PagePropsWithType) {
  const accessToken = getCookieByName("accessToken")
  const { product} = await getOneProduct(accessToken!)

  return (
    <div className="w-full overflow-y-scroll">
      <h1>This {type} of data are not implemented yet</h1>
      {/* <EnterpriseItem lng={lng} item={enterprise}/>  */}

    </div>
  )
}