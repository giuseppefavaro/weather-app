import {comuniAG} from "./comuni.js";
import {getAPI, createSelect, createSinglePage, createNotification} from "./functions.js";

// Render select ***********************
createSelect(comuniAG);


// No comune selected ******************
const comuniSelect = document.querySelector("#comuni-select");
if (comuniSelect.value === "select") {
    createNotification();
}


// Fetch API with change event *********
comuniSelect.addEventListener("change", (e) => {

    const comuneSelected = e.target.value;

    if (comuneSelected === "select") {
        createNotification();
    } else {
        // console.log(comuneSelected)
        getAPI(comuneSelected).then((resultAPI) => createSinglePage(resultAPI));
    }

})