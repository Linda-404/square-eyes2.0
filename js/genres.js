const actionContainer = document.querySelector(".action_container");
const comedyContainer = document.querySelector(".comedy_container");
const dramaContainer = document.querySelector(".drama_container");
const horrorContainer = document.querySelector(".horror_container");

const url = "http://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchByGenreAction() {
    try {
        const response = await fetch(url + "?category=16");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            actionContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="film-img">
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
                                            <img src="${results[i].images[0].src}" class="film-img">
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
                                            <img src="${results[i].images[0].src}" class="film-img">
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
                                            <img src="${results[i].images[0].src}" class="film-img">
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
        // horrorContainer.innerHTML = `<a href="horror.html" class="dots" >
        //                                 <div class="dot"><i class="fas fa-circle"></i></div>
        //                                 <div class="dot"><i class="fas fa-circle"></i></div>
        //                                 <div class="dot"><i class="fas fa-circle"></i></div>
        //                             </a>`
       
    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreHorror();