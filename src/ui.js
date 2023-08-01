class UI{
    constructor(){
        this.countries = document.getElementById('countries')
        this.states = document.querySelector('#states')
   
    }

    showCountries(countries){
        let output = ''
        countries.forEach(country =>{
            output += 
            `

<option value=${country.country}>${country.country}</option>

`
        })
        this.countries.innerHTML = output
    }

    showStates(states){
        let output = ''
        countries.forEach(states =>{
            output += 
            `

<option value=${country.states}>${country.states}</option>

`
        })
        this.states.innerHTML = output
    }

}
export default new UI()