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
    const content = document.querySelector(".content");

    // console.log(data)

    content.innerHTML = `

    <section class="box">
    <h1 class="box__h1">${data.name}</h1>

    <div class="box__content">
        <div class="box__img">
            <span class="temperature">${data.main.temp}</span>
            <figure>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" width="200" height="200" alt="weather">
                <figcaption>${data.weather[0].main}</figcaption>
            </figure>
        </div>

        <ul class="box__info">
            <li><strong>Description:</strong> ${data.weather[0].description}</li>
            <li><strong>Wind:</strong>  ${data.wind.speed}</li>
            <li><strong>Max:</strong> ${data.main.temp_max}</li>
            <li><strong>Min:</strong>  ${data.main.temp_min}</li>
        </ul>
    </div>
</section>


<section class="box">
    <h2 class="box__h2">Other details</h2>

    <ul class="box__info box__info--full">
        <li><strong>Humidity:</strong> ${data.main.humidity}</li>
        <li><strong>Visibility:</strong> ${data.main.visibility}</li>     
        <li><strong>Sea Level:</strong> ${data.main.sea_level}</li>
    </ul>
</section>
`;

}


export {createSelect, createSinglePage};