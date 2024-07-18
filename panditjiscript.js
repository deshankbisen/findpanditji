document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
// Code for Pandit Ji Registration Popup
    const registerBtn = document.getElementById("registerPanditjiBtn");
    const popup = document.getElementById("panditjiPopup");
    const closeBtn = document.querySelector(".popup .close");
    const form = document.getElementById("panditjiForm");

    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            popup.style.display = "block";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = new FormData(form);

            fetch('register_panditji.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Pandit Ji registered successfully!");
                    form.reset();
                    popup.style.display = "none";
                } else {
                    alert("Error registering Pandit Ji.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    }
});
