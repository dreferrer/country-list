const baseURL = "https://restcountries.com/v3.1/"

function loadJson(url) {
    return fetch(url).then((response) => response.json())
  }


const getCountry = (name) => {
    return loadJson(`${baseURL}/name/${name}`)
}

const getCountries = () => {
    return loadJson(`${baseURL}/all`)
}

getCleanedCountries = () => {
    getCountries()
    .then(data => {
        const countries = data.map(country => {
            const countryName = country.name.common;
            const flag = country.flag;
            const population = country.population;
            const subregion = country.subregion;
            const openStreetMapLink = country.maps.openStreetMaps;
            const array = [];
            array.push(countryName);
            array.push(flag);
            array.push(population);
            array.push(subregion);
            array.push(openStreetMapLink);
            console.log(array);
            
            return array;
        })
    })
}

const getCleanedCountry = (name) => {
  getCountry(name)
  .then(data => {
          const country = data[0];
          const array = [];
          // console.log(country);
          const countryName = country.name.common;
          const flag = country.flag;
          const population = country.population;
          const subregion = country.subregion;
          const openStreetMapLink = country.maps.openStreetMaps;
              array.push(countryName);
              array.push(flag);
              array.push(population);
              array.push(subregion);
              array.push(openStreetMapLink);
              console.log(array);
              return array;
      })
} 

export {getCountry, getCountries, getCleanedCountry, getCleanedCountries};

