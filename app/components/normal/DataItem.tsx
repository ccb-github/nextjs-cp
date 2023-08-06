//@ts-nocheck
'use client';
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { BSON } from "realm-web"


import Link from "next/link";
import { useApp } from "#/hooks/useApp";
import { SchemaName, SchemaPropties } from "#/types/schema";
import fieldConvert from "#/lib/fieldConvert";
import { PropertyType } from "realm";
import Button from "../common/Button";
//When to use: 1. primary key is _id 
//Hint text
function ObjectLink({style, href, name}: {style?: CSSProperties, href: string, name: string}){
	return(
		<Link style={{...style} } href={href}>{name}</Link>
	)
}
function DataCell(data: unknown){
	if(typeof data === "string")
		return data
	else if(typeof data === "number")
		return data
	else
		return JSON.stringify(data)
}

interface DataItemProps {
  dataItem: any
  index: number
  id: any
  tableHead: string[][]
  objectType: SchemaName,
  primaryKeyType: PropertyType
}
export default function DataItem({
  dataItem,
  index,
  id,
  objectType,
  primaryKeyType,
  tableHead
}: DataItemProps) {
  //const valueBefore = useRef(Object.create({}))

  const [mode, setMode] = useState<'update' | 'submit'>('update')
  const mongoCol = useApp().currentUser?.mongoClient('mongodb-atlas').
                           db("qrcodeTraceability").collection(objectType)

 
  

  function updateClick(e: Event) {
    const eTarget = e.target

    //@ts-ignore
    //await mongoCollection?.updateOne({_id: beforeData._id},afterData)

    //@ts-ignore
    // let parentRowElement = eTarget.parentElement.parentElement
    // parentRowElement.querySelector('')
    //   .find()
    //   .each((_index: number, element) => {
    //$(element).addClass('table-active')
    //     valueBefore.current[element.id] = element.innerHTML
        // Object.defineProperty(
        //   valueBefore.current,
        //   element.id,{
        //     value: element.innerHTML,
        //     writable: false,
        //     enumerable: true,
        //   }
        // )
      
    // console.log(`valueBefore: ${JSON.stringify(valueBefore)}`)
    setMode('submit')
    
  }
  
  async function submitClick(e: MouseEvent<HTMLAnchorElement>) {
    const eTarget = e.currentTarget
    let valueAfter = Object.create({})
    if (!eTarget || !eTarget.parentNode || !eTarget.parentNode.parentNode) {
      throw new Error("The target node or it's parent does not exist")
    }

    // $(eTarget.parentNode.parentNode)
    //   .find('td.value-cell')
    //   .each((_index, element) => {
    //     //$(element).removeClass('table-active')
    //     Object.defineProperty(valueAfter, element.getAttribute('name'), {
    //       value: fieldConvert(element.innerHTML, table),
    //       writable: true,
    //       enumerable: true,
    //     })
    //   })
    
    const parentRowElement = eTarget.parentNode.parentNode
    tableHead.forEach( item => {
      let targetCell = parentRowElement.querySelector(`[name=${item[0]}]`)
      console.log(targetCell)
      Object.defineProperty(valueAfter, item[0], {
        value: fieldConvert(targetCell.innerHTML, item[1]),
        writable: true,
        enumerable: true
      })
    })
  
    console.log(`valueAfter: ${JSON.stringify(valueAfter)}`)
    try {
      await mongoCol?.updateOne(
        { _id:  fieldConvert(id, primaryKeyType)},
        valueAfter,
      )
    } catch (error) {
      throw error
    }
    e.preventDefault()
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {tableHead.map( dataItemKey => (
        <th
          scope="column"
          className="value-cell overflow-x-hidden"
          key={dataItemKey[0]}
          name={dataItemKey[0]}
          contentEditable={mode === 'submit'}

        >
          {DataCell(dataItem[dataItemKey[0]])}
        </th>
      ))}
      
      <td>
        {
          <ObjectLink
            name={'name'}
            href={`./63881c5115ee0b67b0cf2ed9`}
          />
        }
      </td>
      <td>
        {/* <a
          className={`${mode === 'update' ? 'update' : 'submit'}-link`}
          onClick={mode === 'update' ? updateClick : submitClick}
          href={`#`}
        >
          {mode}
        </a> */}
        <a href={`./${objectType}/${id}`}>
          View
        </a>
        <a
          className={`${mode === 'update' ? 'delete' : 'cancel'}-link`}
          href={`#`}
          onClick={async () => {
            //console.log(mongodbApp?.currentUser?.id)
    
            if(confirm("Are you sure you want to delete it")) {
              
              //@ts-ignore
              mongoCol?.deleteOne({_id: BSON.ObjectId(id)})
                .then( result => alert(result) )
                .catch(
                  error => {
                    console.error(error)
                    throw new Error(error)
                  }	
                )
            }
          }}
        >
          Delete
        </a>
      </td>
      <td>
        <a href="#" role={"button"} onClick={
          () => { if(confirm("Are you sure this item is ok?")){

          }}
        }>Pass</a>
        <Button href="#">Other</Button>
      </td>
    </tr>
  )
}
