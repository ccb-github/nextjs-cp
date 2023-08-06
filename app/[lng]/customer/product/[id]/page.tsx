import EnterpriseItem from "#/components/common/item/EnterpriseItem";
import ProductItem from "#/components/common/item/ProductItem";
import { getCookieByName } from "#/components/util/cookie";
import { getOneProduct } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";


export default async function ProductResultPage({ params: { lng }, searchParams }: BasePageProps) {

  const {field, value} = searchParams
  return (
    <div className="w-full overflow-y-scroll">
      {/* <Link href={"./product/example"}>
        Here is an example <ExternalLinkIcon className="w-4"/>
      </Link> */}
      
      {/* <EnterpriseItem lng={lng} item={enterprise}/>  */}

    </div>
  )
}