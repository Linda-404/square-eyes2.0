const filmContainer = document.querySelector(".film-wrapper");
const topRatingsContainer = document.querySelector(".top_genre");
const popularContainer = document.querySelector(".pop_genre");

const url = "http://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchByGenre() {
    try {
        const response = await fetch(url + "?category=19");
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
        const response = await fetch(url + "?category=19&rating=5");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            topRatingsContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

fetchByGenreAndRating();

async function fetchByGenreAndTag() {
    
    try {
        const response = await fetch(url + "?category=19&tag=21");
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