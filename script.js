document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
            formMessage.textContent = "Thank you for visiting, " + nameInput.value.trim() +
                       "! We will contact you at " + emailInput.value.trim() + ".";
            form.reset();
            document.getElementById("counter").textContent = "100 characters remaining";
        } else {
            alert("Please fill out both Name and Email fields.");
        }
    });

    //change to darmode
    const themeButton = document.getElementById("themeButton");
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // 
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(function (row) {
        let originalColor = "";

        row.addEventListener("mouseover", function () {
            originalColor = row.style.backgroundColor;
            row.style.backgroundColor = document.body.classList.contains("dark-mode") ? "#383838" : "#e0d3c5";
        });

        row.addEventListener("mouseout", function () {
            row.style.backgroundColor = originalColor;
        });
    });
//
    
    const items = document.querySelectorAll(".item");
    const total = document.getElementById("total");

    items.forEach(function (item) {
        item.addEventListener("change", function () {
            let sum = 0;
            items.forEach(function (chk) {
                if (chk.checked) {
                    sum += parseInt(chk.value, 10);
                }
            });
            total.textContent = "Total: Rs. " + sum;
        });
    });

    //
    const birthYear = document.getElementById("birth-year");
    const ageMessage = document.getElementById("age-message");

    birthYear.addEventListener("input", function () {
        const year = parseInt(birthYear.value.trim(), 10);
        if (!isNaN(year) && birthYear.value.trim().length === 4) {
            const age = 2026 - year;

            if (age <= 25 || age >= 60) {
                ageMessage.textContent = "Age: " + age + " - You qualify for a special discount!";
                ageMessage.style.color = "#2e7d32";
            } else {
                ageMessage.textContent = "Age: " + age + " - Standard prices apply.";
                ageMessage.style.color = "#555";
            }
        } else {
            ageMessage.textContent = "";
        }
    });

    //
    const readButton = document.getElementById("readButton");
    const extraText = document.getElementById("extraText");

    readButton.addEventListener("click", function () {
        if (extraText.style.display === "none" || extraText.style.display === "") {
            extraText.style.display = "block";
            readButton.textContent = "Read Less";
        } else {
            extraText.style.display = "none";
            readButton.textContent = "Read More";
        }
    });

   // applying filter 
    const allButton = document.getElementById("allButton");
    const drinksButton = document.getElementById("drinksButton");
    const pastriesButton = document.getElementById("pastriesButton");
    const menuItems = document.querySelectorAll(".menu-item");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function setActiveFilter(activeBtn) {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        activeBtn.classList.add("active");
    }

    allButton.addEventListener("click", function () {
        setActiveFilter(allButton);
        menuItems.forEach(item => item.style.display = "");
    });

    drinksButton.addEventListener("click", function () {
        setActiveFilter(drinksButton);
        menuItems.forEach(function (item) {
            item.style.display = item.classList.contains("drink") ? "" : "none";
        });
    });

    pastriesButton.addEventListener("click", function () {
        setActiveFilter(pastriesButton);
        menuItems.forEach(function (item) {
            item.style.display = item.classList.contains("pastry") ? "" : "none";
        });
    });

    //opening hours
    const hour = new Date().getHours();
    const status = document.getElementById("status");

    if (hour >= 8 && hour < 20) {
        status.textContent = "We are Open!";
        status.style.color = "#4caf50";
    } else {
        status.textContent = "Closed - Open at 8 AM";
        status.style.color = "#f44336";
    }

  
    const notes = document.getElementById("special-notes");
    const counter = document.getElementById("counter");

    notes.addEventListener("input", function () {
        const remaining = 100 - notes.value.length;
        counter.textContent = remaining + " characters remaining";
    });

});