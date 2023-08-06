'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '#/hooks/useApp';
import DataItem from './DataItem';

import { schemaJson } from '#/lib/schema';
import { SchemaObject } from '#/types/schema';
import { toSchemaTypestring } from '#/lib/stringFactory';
import { usePathname, useSearchParams } from 'next/navigation';
import { NormalLinkItem } from './NormalUserSideBar';


interface MongodbListProps {
  type: string;
  id?: string;
  filter?: any;
}

export default function DataById({ type, id, filter }: MongodbListProps) {
  const schemaProperties = useRef(schemaJson[type].properties);


 
  const [datas, setDatas] = useState<any>([]);
  
  const mongodbApp = useApp();
  
  const dataFetch =async () => {
    if (mongodbApp?.currentUser) {
      const mongo = mongodbApp?.currentUser?.mongoClient('mongodb-atlas');
      
      const recordsCollection = mongo.db('qrcodeTraceability').collection(type);
      
      recordsCollection.find(filter).then((foundRecords) => {
        console.log(foundRecords.length);
        
        //console.log(tableHead.current)
        setDatas((_currentDatas: any[]) => [...foundRecords]);
      }).catch( 
        error => console.error(error) 
      )
    }
  }
  const schemaObj = useRef<SchemaObject>(schemaJson[toSchemaTypestring(type)]);
  
  
  useEffect(() => {
    console.log('In MongodbList props', { type }, filter);
    if (mongodbApp?.currentUser) {
      const mongo = mongodbApp?.currentUser?.mongoClient('mongodb-atlas');
      const recordsCollection = mongo.db('qrcodeTraceability').collection(type);
      
      recordsCollection.find(filter).then((foundRecords) => {
        console.log(foundRecords.length);
        
        //console.log(tableHead.current)
        setDatas((_currentDatas: any[]) => [...foundRecords]);
      }).catch( 
        error => console.error(error) 
      )
    }
  }, [mongodbApp?.currentUser, filter, type]);

 

  return (
    <div id="data-table" className="overflow-x-scroll overflow-y-scroll">
      <h1 className='table-head'>Data from MongoDB realmapp service</h1>
      <table className="table bg-azure">
        <thead>
          <tr>
            <th>#</th>
            {tableHead.current.map((item: string, index: number) => (
              <th scope="col" key={index}>
                {item}
              </th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody style={{maxHeight: "200px"}}>
          {datas
            ? datas.map((data: any, index: number) => (
                <DataItem
                  dataItem={data}
                  index={index}
                  id={data._id}
                  key={data._id}
                  deleteClick={deleteItem}
                />
              ))
            : `No ${type}`}
        </tbody>
        <tfoot>
          <tr>
            <td>{`Total documents ${datas.length}`}</td>
            <td>
              <NormalLinkItem
                item={{
                  name: "Insert new one",
                  link: `/admin/${schemaObj.current.name}/insert`,
                  description: `Insert a new ${schemaObj.current.name} item`,
                }}
                link={`/admin/${schemaObj.current.name}/insert`}
                close={() => {}
              }>
                <button>Insert</button>
              </NormalLinkItem>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

//(objectKey, index) =>
//<th scope='col' key={index}>{schema.current.properties[objectKey].name}</th>
