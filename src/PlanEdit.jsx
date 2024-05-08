import { useState, useEffect } from "react"

export default function PlanEdit({plan, cancelEditing, save}) {
    const [name, setName] = useState(plan.name)
    const [rewards, setRewards] = useState(plan.rewards)
    const [fee, setFee] = useState(plan.fee)
    const [interestRate, setInterestRate] = useState(plan.interestRate)

    const [validationError, setValidationError] = useState('')


    useEffect(() => {
        let errorMessage = ''
        if (Number.isNaN(parseFloat(fee)))  {
            errorMessage += "Fee must be a number"
        }
        setValidationError(errorMessage)
    }, [name, rewards, fee, interestRate])

    function update(setterFunction) {
        return (e) => setterFunction(e.target.value)
    }

    function onSave() {
        save({
            name,
            rewards, 
            fee, 
            interestRate
        })
    }

    return (
        <div style={{background: "orange"}}>
            <div>Name: <input value={name} onChange={update(setName)}/></div>
            <div>Rewards: <input value={rewards} onChange={update(setRewards)}/></div>
            <div>Fee: <input value={fee} onChange={update(setFee)}/></div>
            <div>Interest Rate: <input value={interestRate} onChange={update(setInterestRate)}/></div>
            <button onClick={() => cancelEditing()}>Cancel Editing</button>
            <button disabled={validationError !== ''} onClick={onSave}>Save</button>
            { validationError }
        </div>
    )
}