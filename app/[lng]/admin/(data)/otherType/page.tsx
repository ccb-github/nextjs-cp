import React from "react"

import MongoDbList  from "#/components/common/MongodbList"

import { toSchemaTypestring } from "#/lib/stringFactory"
import { schemaJson } from "#/lib/schema"
import { error } from "console"



type PageProps = {
	params: {
		type: string,
		id: string,
		lng: string
	}
	searchParams?: {
		[key: string]: string | string[] | undefined
	}
}


export default function Page({ params, searchParams }: PageProps) {
	const { type, lng } = params
	const schemaType = toSchemaTypestring(type)
	
	if(!Object.keys(schemaJson).includes(schemaType)) {
		throw error(`The url is incorrect can not find data related to type ${schemaType}`)
	}

	return (
		<MongoDbList type={schemaType} filter={{ ...searchParams }}
			lng={lng} sortOption={{}} /> 
	)
}

