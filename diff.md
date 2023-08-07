diff --git a/app/[lng]/admin/(data)/product/insert/page.tsx b/app/[lng]/admin/(data)/product/insert/page.tsx
new file mode 100755
index 0000000..c799709
--- /dev/null
+++ b/app/[lng]/admin/(data)/product/insert/page.tsx
@@ -0,0 +1,19 @@
+'use client'
+import AddDataForm, { AddProductForm } from "#/components/form/AddDataForm";
+import { schemaJson } from "#/lib/schema";
+import { toSchemaTypestring } from "#/lib/stringFactory";
+import { BasePageProps } from "#/types/pageProp";
+
+
+
+export default function Page( {params} : BasePageProps) {
+	const { lng } = params
+
+	// <AddDataForm schemaObj={schemaJson[toSchemaTypestring(type)]}/>
+	
+	return (
+		<AddDataForm
+			lng={lng}
+			schemaObj={schemaJson["Product"]} />
+	);
+}
\ No newline at end of file
diff --git a/app/[lng]/admin/(data)/product/page.tsx b/app/[lng]/admin/(data)/product/page.tsx
new file mode 100755
index 0000000..dd2eaa6
--- /dev/null
+++ b/app/[lng]/admin/(data)/product/page.tsx
@@ -0,0 +1,39 @@
+import ReactTable from "#/components/common/ReactTable";
+import ConfirmDialog from "#/components/common/dialog/ConfirmDialog";
+import { getAllProducts, getByName, getByNameAndFilter, getOneProduct } from "#/lib/api/gqlOperation";
+import { useTranslation } from "#/lib/i18n";
+import { BasePageProps } from "#/types/pageProp";
+import { SchemaResultMapper } from "#/types/schema";
+import { cookies } from "next/headers";
+import Link from "next/link";
+
+
+
+
+
+export default async function AdminProductManagePage({params: {lng}}: BasePageProps) {
+    //The columnList={["name"]}url is lowercase, but the schema name to search the database are like 'Name', we need to convert first
+  const { products } = await getAllProducts()
+    return (
+      <div id="data-table" className="h-full w-full">
+        <ReactTable
+          data={products}
+          columnList={[
+            "name",
+            "assemblePlace",
+            "_id",
+            "category",
+            "status",
+            "produceDay",
+            "shelfLife",
+          ]}
+          schemaType={"Product"}
+          deleteEnabled={true}
+          lng={lng}
+        />
+      </div>
+    );
+  }
+
+
+
diff --git a/public/read.md b/public/read.md
new file mode 100644
index 0000000..56e170d
--- /dev/null
+++ b/public/read.md
@@ -0,0 +1 @@
+New create file
