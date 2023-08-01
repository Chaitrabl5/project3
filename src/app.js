import httpclient from "./httpclient";
import ui from "./ui";

 function getCountries(){
    httpclient.get('http://localhost:9999/countries')
    .then(countries =>ui.showCountries(countries) )
    
}


function getStates(){
    const SelectedCountry = document.getElementById("country");
    ui.countries.forEach(country => {
    if(country == SelectedCountry){
        httpclient.get('http://localhost:9999/countries')
    .then(states => ui.showStates(states))
        ui.showStates(states)

    }
    });
     
    
 
}
document.addEventListener('DOMContentLoaded',getCountries)
document.addEventListener('DOMContentLoaded',getStates)

