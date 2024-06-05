
// pega dados das zonas mortas do json
const getData = async () => {
  try {
    const response = await fetch("../utils/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// coloca as opcoes no select e coloca os eventos nas opcoes
const setCoords = async () => {
  const coords = await getData();
  const selectCoordsEl = document.querySelector("#selectCoords");

  coords.forEach((item) => {
    const optionEl = document.createElement("option");
    optionEl.value = JSON.stringify(item); 
    optionEl.textContent = `${item.country} - ${item.system}`;

    selectCoordsEl.appendChild(optionEl);
  });

  selectCoordsEl.addEventListener("change", (e) => {
    const selectedOption = JSON.parse(e.target.value); 
    changeMap(selectedOption)
  });


  const initialOption = JSON.parse(selectCoordsEl.options[0].value);
  changeMap(initialOption)
};

// mostra o mapa e descricao da zona escolida
const changeMap = (zone)=>{
  showMap(zone.lat, zone.long);
  showDesc(zone.country, zone.system, zone.comment);
}

// recebe as coordendas e exibe no mapa
const showMap = (lat, long) => {
  const frameContainer = document.querySelector("#frame-container");

  if (!isNaN(lat) && !isNaN(long)) {
    const link = `https://www.google.com/maps?q=${lat},${long}&z=5&output=embed&t=k`;


    frameContainer.innerHTML = `<iframe src=${link} style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    
  } else {
    frameContainer.textContent = "Invalid coordinates format";
  }
};

// mostra a descricao detalhada da zona
const showDesc = (country, system, desc) => {
  const h2 = document.querySelector("#mapa  h2");
  const h4 = document.querySelector("#mapa  h4");
  const p = document.querySelector("#mapa p");

  h2.textContent = country;
  h4.textContent = system;
  p.textContent = desc;
};

window.addEventListener("DOMContentLoaded", setCoords);
