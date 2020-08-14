const select = document.querySelector(".js-selectCountry");
const COUNTRY = "country";

// function t(elmnt, value){
//     for(let i = 0; i< elmnt.options.length; i++){
//         if(Number(elmnt.options[i].value) === value){
//             elmnt.selectedIndex = i;
//         }
//     }
    
// }
function loadCountry(text){
    const currentCountry = localStorage.getItem(COUNTRY);
    if(currentCountry === null){
        localStorage.setItem(COUNTRY, text);
    } else {
        alert('ddd');
    }
}

function selectCountry(e){
    
    const country =  e.target.options[e.target.value].text;
    loadCountry(country);
    
}

function init(){
    // t(select,3);
    select.addEventListener("change", selectCountry);
    // select.options[2].text
    // console.log(select.options[2].text)
    // console.log(length);
}

init();


// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
