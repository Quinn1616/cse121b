/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    templeList.forEach((temple) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
};

/* reset Function */
const reset = function () {
    const templesElement = document.querySelector("#temples");
    const article = templesElement.querySelectorAll("article");
    article.forEach((articles) => {
        templesElement.removeChild(articles);
    });
};

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;

        case 'notutah':
            const nonUtahTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonUtahTemples);
            break;

        case 'older':
            const olderTemples = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case 'all':
            displayTemples(temples);
            break;

        default:
            break;
    }
};


getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });