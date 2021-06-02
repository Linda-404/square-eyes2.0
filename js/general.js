const filmContainer = document.querySelector(".film-wrapper");
const topRatingsContainer = document.querySelector(".top_genre");
const popularContainer = document.querySelector(".pop_genre");

const filmContainer2 = document.querySelector(".film-wrapper2");
const topRatingsContainer2 = document.querySelector(".top_genre2");
const popularContainer2 = document.querySelector(".pop_genre2");

const genreIds = {
    "action": 16,
    "comedy": 17,
    "drama": 18,
    "horror": 19
};
const path = window.location.pathname;
const loggedin = checkLoginStatus(path);
const genreId = getGenreId();
console.log(genreId);

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

function getGenreId() {
    const loggedindex = path.indexOf('loggedin');
    let pageGenre = "";
    if (loggedindex === -1) {

        pageGenre = path.substr(1, path.indexOf(".html") - 1);
    }
    else {
        pageGenre = path.substr(1, loggedindex - 1);
    }
    
    const genreId = genreIds[pageGenre];
    return genreId;
}

async function fetchByGenre(genre) {
    try {
        const response = await fetch(url + "?category=" + genre);
        const results = await response.json();

        console.log(results);
        if (!loggedin){
            filmContainer.innerHTML = "";
            genreContainer(results, filmContainer);
        }
        else {            
            filmContainer2.innerHTML = "";
            genreContainer(results, filmContainer2);     
        }
        
    }
    catch (error) {
        console.log(error);
    }
}
fetchByGenre(genreId);

function checkLoginStatus(path, loggedin) {
    if (path.includes("loggedin")) {
        loggedin = true;
    }
    return loggedin;
}

function genreContainer(results, container) {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        container.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

async function fetchByGenreAndRating(genre, rating) {
    
    try {
        const response = await fetch(url + "?category=" + genre + "&rating=" + rating);
        const results = await response.json();

        console.log(results);
        if (!loggedin) {
            topRatingsContainer.innerHTML = "";
            genreRatingContainer(results, topRatingsContainer);
        }
        else {
            topRatingsContainer2.innerHTML = "";
            genreRatingContainer(results, topRatingsContainer2);
        }
        

    }
    catch (error) {
        console.log(error);
    }
}
fetchByGenreAndRating(genreId, 5);

function genreRatingContainer(results, container) {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        container.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

async function fetchByGenreAndTag(genre, tag) {
    
    try {
        const response = await fetch(url + "?category=" + genre + "&tag=" + tag);
        const results = await response.json();

        console.log(results);
        if (!loggedin) {
            popularContainer.innerHTML = "";
            genreTagContainer(results, popularContainer);
        }
        else {
            popularContainer2.innerHTML = "";
            genreTagContainer(results, popularContainer2);
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByGenreAndTag(genreId, 21);

function genreTagContainer(results, container) {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);

        container.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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










// functionss logged in

// async function fetchByGenre2(genre) {
//     try {
//         const response = await fetch(url + "?category=" + genre);
//         const results = await response.json();

//         console.log(results);
//         filmContainer2.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             filmContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
//                                             <img src="${results[i].images[0].src}" class="film-img">
//                                             <h4>${results[i].name}</h4>
//                                             <div class="ratings">
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                             </div>
//                                         </a>`;
//         }

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function fetchByGenreAndRating(genre, rating) {
    
//     try {
//         const response = await fetch(url + "?category=" + genre + "&rating=" + rating);
//         const results = await response.json();

//         console.log(results);
//         topRatingsContainer.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             topRatingsContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
//                                             <img src="${results[i].images[0].src}" class="genre-all">
//                                             <h4>${results[i].name}</h4>
//                                             <div class="ratings">
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                             </div>
//                                         </a>`;
//         }

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function fetchByGenreAndRating2(genre, rating) {
    
//     try {
//         const response = await fetch(url + "?category=" + genre + "&rating=" + rating);
//         const results = await response.json();

//         console.log(results);
//         topRatingsContainer2.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             topRatingsContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
//                                             <img src="${results[i].images[0].src}" class="genre-all">
//                                             <h4>${results[i].name}</h4>
//                                             <div class="ratings">
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                                 <i class="fas fa-star"></i>
//                                             </div>
//                                         </a>`;
//         }

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function fetchByGenreAndTag2(genre, tag) {
    
//     try {
//         const response = await fetch(url + "?category=" + genre + "&tag=" + tag);
//         const results = await response.json();

//         console.log(results);
//         popularContainer2.innerHTML = "";
       

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             popularContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
//                                             <img src="${results[i].images[0].src}" class="genre-all">
//                                             <h4>${results[i].name}</h4>
//                                             <div class="ratings">
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                                 <i class="far fa-star"></i>
//                                             </div>
//                                         </a>`;
//         }

//     }
//     catch (error) {
//         console.log(error);
//     }
// }