const filmContainer = document.querySelector(".film-wrapper");
const topRatingsContainer = document.querySelector(".top_genre");
const popularContainer = document.querySelector(".pop_genre");

const filmContainer2 = document.querySelector(".film-wrapper2");
const topRatingsContainer2 = document.querySelector(".top_genre2");
const popularContainer2 = document.querySelector(".pop_genre2");

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchByGenre(genre) {
    try {
        const response = await fetch(url + "?category=" + genre);
        const results = await response.json();

        console.log(results);
        
        filmContainer.innerHTML = "";
        genreContainer(results, filmContainer);
    
        filmContainer2.innerHTML = "";
        genreContainer(results, filmContainer2);     
        

    }
    catch (error) {
        console.log(error);
    }
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

        topRatingsContainer.innerHTML = "";
        genreRatingContainer(results, topRatingsContainer);

        topRatingsContainer2.innerHTML = "";
        genreRatingContainer(results, topRatingsContainer2);
        

    }
    catch (error) {
        console.log(error);
    }
}

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
        popularContainer.innerHTML = "";
        genreTagContainer(results, popularContainer);

        popularContainer2.innerHTML = "";
        genreTagContainer(results, popularContainer2);

    }
    catch (error) {
        console.log(error);
    }
}

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