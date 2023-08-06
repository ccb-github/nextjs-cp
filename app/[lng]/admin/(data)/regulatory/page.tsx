import ReactTable from "#/components/common/ReactTable";
import { useApp } from "#/hooks/useApp";
import { getAllEnterprises, getRegulatories } from "#/lib/api/gqlOperation";

import { schemaJson } from "#/lib/schema";
import { BasePageProps } from "#/types/pageProp";
import { SchemaResultMapper } from "#/types/schema";
import { useEffect, useRef, useState } from "react";



export default async function AdminRegulatoryManagePage({params: {lng}}: BasePageProps) {
  
    const schemaType = "Regulatory"
    const {regulatories} = await getRegulatories({})
    
    return (
      <div
        id="data-table"
        className="h-full w-full overflow-x-scroll overflow-y-scroll"
      >
        <ReactTable
          data={regulatories}
          schemaType={schemaType}
          deleteEnabled={true}
          columnList={[ "description", "address", "name"]}
          lng={lng}
        />
      </div>
    );
  }