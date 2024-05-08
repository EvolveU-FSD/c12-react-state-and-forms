import { useState } from "react"
import PlanList from "./PlanList"
import PlanView from "./PlanView"

export default function PlansPage() {
    const [selectedPlan, setSelectedPlan] = useState()

    function selectPlan(plan) {
        console.log("Updating selected plan to", plan)
        setSelectedPlan(plan)
    }

    function returnToList() {
        console.log("Clearing selected plan")
        setSelectedPlan()
    }

    console.log("Rendering PlansPage with plan", selectedPlan)
    return (
      <div>
        <h1>Plans Page</h1>
        { !selectedPlan && <PlanList selectPlan={selectPlan} /> }
        { selectedPlan && <PlanView planId={selectedPlan.id} returnToList={returnToList} /> }
      </div>
    )
  }
  