import ProductItem from "#/components/common/item/ProductItem";
import { BasePageProps } from "#/types/pageProp";
import { ArrowDownIcon } from "@heroicons/react/solid";

export default function ExampleProductPage({params:{lng}}: BasePageProps){
  
  return(
    <div className="w-full overflow-y-scroll">
      <div id="product-info">
        <ArrowDownIcon /><br />
        <ProductItem lng={lng} product={{ name: "Name", catgory: "other" }} />
      </div>
      <div id="product-info">
        <ArrowDownIcon /><br />
        <ProductItem lng={lng} product={{ name: "Name", catgory: "other" }} />
      </div>
      <div id="product-info">
        <ArrowDownIcon /><br />
        <ProductItem lng={lng} product={{ name: "Name", catgory: "other" }} />
      </div>
      {/* <EnterpriseItem lng={lng} item={enterprise}/>  */}

    </div>
  )
} 