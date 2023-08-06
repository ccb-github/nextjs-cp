import AddDataForm, { AddProductForm } from "#/components/form/AddDataForm";
import { schemaJson } from "#/lib/schema";
import { toSchemaTypestring } from "#/lib/stringFactory";
import { BasePageProps } from "#/types/pageProp";


interface PagePropsWithTypeParams extends BasePageProps {
  params :{
		type: string; 
		lng: string;
  }
}
export default function Page( {params} : PagePropsWithTypeParams) {
	const { type, lng } = params

	// <AddDataForm schemaObj={schemaJson[toSchemaTypestring(type)]}/>
	console.log(`Page Enterprise`)
	return (
	  <AddDataForm 
	    lng={lng} 
	    schemaObj={schemaJson["Enterprise"]} />
	);
}