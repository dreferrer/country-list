export class Country{

    constructor(name, flag, population, subregion, map){
        this.name = name;
        this.flag = flag;
        this.population = population;
        this.subregion = subregion;
        this.map = map;
    }

    generateElement(){
        const html = `<div class="country--card">
		                <p class="country--flag">${this.flag}</p>
		            <div class="country--info">
				        <h1>${this.name}</h1>
				        <p>population: ${this.population}</p>
				        <p>region: ${this.subregion} </p>
		            </div>
		                <a class="country--map" href="${this.map}"  target="_blank">
				        <span class="map">📍</span>
		                </a>
                    </div>`;

                    return html;
    }

    render(){
        const element = this.generateElement();
        const container = document.querySelector(".results");
        container.insertAdjacentHTML = element;
    }
    
}