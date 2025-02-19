document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines();

    document.getElementById("add-medicine-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const price = document.getElementById("price").value.trim();

        if (!name || !price) {
            showMessage("Please fill in all fields", "error");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8080/create", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ name, price })
            });

            const data = await response.json();
            if (response.ok) {
                showMessage(data.message, "success");
                fetchMedicines(); // Refresh list
            } else {
                showMessage(data.error, "error");
            }
        } catch (error) {
            showMessage("Error adding medicine", "error");
        }
    });
});

async function fetchMedicines() {
    try {
        const response = await fetch("http://127.0.0.1:8080/medicines");
        const data = await response.json();
        
        const container = document.getElementById("medicine-container");
        container.innerHTML = ""; // Clear previous content

        if (!data.medicines || data.medicines.length === 0) {
            container.innerHTML = "<p>No medicines found.</p>";
            return;
        }

        data.medicines.forEach(med => {
            const card = document.createElement("div");
            card.className = "medicine-card";
            card.innerHTML = `
                <p><strong>${med.name || "Unknown"}</strong></p>
                <p>Price: $${med.price ?? "N/A"}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        document.getElementById("medicine-container").innerHTML = "<p>Error loading medicines.</p>";
    }
}

function showMessage(message, type) {
    const msgElem = document.getElementById("response-message");
    msgElem.textContent = message;
    msgElem.className = type;
    setTimeout(() => msgElem.textContent = "", 3000);
}