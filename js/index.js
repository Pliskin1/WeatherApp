const loadData = () =>{
    let target = document.querySelector('#target');
    const api = fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=42.565124&lon=19.079240')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        target = data.properties.meta.updated_at;
        let htmlSet = document.querySelector('#dataSet');
        data.properties.timeseries.forEach(set =>{
            htmlSet.innerHTML += `${set.data.instant.details.air_temperature} ${data.properties.meta.units.air_temperature === 'celsius' ? '°C' : '°F'} (${formatDate(set.time)} : ${formatTime(set.time)})<br>`;
            console.log(set.time.split("T")[1].substring(0,5));
        })
    })
    console.log("CURRENT TIME:")
    console.log()
}


const formatDate = (date) =>`${date.split("T")[0].split('-')[2]}-${date.split("T")[0].split('-')[1]}-${date.split("T")[0].split('-')[0]}`;

const formatTime = (time) => `${time.split('T')[1].slice(0,-1)}`;

const formatUnits = (unit) => unit;


loadData();