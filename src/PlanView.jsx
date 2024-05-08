import { useState, useEffect } from "react"
import PlanDetail from "./PlanDetail"
import PlanEdit from "./PlanEdit"
import { getPlanById, updatePlan } from "./api"

export default function PlanView({ planId, returnToList}) {
    const [editing, setEditing] = useState(false)
    const [plan, setPlan] = useState({name: '', rewards: '', fee: '', interestRate: ''})

    function startEditing() {
        setEditing(true)
    }

    function cancelEditing() {
        setEditing(false)
    }

    async function save(newPlanDetail) {
        // do something awesome here
        console.log('I have been asked to save', newPlanDetail)
        const newPlan = await updatePlan({
            id: plan.id,
            ...newPlanDetail
        })
        setPlan(newPlan)
        setEditing(false)
    }

    async function loadPlan() {
        const plan = await getPlanById(planId)
        setPlan(plan)
    }

    useEffect(() => {
        loadPlan()
    }, [planId])

    return (
        <div style={{ background: "red"}}>
            { !editing && <>
                <PlanDetail plan={plan} startEditing={startEditing}/>
                <button onClick={() => returnToList()}>Return to List</button>
            </> }
            { editing && <PlanEdit plan={plan} cancelEditing={cancelEditing} save={save}/> }
        </div>
    )
}
