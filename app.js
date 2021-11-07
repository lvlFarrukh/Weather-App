document.getElementById('button-addon2').addEventListener('click', async () => {
    const API_KEY = "ace48705f2625b4b4f4592c9f95ae6e4";
    const city = document.getElementById('city-input').value
    let card = ``;

    if (city !== "") {
        await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                console.log(response)
                let data = response?.data;
                card = 
                `
                <img src="http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                <h3 style="text-align: center;">${data?.main?.temp} &#176;C</h3>
                <div class="card-body">
                <h5 class="card-title" style="text-align: center">${data?.name}</h5>
                <p class="card-text" style="text-align: center">${data?.weather[0]?.main}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" style="text-align: center">Wind Speed: ${data?.wind?.speed} meter/sec</li>
                <li class="list-group-item" style="text-align: center">Calculation Time Date: ${new Date(data?.dt * 1000).toLocaleString()}</li>
                </ul>
                `
                document.getElementById('temp-card').innerHTML = card
            })
            .catch((error) => console.error(error));
    }
    else {
        document.getElementById('temp-card').innerHTML = ``
    }
})
