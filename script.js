

const formData = document.getElementById("form");
    const message=document.querySelector(".message");

formData.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

   if (!data.name||!data.email||!data.date||!data.time) {
    message.innerHTML = "Kindly fill all fields";
    setTimeout(() => {
        message.innerHTML = "";  
    }, 5000);

    return; 
}
    
    let appointments=JSON.parse(localStorage.getItem("Appointments"))||[];

    appointments.push(data);
    
    localStorage.setItem("Appointments", JSON.stringify(appointments)); 
    
    window.location.href = "./appointment.html";
});
