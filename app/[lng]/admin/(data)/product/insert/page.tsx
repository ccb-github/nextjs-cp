'use client'
import AddDataForm, { AddProductForm } from "#/components/form/AddDataForm";
import { schemaJson } from "#/lib/schema";
import { toSchemaTypestring } from "#/lib/stringFactory";
import { BasePageProps } from "#/types/pageProp";



export default function Page( {params} : BasePageProps) {
	const { lng } = params

	// <AddDataForm schemaObj={schemaJson[toSchemaTypestring(type)]}/>
	
	return (
		<AddDataForm
			lng={lng}
			schemaObj={schemaJson["Product"]} />
	);
}