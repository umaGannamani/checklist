document.addEventListener("DOMContentLoaded", async () => {
    const loading = document.getElementById("loading");
    const resultsTable = document.getElementById("results-table");
    const resultsBody = document.getElementById("results-body");

    try {
        // Fetch results from the server
        const response = await fetch("/api/checklist");
        if (!response.ok) throw new Error("Failed to fetch checklist results.");

        const results = await response.json();
        loading.style.display = "none";
        resultsTable.style.display = "table";

        // Populate the table with results
        results.forEach((result) => {
            const row = document.createElement("tr");
            const ruleCell = document.createElement("td");
            const statusCell = document.createElement("td");

            ruleCell.textContent = result.rule;
            statusCell.textContent = result.status;
            statusCell.className = result.status.toLowerCase();

            row.appendChild(ruleCell);
            row.appendChild(statusCell);
            resultsBody.appendChild(row);
        });
    } catch (error) {
        loading.textContent = "Error loading data.";
        console.error(error);
    }
});
