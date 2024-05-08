export default function PlanEdit({plan, cancelEditing, save}) {
    return (
        <div style={{background: "orange"}}>
            <div>Name: <input value={plan.name}/></div>
            <div>Rewards: <input value={plan.rewards}/></div>
            <div>Fee: <input value={plan.fee}/></div>
            <div>Interest Rate: <input value={plan.interestRate}/></div>
            <button onClick={() => cancelEditing()}>Cancel Editing</button>
            <button onClick={() => save()}>Save</button>
        </div>
    )
}