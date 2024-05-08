import { useState } from "react"

export default function PlanEdit({plan, cancelEditing, save}) {
    const [name, setName] = useState(plan.name)
    const [rewards, setRewards] = useState(plan.rewards)
    const [fee, setFee] = useState(plan.fee)
    const [interestRate, setInterestRate] = useState(plan.interestRate)

    console.log('Updating component with', name, rewards, fee, interestRate)

    return (
        <div style={{background: "orange"}}>
            <div>Name: <input value={name} onChange={(e) => setName(e.target.value)}/></div>
            <div>Rewards: <input value={rewards} onChange={(e) => setRewards(e.target.value)}/></div>
            <div>Fee: <input value={fee} onChange={(e) => setFee(e.target.value)}/></div>
            <div>Interest Rate: <input value={interestRate} onChange={(e) => setInterestRate(e.target.value)}/></div>
            <button onClick={() => cancelEditing()}>Cancel Editing</button>
            <button onClick={() => save()}>Save</button>
        </div>
    )
}