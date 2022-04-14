const cities = [
    "Shanghai",
    "Macao", 
    "Agoo", 
    "New York", 
    "London", 
    "Paris", 
    "Waco", 
    "San Diego"
]

const cityList = document.getElementById("city-list");

cities.forEach(city => {
    const item = document.createElement("li");
    item.setAttribute("class", "city");
    item.innerHTML = city;
    cityList.appendChild(item);
});

function filterCity(){
    const citiesChildren = Array.from(cityList.children);
    const input = document.getElementById("city").value;

    const filtered = citiesChildren.filter(city => city.innerHTML.includes(input));

    citiesChildren.forEach(city => {
        if(filtered.includes(city)){
            city.style.display = "block";
        }
        else{
            city.style.display = "none";
        }
    });
    
}

