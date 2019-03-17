window.onload = displayAllMovies;

const urlVideos = [
    ['tt0458339', 'https://www.youtube.com/embed/mGqYQog6biY'],
    ['tt4154664', 'https://www.youtube.com/embed/Z1BCujX3pw8'],
    ['tt0371746', 'https://www.youtube.com/embed/8hYlB38asDY'],
    ['tt1228705', 'https://www.youtube.com/embed/BoohRoVA9WQ'],
    ['tt0800080', 'https://www.youtube.com/embed/xbqNb2PFKKA'],
    ['tt0800369', 'https://www.youtube.com/embed/JOddp-nlNvQ'],
    ['tt0848228', 'https://www.youtube.com/embed/eOrNdBpGMv8'],
    ['tt1300854', 'https://www.youtube.com/embed/oYSD2VQagc4'],
    ['tt1981115', 'https://www.youtube.com/embed/npvJ9FTgZbM'],
    ['tt1843866', 'https://www.youtube.com/embed/7SlILk2WMTI'],
    ['tt2015381', 'https://www.youtube.com/embed/d96cjJhvlMA'],
    ['tt3896198', 'https://www.youtube.com/embed/duGqrYw4usE'],
    ['tt2395427', 'https://www.youtube.com/embed/JAUoeqvedMo'],
    ['tt0478970', 'https://www.youtube.com/embed/pWdKf3MneyI'],
    ['tt3498820', 'https://www.youtube.com/embed/dKrVegVI0Us'],
    ['tt2250912', 'https://www.youtube.com/embed/1XW1Ygatsz4'],
    ['tt1211837', 'https://www.youtube.com/embed/HSzx-zryEgM'],
    ['tt1825683', 'https://www.youtube.com/embed/xjDjIWPwcPU'],
    ['tt3501632', 'https://www.youtube.com/embed/ue80QwXMRHg'],
    ['tt5095030', 'https://www.youtube.com/embed/UUkn-enk2RU'],
    ['tt4154756', 'https://www.youtube.com/embed/6ZfuNTqbHE8']
];

const whereToWatch = [
    ['tt0458339', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt4154664', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt0371746', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1228705', 'STREAMING: Amazon Prime, Hulu.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt0800080', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt0800369', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt0848228', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1300854', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1981115', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1843866', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt2015381', 'STREAMING: FX until abril', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt3896198', 'STREAMING: Netflix.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt2395427', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt0478970', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt3498820', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt2250912', 'STREAMING: Starz until july', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1211837', 'STREAMING: Not Available', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt1825683', 'STREAMING: Netflix.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt3501632', 'STREAMING: Netflix.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt5095030', 'STREAMING: Netflix.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube'],
    ['tt4154756', 'STREAMING: Netflix.', 'BUY/RENT: Amazon; Google Play; iTunes; Vudu; Youtube']
];

const reviews = [
    ['tt0458339', 'https://www.imdb.com/title/tt0458339/reviews?ref_=tt_ql_3'],
    ['tt4154664', 'https://www.imdb.com/title/tt4154664/reviews?ref_=tt_ql_3'],
    ['tt0371746', 'https://www.imdb.com/title/tt0371746/reviews?ref_=tt_ql_3'],
    ['tt1228705', 'https://www.imdb.com/title/tt1228705/reviews?ref_=tt_ql_3'],
    ['tt0800080', 'https://www.imdb.com/title/tt0800080/reviews?ref_=tt_ql_3'],
    ['tt0800369', 'https://www.imdb.com/title/tt0800369/reviews?ref_=tt_ql_3'],
    ['tt0848228', 'https://www.imdb.com/title/tt0848228/reviews?ref_=tt_ql_3'],
    ['tt1300854', 'https://www.imdb.com/title/tt1300854/reviews?ref_=tt_ql_3'],
    ['tt1981115', 'https://www.imdb.com/title/tt1981115/reviews?ref_=tt_ql_3'],
    ['tt1843866', 'https://www.imdb.com/title/tt1843866/reviews?ref_=tt_ql_3'],
    ['tt2015381', 'https://www.imdb.com/title/tt2015381/reviews?ref_=tt_ql_3'],
    ['tt3896198', 'https://www.imdb.com/title/tt3896198/reviews?ref_=tt_ql_3'],
    ['tt2395427', 'https://www.imdb.com/title/tt2395427/reviews?ref_=tt_ql_3'],
    ['tt0478970', 'https://www.imdb.com/title/tt0478970/reviews?ref_=tt_ql_3'],
    ['tt3498820', 'https://www.imdb.com/title/tt3498820/reviews?ref_=tt_ql_3'],
    ['tt2250912', 'https://www.imdb.com/title/tt2250912/reviews?ref_=tt_ql_3'],
    ['tt1211837', 'https://www.imdb.com/title/tt1211837/reviews?ref_=tt_ql_3'],
    ['tt1825683', 'https://www.imdb.com/title/tt1825683/reviews?ref_=tt_ql_3'],
    ['tt3501632', 'https://www.imdb.com/title/tt3501632/reviews?ref_=tt_ql_3'],
    ['tt5095030', 'https://www.imdb.com/title/tt5095030/reviews?ref_=tt_ql_3'],
    ['tt4154756', 'https://www.imdb.com/title/tt4154756/reviews?ref_=tt_ql_3']
];

const createNode = (element) => {
    return document.createElement(element);
};
const appendNode = (parent, element) => {
    return parent.appendChild(element);
};

const displayMovies = (data) => {
    const mainDiv = document.getElementById("moviesDiv");
    let div = createNode("div");
    div.setAttribute("class", "movieDiv")
    let img = createNode("img");
    img.setAttribute('id', data.imdbID);
    img.setAttribute("class", "poster")
    img.addEventListener('click', showInfoModal);
    let span = createNode("span");
    span.setAttribute("class", "movieName")
    img.src = data.Poster;
    span.innerHTML = data.Title;
    appendNode(div, img);
    appendNode(div, span);
    appendNode(mainDiv, div);
};
const removeChild = (parent) => {
    const parentElement = document.getElementById(parent);
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    };
}
const url = "https://www.omdbapi.com/?apikey="
const apikey = "8f24c86a&";
const movies = [
    "t=captain+america&y=2011",
    "t=captain+marvel",
    "t=iron+man",
    "t=iron+man+2",
    "t=the+incredible+hulk",
    "t=thor",
    "t=the+avengers",
    "t=iron+man+3",
    "t=Thor%3A+The+Dark+World",
    "t=Captain+America%3A+The+Winter+Soldier",
    "t=guardians+of+the+galaxy",
    "t=guardians+of+the+galaxy+vol.+2",
    "t=Avengers%3A+Age+of+Ultron",
    "t=Ant-Man",
    "t=Captain+America%3A+Civil+War",
    "t=Spider-man%3A+Homecoming",
    "t=Doctor+Strange",
    "t=Black+Panther",
    "t=Thor+Ragnarok",
    "t=Ant-man+and+the+wasp",
    "t=Avengers+infinity+war"
];

