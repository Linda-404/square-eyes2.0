const actionContainer = document.querySelector(".action_container");
const comedyContainer = document.querySelector(".comedy_container");
const dramaContainer = document.querySelector(".drama_container");
const horrorContainer = document.querySelector(".horror_container");

const actionContainer2 = document.querySelector(".action_container2");
const comedyContainer2 = document.querySelector(".comedy_container2");
const dramaContainer2 = document.querySelector(".drama_container2");
const horrorContainer2 = document.querySelector(".horror_container2");
// var response;
// var data = "";
// var html = "";
const genreIds = {
    "action": 16,
    "comedy": 17,
    "drama": 18,
    "horror": 19
};


const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

const path = window.location.pathname;
const loggedin = checkLoginStatus(path);

function checkLoginStatus(path, loggedin) {
    if (path.includes("loggedin")) {
        loggedin = true;
    }
    return loggedin;
}

async function fetchByGenre(genre, container) {
    try {
        const response = await fetch(url + "?category=" + genre);
        const results = await response.json();

        console.log(results);

        genresContainer(results, container);

    }
    catch (error) {
        console.log(error);
    }
}

if (!loggedin) {
    fetchByGenre(genreIds["action"], actionContainer);
    fetchByGenre(genreIds["comedy"], comedyContainer);
    fetchByGenre(genreIds["drama"], dramaContainer);
    fetchByGenre(genreIds["horror"], horrorContainer);
}
else {
    fetchByGenre(genreIds["action"], actionContainer2);
    fetchByGenre(genreIds["comedy"], comedyContainer2);
    fetchByGenre(genreIds["drama"], dramaContainer2);
    fetchByGenre(genreIds["horror"], horrorContainer2);
}

function genresContainer(results, container) {
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



// async function fetchByGenreAction2() {
//     try {
//         const response = await fetch(url + "?category=16");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, actionContainer2);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreAction2();

// async function fetchByGenreComedy2() {
//     try {
//         const response = await fetch(url + "?category=17");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, comedyContainer2);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreComedy2();

// async function fetchByGenreDrama2() {
//     try {
//         const response = await fetch(url + "?category=18");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, dramaContainer2);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreDrama2();

// async function fetchByGenreHorror2() {
//     try {
//         const response = await fetch(url + "?category=19");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, horrorContainer2);
       
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreHorror2();


// async function fetchByGenreAction() {
//     try {
//         const response = await fetch(url + "?category=16");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, actionContainer);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreAction();

// async function fetchByGenreComedy() {
//     try {
//         const response = await fetch(url + "?category=17");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, comedyContainer);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// fetchByGenreComedy();

// async function fetchByGenreDrama() {
//     try {
//         const response = await fetch(url + "?category=18");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, dramaContainer);

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreDrama();

// async function fetchByGenreHorror() {
//     try {
//         const response = await fetch(url + "?category=19");
//         const results = await response.json();

//         console.log(results);

//         genresContainer(results, horrorContainer);
       
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchByGenreHorror();