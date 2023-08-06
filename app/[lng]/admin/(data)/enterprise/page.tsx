
import ReactTable from "#/components/common/ReactTable";

import { getAllEnterprises } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";


export default async function AdminEnterpriseManagePage({params: {lng}}: BasePageProps) {
    //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  
    const { enterprises } = await getAllEnterprises()
    
    return (
      <div
        id="data-table"
        className="h-full w-full overflow-x-scroll overflow-y-scroll"
      >
        <ReactTable
          lng={lng}
          data={enterprises}
          schemaType={"Enterprise"}
          columnList={[
            "name",
            "address",
            "createdAt",
            "creditCode",
            "registerPlace",
          ]}
          deleteEnabled={true}
        />
      </div>
    );
  }



