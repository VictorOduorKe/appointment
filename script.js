const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = event.target.querySelector(".message");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Trim whitespace in case users leave extra spaces
    data.name = data.name.trim();
    data.email = data.email.trim();
    data.date = data.date.trim();
    data.time = data.time.trim();

    // Validation for required fields
    if (!data.name || !data.email || !data.date || !data.time) {
        message.innerHTML = "Kindly fill all fields";
        setTimeout(() => {
            message.innerHTML = "";  
        }, 5000);
        return; 
    }

    // Retrieve existing appointments or initialize an empty array
    let appointments = JSON.parse(localStorage.getItem("Appointments")) || [];

    // Add the new appointment
    appointments.push(data);

    // Save appointments to localStorage
    localStorage.setItem("Appointments", JSON.stringify(appointments)); 

    // Success message and redirection
    message.innerHTML = "Appointment Made Successfully";
    setTimeout(() => {
        message.innerHTML = "";  
        window.location.href = "./appointment.html";
    }, 5000);
});
