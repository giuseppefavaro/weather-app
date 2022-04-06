import {comuniAG} from "./comuni.js";
import {createSelect, createSinglePage, createNotification} from "./render.js";

// Render select
createSelect(comuniAG);


// Show message when no comune is selected
const comuniSelect = document.querySelector("#comuni-select");
if (comuniSelect.value === "select") {
    createNotification();
}


// Fetch API with change event
comuniSelect.addEventListener("change", (e) => {

    const comuneSelected = e.target.value;

    if (comuneSelected === "select") {
        createNotification();
    } else {

        // console.log(comuneSelected)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${comuneSelected}&appid=1cbb1add7327a490fe3c4104696a56aa&units=metric`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            createSinglePage(data);
        })

    }

})