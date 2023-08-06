import EnterpriseItem from "#/components/common/item/EnterpriseItem";
import ProductItem from "#/components/common/item/ProductItem";
import { getCookieByName } from "#/components/util/cookie";
import { getOneProduct } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";
import { ArrowDownIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { BSON } from "realm-web";

export default async function Page({ params: { lng } }: BasePageProps) {
  const accessToken = getCookieByName("accessToken")
  const { product } = await getOneProduct({
    query: { _id: new BSON.ObjectId("638e957d7dbc7b8fee63f6fd") },
  });

  return (
    <div className="w-full overflow-y-scroll">
      <Link href={"./product/example"}>
        Here is an example <ExternalLinkIcon className="w-4"/>
      </Link>
      <p>{product.name}</p>
      

    </div>
  )
}