'use client'
import { BasePageProps } from "#/types/pageProp";
import AddDataForm from "#/components/form/AddDataForm";
import { schemaJson } from "#/lib/schema";
import { useApp } from "#/hooks/useApp";
import { useEffect, useRef, useState } from "react";
import { useCollection } from "#/hooks/useCollection";
import RelatedObjectSelect from "#/components/form/related/RelatedObjSelect";

import { BSON} from "realm-web"
import { SchemaResultMapper } from "#/types/schema";

export default function Page({ params: {lng}}: BasePageProps) {
  const realmApp = useApp()

  const collectionRef = useRef(realmApp.currentUser
    ?.mongoClient("mongodb-atlas")
    .db("qrcodeTraceability")
    .collection("Product")
  )

  const allowedCategories = useRef<Array<SchemaResultMapper["Category"]>>()
  const [categoriesLoading, setCatgoriesloading ] = useState(true)
  const categoryCollection = useCollection("Category")
  const CategorySelect = (props: {name: string}) => {
    return (
      <div key={props.name} className="form-group">
        <div>
          <label className=" control-label" htmlFor={props.name}>
            {props.name}
          </label>
          <button>selection</button>     
        </div>
        <div className="w-full">
          <RelatedObjectSelect objectType="Category" name="Category"/>
        </div>
      </div>
    );
  }
  useEffect( () => {
    (async () => {
      //allowedCatgories.current = await 
      categoryCollection?.find().then(
        catgorys => {
          allowedCategories.current 
        }
      )
    })()
  }, [categoryCollection])
  const relateEnterprise =async ( itemId: BSON.ObjectID ) => {
    try {
    
      const result = await collectionRef.current?.findOneAndUpdate(
        { _id: itemId },
        {
          $set: {
            producer : itemId
          }
        }
      )
      console.log({ updateResult: result })
      alert(result)
    } catch (error) {
      throw error
    }
  
  }  
  return (
      <div
        id="data-table"
        className="h-full w-full overflow-x-scroll overflow-y-scroll">
        <AddDataForm 
          schemaObj={schemaJson["Product"]} lng={lng} 
          customizeSubmitAction={
            relateEnterprise
          }
        >
          <CategorySelect name={"catgory"}/>
          
        </AddDataForm>
      </div>
    );
  }