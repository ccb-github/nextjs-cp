import React from "react"
import { BasePageProps } from "#/types/pageProp"
import ProductItem from "#/components/common/item/ProductItem"
import { getAllEnterprises } from "#/lib/api/gqlOperation";


interface PageProps extends BasePageProps{
  params :{
    type: string; 
    id: string;
    lng: string
  }
}
export default async function Page({ params }: PageProps) {
	const {type,  lng} = params
  console.log('Type', type)
  const enterprise = await getAllEnterprises()
  console.log(enterprise)
	return (
    <div>
      {(() => {
        switch (type) {
          case 'Product':
            return <ProductItem lng={lng} product={{name: "Product a", catgory: "A"}}/>
          case 'Enterprise':
            return <h1>Enterprise</h1>
          default:
            return <h1>Not implement yet type <strong>{type}</strong></h1>
        }
      })()}
    </div>
  )
}


