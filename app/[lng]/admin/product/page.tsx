import ReactTable from "#/components/common/ReactTable";
import { getAllProducts } from "#/lib/api/gqlOperation";
import { BasePageProps } from "#/types/pageProp";


export default async function AdminProductManagePage({params: {lng}}: BasePageProps) {
    //The url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const { products } = await getAllProducts()
    return (
      <div id="data-table" className="h-full w-full">
        <ReactTable
          data={products}
          // columnList={["name"]}
           //</Link>
          schemaType={"Product"}
          deleteEnabled={true}
          lng={lng}
        />
      </div>
    );
  }



