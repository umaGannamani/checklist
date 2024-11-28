const rules = [
    {
        name: "Valuation Fee Paid",
        field: "isValuationFeePaid",
        condition: (value) => value === true,
    },
    {
        name: "UK Resident",
        field: "isUkResident",
        condition: (value) => value === true,
    },
    {
        name: "Risk Rating Medium",
        field: "riskRating",
        condition: (value) => value === "Medium",
    },
    {
        name: "LTV Below 60%",
        custom: (data) => {
            const loanToValue = (data.loanRequired / data.purchasePrice) * 100;
            return loanToValue < 60;
        },
    },
];

function evaluateRules(data) {
    return rules.map((rule) => {
        const result = rule.custom
            ? rule.custom(data)
            : rule.condition(data[rule.field]);
        return { rule: rule.name, status: result ? "Passed" : "Failed" };
    });
}

module.exports = { evaluateRules };
