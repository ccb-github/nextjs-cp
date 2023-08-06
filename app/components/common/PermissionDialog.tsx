
import { useEffect } from "react"


export default function PermissionDialog() {
  const catgorys = ["A", "B"]

  const submitPermissionChange =async () => {
    
  }
  return (
    <dialog>
      
      <div>
        <h2>Allowed catgory</h2>
        {
          catgorys?.map( catgory => (
              <input type="radio" value={catgory} multiple={true}/>
          ))
        }
        
      </div>  
    </dialog>
  )  
}