"use strict"

import {getCleanedCountries, getCleanedCountry, getCountries, getCleanedCountry} from "/src/api.js"
import { Country } from "./Modules/Country";


// getCleanedCountries();

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', (event) => {
    const value = input.value;
    getCleanedCountry(value)
    preventDefault();
})

getCleanedCountries().then(data => {
    data.forEach(element => {
        const country = new Country(element[0], element[1], element[2], element[3], element[4])
        country.render();
    });
})













