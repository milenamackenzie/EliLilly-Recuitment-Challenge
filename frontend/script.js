/**
 * Medicine Tracker Script
 * 
 * This script handles fetching and adding medicines to the medicine tracker application.
 * It ensures smooth interaction with the backend API and provides a user-friendly experience.
 *
 * Features:
 * - Fetches available medicines from the backend and displays them.
 * - Allows users to add new medicines with a name and price.
 * - Handles errors when the backend is offline and displays an appropriate message.
 */

const API_BASE_URL = "http://127.0.0.1:8080"; // Centralized API reference

document.addEventListener("DOMContentLoaded", () => {
    fetchMedicines(); // Fetch medicines when the page loads

    document.getElementById("add-medicine-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        let price = document.getElementById("price").value.trim();

        if (!name || !price) {
            showMessage("Please fill in all fields", "error");
            return;
        }

        price = parseFloat(price);
        if (isNaN(price) || price < 0) {
            showMessage("Please enter a valid price (positive number, up to two decimal places)", "error");
            return;
        }

        price = price.toFixed(2); // Ensure the price is formatted to two decimal places

        try {
            // Send a POST request to add a new medicine
            const response = await fetch(`${API_BASE_URL}/create`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ name, price })
            });

            const data = await response.json();
            if (response.ok) {
                showMessage(data.message, "success");
                fetchMedicines(); // Refresh the medicine list
            } else {
                showMessage(data.error, "error");
            }
        } catch (error) {
            showOfflineMessage(); // Handle backend offline scenario
        }
    });
});

/**
 * Fetch medicines from the backend API and display them.
 * If the backend is unavailable, it will trigger the offline message.
 */
async function fetchMedicines() {
    try {
        const response = await fetch(`${API_BASE_URL}/medicines`);
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
        showOfflineMessage(); // Handle API failure
    }
}

/**
 * Display a user message on the screen.
 * 
 * @param {string} message - The message to display.
 * @param {string} type - The message type ("success" or "error").
 */
function showMessage(message, type) {
    const msgElem = document.getElementById("response-message");
    msgElem.textContent = message;
    msgElem.className = type;
    setTimeout(() => msgElem.textContent = "", 3000);
}

/**
 * Handle the scenario when the backend service is offline.
 * It replaces the page content with an offline message styled in line with the site's design.
 */
function showOfflineMessage() {
    document.body.innerHTML = `
    <div class="logo" id="logo">
                 <img src="eli-lilly-logo.png" alt="logo">
               </div>
        <div class="container">
            <header>
                <h1>Medicine Tracker</h1>
            </header>
            <main>
                <div class="offline-message">
                    <h2>Sorry, Medicine service is offline.</h2>
                    <p>Please try again later.</p>
                </div>
            </main>
        </div>
    `;
    //const logo = document.createElement("div");
    //disclaimer.className = "logo";
    /*disclaimer.textContent = "Disclaimer: All medicine names and prices used in this application are fictional and do not represent any real medicine(s).";*/
    //document.body.prepend(logo);

    const disclaimer = document.createElement("div");
    disclaimer.className = "disclaimer";
    disclaimer.textContent = "Disclaimer: All medicine names and prices used in this application are fictional and do not represent any real medicine(s).";
    document.body.prepend(disclaimer);
}