async function displayAllMovies() {
    removeChild("moviesDiv");
    for (let i = 0; i < movies.length; i++) {
        let resp = await fetch(url + apikey + movies[i]);
        let data = await resp.json();
        displayMovies(data);
    }
};
// displayAllMovies();

async function displayFilteredMovies(character) {
    removeChild("moviesDiv");
    for (let i = 0; i < movies.length; i++) {
        let resp = await fetch(url + apikey + movies[i]);
        let data = await resp.json();
        if (data.Actors.includes(character)) {
            await displayMovies(data);
        }
    }
};
// displayFilteredMovies("Mark Ruffalo");
const selectActor = () => {
    let select = document.getElementById("actors");
    let selectedValue = select.value;
    displayFilteredMovies(selectedValue);
}

//Crear modal con info de pelis
const showInfoModal = () => {
    let id = this.event.target.id;
    fetch(url + apikey + "&i=" + id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let modal = document.getElementById('modal');
            modal.style.display = 'block';

            let modalContent = document.getElementById('modalContainer');
            //reiniciar la creación de elementos en modal
            while (modalContent.hasChildNodes()) {
                modalContent.removeChild(modalContent.firstChild);
            }

            //Agregar título de peli
            let createTitle = document.createElement('h2');
            let title = document.createTextNode(data.Title);
            createTitle.appendChild(title);

            //Agregar director
            let createDirector = document.createElement('p');
            let director = document.createTextNode('DIRECTOR: ' + data.Director);
            createDirector.appendChild(director);

            //Agregar plot
            let createPlot = document.createElement('p');
            let plot = document.createTextNode('PLOT: ' + data.Plot);
            createPlot.appendChild(plot);

            //Agregar puntuación
            let createRating = document.createElement('p');
            let rating = document.createTextNode('IMDB Rating: ' + data.imdbRating);
            createRating.appendChild(rating);

            //Orden de elementos en contenedor
            modalContent.appendChild(createTitle);

            //Agregar video
            urlVideos.map(videoSource => {
                if (videoSource[0] === id) {
                    let createVideo = document.createElement('iframe');
                    createVideo.setAttribute('width', '500');
                    createVideo.setAttribute('height', '285');
                    createVideo.setAttribute('src', videoSource[1]);
                    createVideo.setAttribute('frameborder', '0');
                    createVideo.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                    //createVideo.setAttribute('allowfullscreen');
                    modalContent.appendChild(createVideo);
                }
            }, id, modalContent);

            modalContent.appendChild(createDirector);
            modalContent.appendChild(createPlot);
            modalContent.appendChild(createRating);

            //Añadir links de comentarios
            reviews.map(usersComments => {
                if (usersComments[0] === id) {
                    let createLink = document.createElement('a');
                    createLink.setAttribute('href', usersComments[1]);
                    createLink.setAttribute('class', 'linkStyle');
                    let createLinkText = document.createTextNode('GO TO REVIEWS');
                    createLink.append(createLinkText);

                    modalContent.appendChild(createLink);
                }
            }, id, modalContent);

            //Agregar plataformas para ver pelis
            whereToWatch.map(platformsToWatch => {
                if (platformsToWatch[0] === id) {
                    let createPlatformsA = document.createElement('p');
                    //createPlatformsA.setAttribute('class', 'highlight');
                    let platforms = document.createTextNode('WATCH IT IN');
                    createPlatformsA.appendChild(platforms);

                    let createPlatformsB = document.createElement('p');
                    createPlatformsB.setAttribute('class', 'highlight');
                    let platformsB = document.createTextNode(platformsToWatch[1]);
                    createPlatformsB.appendChild(platformsB);

                    let createPlatformsC = document.createElement('p');
                    createPlatformsC.setAttribute('class', 'highlight');
                    let platformsC = document.createTextNode(platformsToWatch[2]);
                    createPlatformsC.appendChild(platformsC);

                    modalContent.appendChild(createPlatformsA);
                    modalContent.appendChild(createPlatformsB);
                    modalContent.appendChild(createPlatformsC);
                }
            }, id, modalContent);

        })
};

//cerrar modal
window.onclick = (event) => {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
document.getElementById("actors").addEventListener("change", selectActor);
document.getElementById("storyPage").addEventListener("click", () => window.location.href = "story.html");
document.getElementById("moviesPage").addEventListener("click", () => window.location.href = "index.html");
document.getElementById("suitesPage").addEventListener("click", () => window.location.href = "suits.html");
