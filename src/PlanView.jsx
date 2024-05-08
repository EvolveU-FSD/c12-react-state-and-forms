import { useState } from "react"
import PlanDetail from "./PlanDetail"
import PlanEdit from "./PlanEdit"

export default function PlanView({ plan, returnToList}) {
    const [editing, setEditing] = useState(false)

    function startEditing() {
        setEditing(true)
    }

    function cancelEditing() {
        setEditing(false)
    }

    function save(newPlanDetail) {
        // do something awesome here
        console.log('I have been asked to save', newPlanDetail)
    }

    return (
        <div style={{ background: "red"}}>
            { !editing && <PlanDetail plan={plan} startEditing={startEditing}/> }
            { editing && <PlanEdit plan={plan} cancelEditing={cancelEditing} save={save}/> }
            <button onClick={() => returnToList()}>Return to List</button>
        </div>
    )
}
