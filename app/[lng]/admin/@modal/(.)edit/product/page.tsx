
import Button from "#/components/common/Button";
import { StringInputFieldTemplate } from "#/components/form/AddDataForm";

import { templateHTML } from "#/components/form/templateHTML";
import { getOneProduct } from "#/lib/api/gqlOperation";
import { useTranslation } from "#/lib/i18n";
import { schemaJson } from "#/lib/schema";
import { BasePageProps } from "#/types/pageProp";

import Script from "next/script";
import { BSON } from "realm-web";


export default async function ProductEditPage({ params: {lng}, searchParams}: BasePageProps) {
  console.log("This Product editpage ([@modal/.edit/) is rendered")
  const schemaObj = schemaJson["Product"]
  const { id } = searchParams  
  const { t } = await useTranslation(lng)
  const { product } = await getOneProduct({query: {
    _id: new BSON.ObjectId(id as string)
  }})
  console.log(product)
  const formSubmit = async (editedData: FormData) => {
    "use server"

  }
  return (
    <>
      <dialog id={"editProductDialog"}>
        <form
          method="post"
          action="#"
          id="insertForm"
          className={`
            grid grid-cols-1 gap-5 lg:grid-cols-2 
            h-full overflow-y-scroll pt-2
          `}
        >
          {Object.keys(schemaObj.properties).map((e) =>
            templateHTML(schemaObj.properties[e])
          )}
          <StringInputFieldTemplate
            {...schemaObj.properties["name"]}
            defaultValue={product.name}
          />
          <StringInputFieldTemplate
            {...schemaObj.properties["assemblePlace"]}
            defaultValue={product.assemblePlace}
          />
          {/* <RelatedItemDialog itemType='Product'/> */}
          <div className="form-group lg:col-span-2">
            <Button type="reset" className="m-2">
              {t("Reset")}
            </Button>
            <Button type="reset" className="m-2">
              Save
            </Button>
            <Button type="submit" className="m-2">
              Submit
            </Button>
          </div>
        </form>
      </dialog>
      <Script id={"loadDialog"}>
      {`
        window.editProductDialog.showModal()
      `}
      </Script>
    </>
  );
}