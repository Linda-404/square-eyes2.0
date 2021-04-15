const filmContainer = document.querySelector(".film-wrapper");
const topRatingsContainer = document.querySelector(".top_genre");
const popularContainer = document.querySelector(".pop_genre");
const mainContainer = document.querySelector(".main-teaser")
const loadingContainer = document.querySelector(".loading-container")
// const url = "http://squareeyesheadless.local/wp-json/wc/store/products/";
const url = "http://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchFilms() {
    try {
        const response = await fetch(url + "?per_page=100");
        const results = await response.json();

        console.log(results);
    }
    catch (error) {
        console.log(error);
    }
}

fetchFilms();

async function fetchByGenre() {
    try {
        const response = await fetch(url + "?category=16");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            filmContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

fetchByGenre();

async function fetchByGenreAndRating() {
    
    try {
        const response = await fetch(url + "?category=16&rating=5");
        const results = await response.json();

        console.log(results);
        loadingContainer.innerHTML = "";
        // topRatingsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            topRatingsContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="genre-all">
                                            <h4>${results[i].name}</h4>
                                            <div class="ratings">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </a>`;
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreAndRating();

async function fetchByGenreAndTag() {
    
    try {
        const response = await fetch(url + "?category=16&tag=21");
        const results = await response.json();

        console.log(results);
       

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            popularContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

fetchByGenreAndTag();