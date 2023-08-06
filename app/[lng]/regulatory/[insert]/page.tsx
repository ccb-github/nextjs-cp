import type { BasePageProps } from "#/types/pageProp";

import AddDataForm from "#/components/form/AddDataForm";
import { schemaJson } from "#/lib/schema";
import RelatedObjectSelect from "#/components/form/related/RelatedObjSelect";

export default function Page({ params: {lng}}: BasePageProps) {
  return (
    
    <>
      <AddDataForm schemaObj={schemaJson["Checker"]} lng={lng} />
      <RelatedObjectSelect objectType="Product" />
    </>
  );
}
  