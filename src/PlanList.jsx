import { useState, useEffect } from "react"
import { getAllCardPlans } from "./api"

export default function PlanList({ selectPlan }) {
    const [planList, setPlanList] = useState([])

    async function loadPlans() {
        const plans = await getAllCardPlans()        
        setPlanList(plans)
    }

    useEffect(() => {
        loadPlans()
    }, [])

    return (
        <div>
            { planList.map((plan) => (
                <div key={plan.id}>
                    <button onClick={() => selectPlan(plan)}>
                        {plan.name}
                    </button>
                </div>
            ))}
        </div>
    )
}