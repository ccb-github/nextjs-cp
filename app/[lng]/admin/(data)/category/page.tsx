import ReactTable from "#/components/common/ReactTable";
import { getCatgories } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";
import { cookies } from "next/headers";


export default async function AdminEnterpriseManagePage({params: {lng}}: BasePageProps) {
  //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
 
  const cookieStore = cookies()

  const accessToken = cookieStore.get('accessToken')
 
  //const product = {"name": "Product one"}
  const {catgories} = await getCatgories(accessToken!.value)
  console.log(catgories)
  return (
    <div id="data-table" className="h-full w-full">
      <ReactTable
        data={catgories}
        schemaType={"Category"}
        deleteEnabled={true}
        lng={lng}
      />
    </div>
  );
}



