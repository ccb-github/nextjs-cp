import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../AppProvider"
import { SchemaResultMapper } from "#/types/schema"
import category from "#/lib/schema/category"

export const AllowedCategoryList = ({list}: {list: string[]}) => {
  const appContext = useContext(AppContext)
  const { useCollection } = appContext
  const targetCollection = useCollection("Category")
  const allCategorysRef = useRef<SchemaResultMapper["Category"][]>([])
  useEffect( () => {
    (async () => {
      const catgorys = await targetCollection?.find()
      //@ts-ignore
      catgorys ? allCategorysRef.current = catgorys.map( item => item.name) : null 
    })()
    
  }, [targetCollection])
  return(

    <tr>
      <th scope="row">Catgory</th>
      {
        allCategorysRef.current.map(
          category => <td key={category._id.toHexString()}><b>{category.name}</b></td>
        )
      }
    </tr>
  )
}