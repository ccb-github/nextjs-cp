"use client"
import { useApp } from "#/hooks/useApp"
import { SchemaName } from "#/types/schema"
import { useEffect, useRef, useState } from "react"
//The id must can be stringify
export default function RelatedObjectSelect({ objectType, name, label, className, ...props }:{
	objectType: SchemaName,
  className?: string,
  name?: string,
  label?: string,
	linked?: boolean,
  onChangeValue?: (newValue: string) => any
}){
  //TODO provide the type
  const [dataList, setDataList] = useState<any[]>([])
  const mongoApp = useApp()
  const mongoCol = useRef(mongoApp.currentUser?.mongoClient('mongodb-atlas')
    .db('qrcodeTraceability')
    .collection(objectType)
  )
  useEffect(() => {
	  mongoCol.current?.find({}).then( res => 
      {
        setDataList(res)
      })
  }, [objectType])
  
  return (
    <select 
      className={className}
      name={name} {...props}  
      defaultValue={label || `Select the related ${objectType} item id`}
    >
      {dataList !== undefined
        ? dataList.map((item, key) => {
            return (
              <option key={key} value={item._id.toString()}>
                {item.name || item._id.toString()}
              </option>
            )
          })
        : null}
    </select>
  )
}