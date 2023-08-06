import EnterpriseItem from "#/components/common/item/EnterpriseItem";
import ProductItem from "#/components/common/item/ProductItem";
import { getCookieByName } from "#/components/util/cookie";
import { getOneProduct } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";
import { ArrowDownIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default async function OrderResultPage({ params: { lng } }: BasePageProps) {
  const accessToken = getCookieByName("accessToken")
  

  return (
    <div className="w-full overflow-y-scroll">
     
    
      {/* <EnterpriseItem lng={lng} item={enterprise}/>  */}

    </div>
  )
}