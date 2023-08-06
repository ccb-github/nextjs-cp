import { FaCheck } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
type LogProps = {
  label: string
  content: string
}
const Log = ({label, content}: LogProps) => (
  <div id="log-container">
    <div className="w-full p-1">
      <FaCheck className="inline-block"/>Log content <FiMoreVertical className="float-right"/>
    </div>
  </div> 
)

export default function Logs(){
  const LogList = Array(5).fill({
    label: "log label",
    content: "log content"
  })
  return (
      <div
          id="logs-container"
          className="w-full  border-b border-gray-800 rounded-lg space-y-2">
        {}
      </div>
    )
}