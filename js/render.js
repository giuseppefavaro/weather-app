const createSelect = (comuni) => {
    const sidenavSelectDiv = document.querySelector(".sidenav__select");
    
    const optionElements = comuni.map( (comune) =>`<option value="${comune.value}">${comune.name}</option>`);

    sidenavSelectDiv.innerHTML =
    `
    <label for="comuni-select">Select a comune:</label>
    <select name="comuni-select" id="comuni-select">
    <option value="select">Select</option>` 
    + optionElements.join("") +
    `</select>`
}


const createSinglePage = (data) => {
    const boxDiv = document.querySelector(".box");
    boxDiv.innerHTML = data.weather[0].description + data.main.temp +  data.main.temp_max +  data.main.temp_min +  data.main.humidity +  data.visibility  +  data.wind.speed  + data.main.sea_level;
}


export {createSelect, createSinglePage};