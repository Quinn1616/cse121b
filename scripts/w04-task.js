/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Quinn Bastian",
    photo : "images/Quinn.jpg",
    favoriteFoods : ["Steak", "Salmon", "Tacos"],
    hobbies : ["Video Games", "Dirtbiking", "Hiking"],
    placesLived : []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
    place : "Rexburg Idaho",
    length : "8 years"
}
);

myProfile.placesLived.push( 
    {
    place : "Pocatello Idaho",
    length : "20 years"
}
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.querySelector("#places-lived");

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = place.place;
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

