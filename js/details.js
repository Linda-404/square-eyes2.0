const detailsContainer = document.querySelector(".view-film");
const descriptionContainer = document.querySelector(".description_container")
const plotContainer = document.querySelector(".plot_container")
// const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(queryString);
console.log(params);
console.log(id);

// const url = "http://squareeyesheadless.local/wp-json/wc/store/products/" + id;
const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/" + id;


async function getFilm() {
    detailsContainer.innerHTML = "";
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

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
    catch(error) {
        console.log(error);
        // detailsContainer.innerHTML = displayError("An error occured when calling API");
    }
}

getFilm();