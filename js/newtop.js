// const filmContainer = document.querySelector(".film-wrapper, .scrolling-wrapper");
const newsContainer = document.querySelector(".news");
const topRatingsContainer = document.querySelector(".top");

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";


async function fetchByTag() {
    try {
        const response = await fetch(url + "?tag=20");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            newsContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

fetchByTag();

async function fetchByRating() {
    try {
        const response = await fetch(url + "?rating=5");
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            topRatingsContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
                                            <img src="${results[i].images[0].src}" class="film-img">
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

fetchByRating();