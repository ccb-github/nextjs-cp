'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useApp } from '#/hooks/useApp';
import { BSON } from 'realm-web';
import { toSchemaTypestring } from '#/lib/stringFactory';

import ReactTable from './ReactTable';
import { schemaJson } from '#/lib/schema';
import { SchemaName, SchemaResultMapper } from '#/types/schema';


interface MongodbListProps {
  type: string;
  id?: string;
  filter?: Realm.Services.MongoDB.Filter;
  lng: string;
  sortOption?: any
}
console.log(schemaJson)
//TODO default value with name
/** filter: filterProps,
 * Describ
 * Search by filter, given param id will filter._id
 * @date 2023-03-29
 * @param {SchemaName} type : schema name(Like table name in sql)
 * @param {any} filter 
 * @param {string} id: The objectid(primary key) string
 * @param {string} lng: Language string, etc: ch, en
 * @returns {SchemaObject}
 */
export default function MongodbList({ type, id, lng, sortOption: sortOptionProps }: MongodbListProps) {
  //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const schemaType = toSchemaTypestring(type)
  const [filter] = useState({})
  const schemaPropertiesRef = useRef(schemaJson[schemaType].properties); 
  //Table head 
  const tableHeadRef = useRef(
    Object.keys(schemaPropertiesRef.current).map(
      (property) => schemaPropertiesRef.current[property].name
    ).sort()
  );
  const [sortOption, setSortOption] = useState(sortOptionProps || {})
  

  const [datas, setDatas] = useState<SchemaResultMapper["Product"][]>([]);
  const mongodbApp = useApp();
  useEffect(() => {
    if (mongodbApp?.currentUser) {
      const mongoClient = mongodbApp.currentUser?.mongoClient('mongodb-atlas');
      const mongoCollection = mongoClient.db('qrcodeTraceability').collection(schemaType);
      id && ( Object.defineProperty(filter, "_id",  {
        writable: true,
        enumerable: true,
        value: new BSON.ObjectId(),
      }) )
      
      // mongoCollection.updateMany({}, { $set: {
      //   name: `Checker ${Math.random().toFixed(3).slice(1)}`
      // }}).then( res => console.log(res))
      mongoCollection.find(filter, { sort: sortOption })
        .then(
          foundDatas => {
            setDatas((_currentDatas: any[]) => [...foundDatas]);
          }
        )
        .catch( 
          error => {
            console.error(error) 
            throw error;
          }
        )
    }
    
  }, [filter]);

  async function submitProfileChange() {
    mongodbApp?.currentUser?.refreshCustomData()  
  }
  
  
  
  const updateItem = async (e: Event) => {
    e.preventDefault()
		
    let beforeData, afterData
    const mongoCollection = mongodbApp
      ?.currentUser
      ?.mongoClient('mongodb-atlas')
      .db('qrcodeTraceability')
      .collection(schemaType);
    //@ts-ignore
    await mongoCollection?.updateOne({_id: beforeData._id},afterData)
  }
  const deleteItem = async (id: string) => {
    console.log(mongodbApp?.currentUser?.id)
    
    if(confirm("Are you sure you want to delete it")) {
      const mongoCollection = mongodbApp
        ?.currentUser
        ?.mongoClient('mongodb-atlas')
        .db('qrcodeTraceability')
        .collection(schemaType);
      //@ts-ignore
      mongoCollection?.deleteOne({_id: BSON.ObjectId(id)})
        .then( result => alert(result))
        .catch(
          error => console.error(error)	
        )
    }
  }
  
  // if(id){
  //   return <ProductItem lng={lng} product={datas[0]}/>
  // } 
  
  return (
    <div
      id="data-table"
      className="h-full w-full"
    >
      <ReactTable data={datas} lng={lng} schemaType={schemaType} deleteEnabled={false}/>
    </div>
  );
}

// function useTable(arg0: { columns: { Header: string; accessor: string; }[]; data: { col1: string; col2: string; }[]; }): { getTableProps: any; getTableBodyProps: any; headerGroups: any; rows: any; prepareRow: any; } {
//   throw new Error('Function not implemented.');
// }

