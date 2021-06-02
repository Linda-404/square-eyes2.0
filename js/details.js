const detailsContainer = document.querySelector(".view-film");
const descriptionContainer = document.querySelector(".description_container");
const plotContainer = document.querySelector(".plot_container");

const detailsContainer2 = document.querySelector(".view-film2");
const descriptionContainer2 = document.querySelector(".description_container2");
const plotContainer2 = document.querySelector(".plot_container2");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
// console.log(queryString);
// console.log(params);
// console.log(id);
const path = window.location.pathname;
const loggedin = checkLoginStatus(path);

function checkLoginStatus(path, loggedin) {
    if (path.includes("loggedin")) {
        loggedin = true;
    }
    return loggedin;
}

// const url = "http://squareeyesheadless.local/wp-json/wc/store/products/" + id;
const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/" + id;

async function getFilm() {
    
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        if (!loggedin){
            detailsContainer.innerHTML = "";
            detailsContainer.innerHTML = `<div class="view-film">
                                    <img src="${results.images[0].src}" class="film">
                                   </div>`;
        
            descriptionContainer.innerHTML = `<div class="film-description">
                                            <h3>Title: ${results.name}</h3>
                                            <h3>Genre: ${results.categories[0].name}</h3>
                                            <div>
                                                <button class="btn">play preview</button>
                                                <a href="signup2.html"><button class="btn">rent for ${results.prices.price},-</button></a>
                                            </div>
                                        </div>`;

            plotContainer.innerHTML = `<div>
                                        <h3>Plot</h3>
                                        <p>${results.short_description}</p>
                                    </div>`
        }
        else {
            detailsContainer2.innerHTML = "";
            detailsContainer2.innerHTML = `<div class="view-film">
                                    <img src="${results.images[0].src}" class="film">
                                   </div>`;
        
            descriptionContainer2.innerHTML = `<div class="film-description">
                                            <h3>Title: ${results.name}</h3>
                                            <h3>Genre: ${results.categories[0].name}</h3>
                                            <div>
                                                <button class="btn">play preview</button>
                                                <a href="signup2.html"><button class="btn">rent for ${results.prices.price},-</button></a>
                                            </div>
                                        </div>`;

            plotContainer2.innerHTML = `<div>
                                        <h3>Plot</h3>
                                        <p>${results.short_description}</p>
                                    </div>`                 
        }

                                        
    }
    catch(error) {
        console.log(error);
        // detailsContainer.innerHTML = displayError("An error occured when calling API");
    }
}

getFilm();

// async function getFilm() {
//     detailsContainer.innerHTML = "";
//     try {
//         const response = await fetch(url);
//         const results = await response.json();

//         console.log(results);

//         detailsContainer.innerHTML = `<div class="view-film">
//                                     <img src="${results.images[0].src}" class="film">
//                                    </div>`;
        
//         descriptionContainer.innerHTML = `<div class="film-description">
//                                             <h3>Title: ${results.name}</h3>
//                                             <h3>Genre: ${results.categories[0].name}</h3>
//                                             <div>
//                                                 <button class="btn">play preview</button>
//                                                 <a href="signup2.html"><button class="btn">rent for ${results.prices.price},-</button></a>
//                                             </div>
//                                         </div>`;

//         plotContainer.innerHTML = `<div>
//                                         <h3>Plot</h3>
//                                         <p>${results.short_description}</p>
//                                     </div>`                                
//     }
//     catch(error) {
//         console.log(error);
//         detailsContainer.innerHTML = displayError("An error occured when calling API");
//     }
// }

// getFilm();

