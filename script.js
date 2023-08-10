let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            let countryData = data[0];

            let flag = `<img src="${countryData.flags.svg}" class="flag-img">`;
            let country = countryData.name.common;
            let capital = countryData.capital[0];
            let continent = countryData.continents[0];
            let population = countryData.population;
            let currencyName = countryData.currencies[Object.keys(countryData.currencies)[0]].name;
            let currencyCode = Object.keys(countryData.currencies)[0];
            let languages = Object.values(countryData.languages).toString().split(",").join(", ");

            let output = `
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Flag:</h4>
                        <div>${flag}</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Country:</h4>
                        <div>${country}</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <div>${capital}</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent:</h4>
                        <div>${continent}</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <div>${population}</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <div>${currencyName} (${currencyCode})</div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Language:</h4>
                        <div>${languages}</div>
                    </div>
                </div>
            `;

            result.innerHTML = output;
        })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});