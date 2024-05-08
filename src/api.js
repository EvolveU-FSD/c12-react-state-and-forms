const plans = [
    { 
        id: 0,
        name: "Westjet RBC Mastercard",
        fee: 120,
        rewards: "WestJet Dollas",
        interestRate: 20.99
    },
    {
        id: 1,
        name: "BMO World Elite",
        fee: 120,
        rewards: "AirMiles",
        interestRate: 24.00
    },
    {
        id: 2,
        name: "ScotiaBank Visa",
        fee: 0,
        reward: "Cash Back 2%",
        interestRate: 9.99
    }
]


export async function getAllCardPlans() {
    return plans
}

export async function getPlanById(id) {
    return plans.find((plan) => plan.id === id)
}

export async function updatePlan(plan) {
    return plans[plan.id] = plan
}