
export default function PlanView({ plan, returnToList}) {
    return (
        <div>
            <div>Name: {plan.name}</div>
            <div>Rewards: {plan.rewards}</div>
            <div>Fee: {plan.fee}</div>
            <div>Interest Rate: {plan.interestRate}</div>
            <button onClick={() => returnToList()}>Return to List</button>
        </div>
    )
}
