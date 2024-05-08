export default function PlanDetail({plan, startEditing}) {
    return (
        <div style={{background: "blue"}}>
            <div>Name: {plan.name}</div>
            <div>Rewards: {plan.rewards}</div>
            <div>Fee: {plan.fee}</div>
            <div>Interest Rate: {plan.interestRate}</div>
            <button onClick={() => startEditing()}>Start Editing</button>
        </div>
    )
}