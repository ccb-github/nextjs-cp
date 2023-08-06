'use client'

import { SearchIcon } from "../icons";
import { useEffect, useRef } from "react";
import { useApp } from "#/hooks/useApp";


import { SchemaResultMapper, SchemaName, SearchResultMap } from "#/types/schema";
import { schemaJson } from "#/lib/schema";
import ReactSelect from "react-select";




export default function SearchBySchemaName({
  className,
  placeHolder,
  searchSchemaName,
  onSearchSubmit
}: {
  className?: string,
  searchSchemaName: SchemaName,
  placeHolder?: string,
  onSearchSubmit: (searchResult: SearchResultMap) => any
}) {
  const mongoApp = useApp()
  
  //Current search schema name
  const searchSchemaRef= useRef<SchemaName>()
  //TODO empty string
  const searchQueryRef = useRef("")
  const collectionRef = useRef<Realm.Services.MongoDB.MongoDBCollection<any> | undefined>()
  const onSubmit = async () => {
    if(searchSchemaRef.current === undefined) {
      alert("Please select the type first!")
      return false
    }
    const filter = {}
    let field, value
    //query matching

    if(searchQueryRef.current.match(/:\s/)){
      [field, value] = searchQueryRef.current.split(':')
      //Remove the space prefix, to do search with field:
      value = value.slice(1)
      console.log(`Field and value:`, {field, value})
    }
    else {
      field="name" 
      value = searchQueryRef.current
    }
    //@ts-ignore
    filter[field] = value

    const myMap = new Map<string, SchemaName | SchemaResultMapper[Exclude<typeof searchSchemaRef.current, undefined>]>([
      ["type", searchSchemaRef.current],
      ["resultData", await collectionRef.current?.findOne(filter)]]
    );
    onSearchSubmit(myMap)
  }
  //Change the activate collection
  // useEffect(() => {
  //   collectionRef.current =
  //     mongoApp.currentUser?.mongoClient("mongodb-atlas")
  //       .db("qrcodeTraceability")
  //       .collection(searchSchemaRef.current)
  // }, [searchSchemaRef])
  return (
    <div className='flex justify-center'>
      <ReactSelect
        inputId='container-select'
        options={
          Object.entries(schemaJson).map(
            schemaEntry => ({
              name: schemaEntry[1].name,
              label: schemaEntry[1].name,
            })
          )}
        onChange={(value) => {
          searchSchemaRef.current = value?.name
          collectionRef.current =
            mongoApp.currentUser?.mongoClient("mongodb-atlas")
              .db("qrcodeTraceability")
              .collection(value!.name)
        }}
      />
      <input
        type="text"
        className="rounded-md"
        required
        placeholder={placeHolder || "Searchbar placeholder not set"}
        onChange={searchQueryOnChangeEvent => searchQueryRef.current = searchQueryOnChangeEvent.currentTarget.value}
      />
      <button type="button" onClick={onSubmit}>
        <SearchIcon />
      </button>
    </div>

  );
}
