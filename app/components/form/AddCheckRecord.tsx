import { useApp } from "#/hooks/useApp";
import { insertDataToCol } from "#/lib/api/mongoService";
import fieldConvert from "#/lib/fieldConvert";
import { SchemaObject } from "#/types/schema";
import { useRef, useState, useEffect, FormEvent } from "react";
import { BSON } from "realm-web";
import { templateHTML } from "./templateHTML";
import ModalQRCodeDialog from "./ModalQRCodeDialog";
import RelatedObjectSelect from "./RelatedObjSelect";

/** filter: filterProps,
 * Describ
 * Search by filter, given param id will filter._id
 * @date 2023-03-29
 * @param {SchemaObject} schemaObj : schema object used as the template for rendering the table

 * @param {string} lng}: Language string, etc: ch, en
 * @returns {HTMLFormElement}
 */
export default function AddCheckRecord({
    schemaObj,
    children,
    customizeSubmitAction,
    lng
  }: {
    schemaObj: SchemaObject;
    customizeSubmitAction?: (theData: any) => any; 
    lng: string;
    children?: React.ReactNode
  }) {
    const mongodbApp = useApp()
    //TODO we need type
    const insertData = useRef<{
      ownerId?: string;
      _id?: BSON.ObjectID
    }>({})
    //The qrcode content 
    const [qrCodeMessage, setQRCodeMessage] = useState<any>(null)
    const relatedProductId = useRef()
    useEffect(() => {
      console.log('SchemaObj', { schemaObj })
      if (!mongodbApp.currentUser?.id) {
        throw new Error("Please login first")
      }
      
    })
      
    
    const submitForm = async (submitEvent: FormEvent<HTMLFormElement>) => {
      let insertResult
      try {
        submitEvent.preventDefault()
        //@ts-ignore submitEvent: FormEvent<HTMLFormElement>
        const eventForm: HTMLFormElement = submitEvent.target
        const FD = new FormData(eventForm)
        console.log(FD)
        const mongoCollection = mongodbApp?.currentUser
          ?.mongoClient('mongodb-atlas')
          .db('qrcodeTraceability')
          .collection(schemaObj.name)
        for (let item of FD.entries()) {
          Object.defineProperty(insertData.current, item[0], {
            writable: true,
            enumerable: true,
            value: fieldConvert(item[1], schemaObj.properties[item[0]].type),
          })
        }
        insertData.current._id = new BSON.ObjectId()
        
        //If the schema item has ownerId field(Indicate the owner's account id, initize it from current user's id from mongodbApp)
        if( Object.keys(schemaObj.properties).includes('ownerId')){
          insertData.current.ownerId = mongodbApp.currentUser?.id
        }
        insertData.current.target = relatedProductId.current!
        
        ({insertedId:insertResult} = await insertDataToCol(mongodbApp.currentUser!, schemaObj["name"], insertData.current)
        )
        console.table(insertResult)
        //setQRCodeMessage(JSON.stringify(insertData.current))
        //alert(`Just insert an item with ${result.insertedId}`)
       
      } catch (error: any) {
        
        if(error.message){
          //@ts-ignore
          alert(error.message)
        }
        submitEvent.preventDefault()
        throw error
      } finally {
        
      }
    }
    
   
    return (
      <>
        {qrCodeMessage ? <ModalQRCodeDialog lng={lng} src={qrCodeMessage}/> : null}
        <form
          method="post"
          action="#"
          id="insertForm"
          onSubmit={submitForm}
          className={`
            grid grid-cols-1 gap-5 lg:grid-cols-2 
            h-full overflow-y-scroll pt-2
          `}
        >
          {Object.keys(schemaObj.properties).map((e) =>
            templateHTML(schemaObj.properties[e]),
          )}
          {children}
          <RelatedObjectSelect objectType="Product"/>
          {/* <RelatedItemDialog itemType='Product'/> */}
          <div className="form-group">
            <button type="submit" className='m-2'>
              Submit
            </button>
          </div>
          
        </form>
      </>
    )
  }