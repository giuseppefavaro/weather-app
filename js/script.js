import {comuniAG} from "./comuni.js";
import {createSelect} from "./render.js";

// Render select
createSelect(comuniAG);


// Show message when no comune is selected
const comuniSelect = document.querySelector("#comuni-select");
const contentComuneDiv = document.querySelector(".content__comune");

if (comuniSelect.value === "select") {
    contentComuneDiv.innerHTML = "Please select a comune";
}


// Fetch API with change event
comuniSelect.addEventListener("change", (e) => {

    const comuneSelected = e.target.value;

    if (comuneSelected === "select") {
        contentComuneDiv.innerHTML = "Please select a comune";
    } else {

        // console.log(comuneSelected)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${comuneSelected}&appid=1cbb1add7327a490fe3c4104696a56aa`)
        .then(response => response.json())
        .then(data => {
            contentComuneDiv.innerHTML = data.weather[0].description + data.name;
            console.log(data);
        })

    }

})