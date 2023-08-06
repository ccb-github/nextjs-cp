import ReactTable from "#/components/common/ReactTable";
import ConfirmDialog from "#/components/common/dialog/ConfirmDialog";
import { getAllProducts, getByName, getByNameAndFilter, getOneProduct } from "#/lib/api/gqlOperation";
import { useTranslation } from "#/lib/i18n";
import { BasePageProps } from "#/types/pageProp";
import { SchemaResultMapper } from "#/types/schema";
import { cookies } from "next/headers";
import Link from "next/link";





export default async function AdminProductManagePage({params: {lng}}: BasePageProps) {
    //The columnList={["name"]}url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
  const { products } = await getAllProducts()
    return (
      <div id="data-table" className="h-full w-full">
        <ReactTable
          data={products}
          columnList={[
            "name",
            "assemblePlace",
            "_id",
            "category",
            "status",
            "produceDay",
            "shelfLife",
          ]}
          schemaType={"Product"}
          deleteEnabled={true}
          lng={lng}
        />
      </div>
    );
  }



