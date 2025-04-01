const display = document.getElementById("display_area");

const displayData = () => {
    if (!display) {
        console.error("Element with id 'display_area' not found.");
        return; 
    }

    
    const storedData = JSON.parse(localStorage.getItem("Appointments")) || [];
 
    if (storedData.length > 0) {
      
        storedData.forEach((data, index) => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.setAttribute("key", index);
            div.innerHTML = `
                <span>Name: ${data.name}</span><br>
                <span>Date: ${data.date}</span><br>
                <span>Email: ${data.email}</span><br>
                <span>Time: ${data.time}</span><br>
                <span class="deletebtn" data-index="${index}">DELETE</span>
            `;
            display.appendChild(div);
        });
    } else {
        const div = document.createElement("div");
        div.innerHTML = `<span>No data available</span>`;
        display.appendChild(div); 
    }
};


const deleteAppointment = (e) => {
    if (e.target.classList.contains("deletebtn")) {
        const index = e.target.getAttribute("data-index"); 
        const storedData = JSON.parse(localStorage.getItem("Appointments")) || [];
        
        storedData.splice(index, 1);

        localStorage.setItem("Appointments", JSON.stringify(storedData));

        const card = e.target.closest(".card");
        card.remove();

        displayData();
    }
};


document.querySelector("#display_area").addEventListener("click",deleteAppointment);

document.addEventListener("DOMContentLoaded", displayData);
