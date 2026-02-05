import { useInterview } from "../store/useInterview"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const ListInterview = () => {
    const { interviews, fetchInterview } = useInterview()
  const navigate = useNavigate()
useEffect(() => {
  fetchInterview()

}, [fetchInterview])

  return (
    <div>
      <h1>ListInterview</h1>
      <div>
         <span>Active Interview</span>
         <div className=" h-[400px] overflow-y-auto rounded-2xl border border-gray-500 p-2">
          
          {interviews.map((interview)=>(
            <div key={interview._id} className="border-b border-gray-500 flex justify-between">
              <h1 className="text-xl">{interview.title}</h1>
              <button onClick={() => navigate(`/interview-dashboard/${interview._id}`)} className="rounded-2xl bg-accent text-white hover:bg-transparent p-2 mb-1">Join</button>
             
              </div>
              
          ))}
        </div>
       </div>
    </div>
  )
}

export default ListInterview