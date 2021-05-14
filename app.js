let fetchData = document.getElementById("fetch");
let tempHead = document.getElementById("temp");

let card = document.getElementById("contain");

    card.style.display = "none";

fetchData.addEventListener("click", () => {

    let location = document.getElementById("location").value;

    

    url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c7d37383f37163c9f9f3e77ce2bccde7&units=metric`;

    fetch(url).then( async (response) => {

        const wData = await response.json();

        const temp = wData.main.temp;
        const main = wData.weather[0].main;
        const place = wData.name;

        const t = document.getElementById("temp");
        const d = document.getElementById("desc");
        const p = document.getElementById("place");

        
        card.style.display = "block";

        t.innerHTML = temp+" &deg;C";
        d.innerHTML = "You will observe " + main + "!";
        p.innerHTML = place;

        
    //     var contain = document.getElementById("contain").firstElementChild;

    //    contain.appendChild(p);
    //    contain.appendChild(t);
    //    contain.appendChild(d);


    }).catch( err => {

            console.log(err);
    })

})