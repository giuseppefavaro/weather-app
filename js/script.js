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