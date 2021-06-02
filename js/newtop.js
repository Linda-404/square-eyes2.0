const newsContainer = document.querySelector(".news");
const topRatingsContainer = document.querySelector(".top");

const newsContainer2 = document.querySelector(".news2");
const topRatingsContainer2 = document.querySelector(".top2");

const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

const path = window.location.pathname;
const loggedin = checkLoginStatus(path);

function checkLoginStatus(path, loggedin) {
    if (path.includes("loggedin")) {
        loggedin = true;
    }
    return loggedin;
}

async function fetchByTag() {
    try {
        const response = await fetch(url + "?tag=20");
        const results = await response.json();

        console.log(results);

        if (!loggedin){
            newsContainer.innerHTML = "";
            filmContainer(results, newsContainer);
        }
        else {
            newsContainer2.innerHTML = "";
            filmContainer(results, newsContainer2);                 
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

        if (!loggedin){
            topRatingsContainer.innerHTML = "";
            filmContainer(results, topRatingsContainer);
        }
        else {
            topRatingsContainer2.innerHTML = "";
            filmContainer(results, topRatingsContainer2);                 
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchByRating();

function filmContainer(results, container) {
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



// functions logged in

// async function fetchByTag2() {
//     try {
//         const response = await fetch(url + "?tag=20");
//         const results = await response.json();

//         console.log(results);
//         newsContainer2.innerHTML = "";

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             newsContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
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

// fetchByTag2();

// async function fetchByRating2() {
//     try {
//         const response = await fetch(url + "?rating=5");
//         const results = await response.json();

//         console.log(results);
//         topRatingsContainer2.innerHTML = ""; 

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);

//             topRatingsContainer2.innerHTML += `<a href="filmdetailsloggedin.html?id=${results[i].id}" class="filminfo"> 
//                                             <img src="${results[i].images[0].src}" class="film-img">
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

// fetchByRating2();