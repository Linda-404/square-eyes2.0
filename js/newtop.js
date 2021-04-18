const newsContainer = document.querySelector(".news");
const topRatingsContainer = document.querySelector(".top");

const newsContainer2 = document.querySelector(".news2");
const topRatingsContainer2 = document.querySelector(".top2");

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";


async function fetchByTag() {
    try {
        const response = await fetch(url + "?tag=20");
        const results = await response.json();

        console.log(results);
        newsContainer.innerHTML = "";

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
        topRatingsContainer.innerHTML = "";

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

// functions logged in

async function fetchByTag2() {
    try {
        const response = await fetch(url + "?tag=20");
        const results = await response.json();

        console.log(results);
        newsContainer2.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            newsContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
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

fetchByTag2();

async function fetchByRating2() {
    try {
        const response = await fetch(url + "?rating=5");
        const results = await response.json();

        console.log(results);
        topRatingsContainer2.innerHTML = ""; 

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            topRatingsContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
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

fetchByRating2();