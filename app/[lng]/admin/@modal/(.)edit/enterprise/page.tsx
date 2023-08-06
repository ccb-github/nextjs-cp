import Button from "#/components/common/Button";
import { StringInputFieldTemplate } from "#/components/form/AddDataForm";

import { templateHTML } from "#/components/form/templateHTML";
import { getEnterpriseById, getOneProduct, updateEnterprise } from "#/lib/api/gqlOperation";
import { schemaJson } from "#/lib/schema";
import { BasePageProps } from "#/types/pageProp";

import Script from "next/script";
import { BSON } from "realm-web";

//TODO optimize layout grid cell max size
export default async function EnterpriseEditPage({ params: {lng}, searchParams}: BasePageProps) {
  
  const schemaObj = schemaJson["Enterprise"]
  
  const { id } = searchParams  
  const { enterprise } = await getEnterpriseById(id as string)
  console.log(`Enterprise`)
  const enterpriseSubmit = async (editedEnterpriseData: FormData) => {
    "use server"
    let setData = Object.create({})
    console.log(`The setdata in enterprise form ${editedEnterpriseData.entries()}`)
  
    setData = {
      address: editedEnterpriseData.get("address"),
      creditCode: editedEnterpriseData.get("creditCode"),
      createdAt: editedEnterpriseData.get("createdAt")
        ? new Date(editedEnterpriseData.get("createdAt") as string)
        : undefined,
    };
    try {
      const result = await updateEnterprise({
        query: { _id: new BSON.ObjectId(id as string) },
        set: setData
      })
      console.log(`The update result for enterprise with id ${id} ${JSON.stringify(result)}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <dialog id={"editEnterpriseDialog"}>
        <form
          method="dialog"
          action={enterpriseSubmit}
          id="insertForm"
          className={`
            grid grid-cols-1 gap-5 lg:grid-cols-2 
            h-full overflow-y-scroll pt-2
        `}
        >
          {Object.keys(schemaObj.properties).map((e) =>
            templateHTML({...schemaObj.properties[e], defaultValue: enterprise[e]})
          )}
         
         
          {/* <RelatedItemDialog itemType='Product'/> */}
          <div className="form-group lg:col-span-2">
            <Button type="reset" className="m-2">
              Reset
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
      <Script id={"loadDialog"} strategy="afterInteractive">
        {`console.log('loadDialog script')
          debugger
          window.editEnterpriseDialog.showModal()
        `}
      </Script>
    </>
  );
}