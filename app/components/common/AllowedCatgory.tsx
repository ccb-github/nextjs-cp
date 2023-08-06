import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../AppProvider"
import { SchemaResultMapper } from "#/types/schema"

export const AllowedCatgoryList = ({list}: {list: string[]}) => {
  const appContext = useContext(AppContext)
  const { useCollection } = appContext
  const targetCollection = useCollection("Category")
  const allCategorysRef = useRef<any[]>([])
  useEffect( () => {
    (async () => {
      const catgorys = await targetCollection?.find()
      catgorys ? allCategorysRef.current = catgorys.map( (item) => (item as {name: string}).name) : null 
    })()
    
  }, [targetCollection])
  return(

    <tr>
      <th scope="row">Category</th>
      {
        allCategorysRef.current.map(
          (catgory, index) => <td key={index}><b>{catgory}</b></td>
        )
      }
    </tr>
  )
}