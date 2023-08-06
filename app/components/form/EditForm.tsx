'use client';
//TODO type check
import { useApp } from '#/hooks/useApp';
import fieldConvert from '#/lib/fieldConvert';

import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { BSON } from 'realm-web';
import { SchemaObject } from '#/types/schema'; 
import { insertDataToCol, updateCollection } from '#/lib/api/mongoService';


import ModalQRCodeDialog from './ModalQRCodeDialog';
import { templateHTML } from "./templateHTML";



const OMMIT_FIELD = ["ownerId", "_id"]

//TODO default value with name
/** filter: filterProps,
 * Describ
 * Search by filter, given param id will filter._id
 * @date 2023-03-29
 * @param {SchemaObject} schemaObj : schema object used as the template for rendering the table

 * @param {string} lng}: Language string, etc: ch, en
 * @returns {HTMLFormElement}
 */
export default function EditDataForm({
  schemaObj,
  children,
  customizeSubmitAction,
  initialValue,
  lng
}: {
  schemaObj: SchemaObject;
  customizeSubmitAction?: (theData: any) => any; 
  lng: string;
  initialValue: any;
  children?: React.ReactNode
}) {
  const mongodbApp = useApp()
  //TODO we need type
  const insertData = useRef<{
    ownerId?: string;
    _id?: BSON.ObjectID
  }>({})
  //The qrcode content 
 
  
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
     
      //@ts-ignore
      ({insertedId: insertResult} = await insertDataToCol(mongodbApp.currentUser!, schemaObj["name"], insertData.current)
      )
      await updateCollection(mongodbApp.currentUser!, schemaObj["name"], {_id: insertData.current._id}, insertData.current)
      customizeSubmitAction ? customizeSubmitAction(mongodbApp.currentUser!.id) : ""
      
      console.table(insertResult)
      
      
     
    } catch (error: any) {
      
      if(error.message){
        //@ts-ignore
        alert(error.message)
      }
      submitEvent.preventDefault()
      throw error
    }
  }
  
 
  return (  
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
        {Object.keys(schemaObj.properties).map((propKey) => {
          const schemaProperty = schemaObj.properties[propKey]
          return templateHTML({...schemaProperty, defaultValue: initialValue[schemaProperty["name"]] })
        }
        )}
        {children}
        {/* <RelatedItemDialog itemType='Product'/> */}
        <div className="form-group">
          <button type="submit" className='m-2'>
            Submit
          </button>
        </div>
        
      </form>
    
  )
}


