A simple Node.js application that evaluates specific conditions on data fetched from an API and displays the results in a dynamic dashboard.

Features
Fetches data from a provided API.
Evaluates data against a configurable checklist of rules:
Valuation Fee Paid (isValuationFeePaid is true).
UK Resident (isUkResident is true).
Risk Rating (riskRating is "Medium").
Loan-to-Value (LTV) is below 60% (Loan Required / Purchase Price * 100).
Displays the evaluation results (Passed/Failed) in a web-based dashboard.
