
// Contact Form Functionality

document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        // Stop page refresh
        event.preventDefault();

        // Get input values
        let name = document.getElementById("name").value;

        let email = document.getElementById("email").value;

        let message = document.getElementById("message").value;

        // Display success message
        document.getElementById("response").textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        // Show message in console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear form
        document.getElementById("contactForm").reset();
    }
);
