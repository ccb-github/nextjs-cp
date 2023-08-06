
import { useEffect } from "react"


export default function PermissionDialog() {
  const categorys = ["A", "B"]

  const submitPermissionChange =async () => {
    
  }
  return (
    <dialog>
      
      <div>
        <h2>Allowed catgory</h2>
        {
          categorys?.map( category => 
              <input type="radio" value={category} multiple={true}
                key={category}
              />
          )
        }
        
      </div>  
    </dialog>
  )  
}