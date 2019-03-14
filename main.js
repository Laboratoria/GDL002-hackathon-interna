const createNode = (element) => {
    return document.createElement(element);
};
const appendNode = (parent, element) => {
    return parent.appendChild(element);
};

const apikey = "8f24c86a";
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

const filterMovie = (data, actor) => {
    return data.filter(movie => movie.Actors.includes(actor));
};

async function getMovies(){
    for(let i = 0 ; i<movies.length ; i++){
        let resp = await fetch("http://www.omdbapi.com/?apikey=" + apikey + "&" + movies[i]);
        let data = await resp.json();
        let div = createNode("div");
        let img = createNode("img");
        let span = createNode("span");
        img.src = data.Poster;
        span.innerHTML = data.Title;
        appendNode(div, img);
        appendNode(div, span);
        appendNode(document.getElementById("moviesDiv"),div);
    }
}

// const getMovies = () => {
//     for (let i = 0; i < 21; i++) {
//         fetch("http://www.omdbapi.com/?apikey=" + apikey + "&" + movies[i])
//             .then(res => res.json())
//             .then(data => {
//                 let div = createNode("div");
//                 let img = createNode("img");
//                 let span = createNode("span");
//                 img.src = data.Poster;
//                 span.innerHTML = data.Title;
//                 appendNode(div, img);
//                 appendNode(div, span);
//                 appendNode(document.getElementById("moviesDiv"), div);
//             })
//     }
// };
// const compare = (a,b) => {
//     if(a.Year < b.Year){
//         console.log("compare");
        
//         return -1;
//     } if(b.Year < a.Year){
//         console.log("compare");

//         return 1;
//     } if(a.Year === b.Year){
//         console.log("compare");

//         return 0;
//     }
// };

// return fetch("http://www.omdbapi.com/?apikey=" + apikey + "&" + movies)

// const filterMovies = (actor) => {
//     return pelis.pelis.filter(objeto => (objeto.Actors.includes(actor)));
// }

// const getMovies = () => {
//     //Capitan Ameríca 01
//     return fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=captain+america&y=2011")
//         .then(res => res.json())
//         .then(function(data){
//             let movie = data;
//             return movie.map(function(actor) {

//             }
//         }
// };
// getMovies();

// const displayFilter = (actor) => {
//     getMovies(actor).then(filteredMovie =>{
//         console.log(filteredMovie);
//     })
// };
// displayFilter("Chris Evans");

// let pelis = {
//     pelis: [{
//         "CapitanAmerica": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=captain+america&y=2011")
//             .then(res => res.json())
//             .then(data => { console.log(data) })

//     }, {
//         "CapitanaMarvel": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=captain+marvel")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "IronMan": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=iron+man")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "IronMan2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=iron+man+2")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Hulk": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=the+incredible+hulk")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Thor": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=thor")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "TheAvengers": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=the+avengers")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "IronMan3": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=iron+man+3")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Thor2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Thor%3A+The+Dark+World")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "CapitanAmerica2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Captain+America%3A+The+Winter+Soldier")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "GuardiansOfTheGalaxy": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=guardians+of+the+galaxy")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "GuardiansOftheGalaxy2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=guardians+of+the+galaxy+vol.+2")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Avengers2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Avengers%3A+Age+of+Ultron")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "AntMan": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Ant-Man")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "CapitanAmerica3": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Captain+America%3A+Civil+War")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "SpiderMan": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Spider-man%3A+Homecoming")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "DoctorStrange": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Doctor+Strange")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "BlackPanther": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Black+Panther")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Thor3": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Thor+Ragnarok")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "AntMan2": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Ant-man+and+the+wasp")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }, {
//         "Avengers3": fetch("http://www.omdbapi.com/?apikey=8f24c86a&t=Avengers+infinity+war")
//             .then(res => res.json())
//             .then(data => { console.log(data) })
//     }
//     ]
// };
// console.log(pelis);

// const filterPokemon = (data, whatToFilter, valueToCompare) => {
//     return data.filter(pokemonObject => (
//       pokemonObject[whatToFilter].includes(valueToCompare)
//     ));
//   };


