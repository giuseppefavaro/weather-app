// Fetch API *******************************************************************

const getAPI = async (comuneSelected) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${comuneSelected}&appid=1cbb1add7327a490fe3c4104696a56aa&units=metric`)

    if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        return data 

    // API not reachable
    } else {
        // console.log(response.status)
        const content = document.querySelector(".content");
        content.innerHTML = `
        <section class="box notification-404">
        <p>API currently not reachable</p>
        </section>`;
    }
    
}



// Render tag select ***********************************************************

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



// Render single comume *********************************************************

const createSinglePage = (data) => {
    const content = document.querySelector(".content");

    // console.log(data)

    content.innerHTML = `

    <section class="box">
        <h1 class="box__h1">${data.name}</h1>

        <div class="box__content">
            <div class="box__img">
                <span class="temperature">${Math.floor(data.main.temp)}°</span>
                <figure>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" width="200" height="200" alt="weather">
                    <figcaption>${data.weather[0].main}</figcaption>
                </figure>
            </div>

            <ul class="box__info">
                <li><i class="fa-solid fa-note-sticky"></i> <strong>Description:</strong> ${data.weather[0].description}</li>
                <li><i class="fa-solid fa-temperature-full"></i> <strong>Max:</strong> ${Math.floor(data.main.temp_max)}°</li>
                <li><i class="fa-solid fa-temperature-empty"></i> <strong>Min:</strong>  ${Math.floor(data.main.temp_min)}°</li>
                <li><i class="fa-solid fa-person"></i> <strong>Perceived:</strong> ${Math.floor(data.main.feels_like)}°</li>
                <li><i class="fa-solid fa-wind"></i> <strong>Wind:</strong>  ${data.wind.speed} m/s</li>
            </ul>
        </div>
    </section>


    <section class="box">
        <h2 class="box__h2">Other details</h2>
        <ul class="box__info box__info--full">
            <li><i class="fa-solid fa-temperature-half"></i> <strong>Humidity:</strong> ${data.main.humidity}%</li>
            <li><i class="fa-solid fa-eye"></i> <strong>Visibility:</strong> ${data.visibility} m</li>     
            <li><i class="fa-solid fa-water"></i> <strong>Sea Level:</strong> ${data.main.sea_level} hPa</li>
            <li><i class="fa-solid fa-cloud"></i> <strong>Clouds:</strong> ${data.clouds.all}%</li>
        </ul>
    </section>
`;

}



// Message when no comune is selected *********************************************************

const createNotification = () => {
    const content = document.querySelector(".content");
    content.innerHTML = `
    <section class="notification">
        <h1>Find and view today's weather in the province of Agrigento</h1>
        <p>Please <strong>select</strong> a comune...</p>
        <figure>
            <img src="./img/notification.png" width="854" height="435" alt="select comune">
        </figure>
    </section>
`;
} 


export {getAPI, createSelect, createSinglePage, createNotification};