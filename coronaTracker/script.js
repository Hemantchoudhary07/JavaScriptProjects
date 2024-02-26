const url = 'https://api.rootnet.in/covid19-in/stats/latest';

async function logCovidStats() {
    const response = await fetch(url);
    const covidData = await response.json();

    console.log(covidData.data.summary.confirmedCasesIndian)
    const totalCases = document.querySelector(".totalIndianCases")
    totalCases.innerHTML = covidData.data.summary.confirmedCasesIndian

    console.log(covidData.data.summary.deaths)
    const totalDeaths = document.querySelector(".totalIndianDeaths")
    totalDeaths.innerHTML = covidData.data.summary.deaths

    console.log(covidData.data.summary.discharged)
    const totalDischarged = document.querySelector(".totalIndianDischarged")
    totalDischarged.innerHTML = covidData.data.summary.discharged

    console.log(covidData.data["unofficial-summary"][0].active)
    const totalActive = document.querySelector(".totalIndianActive")
    totalActive.innerHTML = covidData.data["unofficial-summary"][0].active

    const tb = document.querySelector('tbody');
    covidData.data.regional.forEach((values) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${values.loc}</td>
    <td>${values.confirmedCasesIndian}</td>
    <td>${values.deaths}</td><td>${values.discharged}</td>`;
        tb.appendChild(tr);

    });

}

logCovidStats();