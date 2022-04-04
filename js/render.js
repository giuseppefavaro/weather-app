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


export {createSelect};