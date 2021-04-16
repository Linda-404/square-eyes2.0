const actionContainer = document.querySelector(".action_container");
const comedyContainer = document.querySelector(".comedy_container");
const dramaContainer = document.querySelector(".drama_container");
const horrorContainer = document.querySelector(".horror_container");

const actionContainer2 = document.querySelector(".action_container2");
const comedyContainer2 = document.querySelector(".comedy_container2");
const dramaContainer2 = document.querySelector(".drama_container2");
const horrorContainer2 = document.querySelector(".horror_container2");

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchByGenreAction() {
    try {
        const response = await fetch(url + "?category=16");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            actionContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreAction();

async function fetchByGenreComedy() {
    try {
        const response = await fetch(url + "?category=17");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            comedyContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreComedy();

async function fetchByGenreDrama() {
    try {
        const response = await fetch(url + "?category=18");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            dramaContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreDrama();

async function fetchByGenreHorror() {
    try {
        const response = await fetch(url + "?category=19");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            horrorContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }
       
    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreHorror();

async function fetchByGenreAction2() {
    try {
        const response = await fetch(url + "?category=16");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            actionContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreAction2();

async function fetchByGenreComedy2() {
    try {
        const response = await fetch(url + "?category=17");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            comedyContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreComedy2();

async function fetchByGenreDrama2() {
    try {
        const response = await fetch(url + "?category=18");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            dramaContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreDrama2();

async function fetchByGenreHorror2() {
    try {
        const response = await fetch(url + "?category=19");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            horrorContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </a>`;
        }
       
    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreHorror2();