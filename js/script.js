const teaserContainer = document.querySelector(".pop_teaser");
// const url = "http://squareeyesheadless.local/wp-json/wc/store/products/";
const url = "https://ellesdevdesigns.com/square-eyes/wp-json/wc/store/products/";

async function fetchPopularFilms() {
    
    try {
        const response = await fetch(url + "?tag=21");
        const results = await response.json();

        console.log(results);
       

        for (let i = 0; i < results.length; i++) {
            console.log(results[i]);

            teaserContainer.innerHTML += `<a href="filmdetails.html?id=${results[i].id}" class="filminfo"> 
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

fetchPopularFilms();




const hamburgerMenu = document.querySelector(".hamburgermenu");
const hamburgerNav = document.querySelector(".hamburgernav");

function accessDropdown() {
    function hamburger() {
        hamburgerNav.classList.toggle("show");
    }
}

hamburgerMenu.onclick = accessDropdown();

