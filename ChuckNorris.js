document.getElementById("randomForm").addEventListener("submit", getRandomChuckNorrisFact);
document.getElementById("categoryForm").addEventListener("submit", getFromCategory);
document.getElementById("searchForm").addEventListener("submit", getFromSearch);

let table = document.getElementById("table");
let tableInnerHTMLString = table.innerHTML;

function populateDropDown() {
    // getJSONWithXMLHttpRequest("https://api.chucknorris.io/jokes/categories", useJSONDropDown);
    getJSONWithFetch("https://api.chucknorris.io/jokes/categories", useJSONDropDown);
}

populateDropDown();

function useJSONDropDown(data) {
    let categoriesDropDown = document.getElementById("dropdown");
    for (let element of data)
        categoriesDropDown.innerHTML += `<option value=${element}>${element}</option>`;
}

function useJSONTable(data) {
    // console.log(data);

    if (data.hasOwnProperty("result")) { // If data has an array property called "result", multiple objects have been found
        for (let object of data.result) {
            tableInnerHTMLString += `<tr><td>${object.categories}</td><td>${object.created_at}</td><td><img src="${object.icon_url}" alt="CN"></td><td>${object.id}</td><td>${object.updated_at}</td><td>${object.url}</td><td>${object.value}</td></tr>`;
        }
        if (data.total === 0)
            alert("Nothing found.")
    } else { // One object was found
        tableInnerHTMLString += `<tr><td>${data.categories}</td><td>${data.created_at}</td><td><img src="${data.icon_url}" alt="CN"></td><td>${data.id}</td><td>${data.updated_at}</td><td>${data.url}</td><td>${data.value}</td></tr>`;
    }

    table.innerHTML = tableInnerHTMLString; // Pull the table related HTML into a string and re-add it every time for the CSS to work properly
}

function getJSONWithXMLHttpRequest(url, callbackFunction) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status === 200)
            callbackFunction(xmlHttpRequest.response);
        else {
            console.log("Error");
            console.log(xmlHttpRequest.status);
        }
    };
    xmlHttpRequest.send();
}

// https://developers.google.com/web/updates/2015/03/introduction-to-fetch
function getJSONWithFetch(url, callbackFunction) {
    // const fetch = require("node-fetch"); // Maybe this is only needed for Node.js? Program works in Chrome when I comment it out
    fetch(url)
        .then(response => response.json())
        .then(data => callbackFunction(data))
        .catch(err => console.log(err));
}

function getRandomChuckNorrisFact() {
    // getJSONWithXMLHttpRequest('https://api.chucknorris.io/jokes/random', useJSONTable);
    getJSONWithFetch('https://api.chucknorris.io/jokes/random', useJSONTable);
}

function getFromCategory() {
    let categoriesDropDown = document.getElementById("dropdown");
    // console.log(categoriesDropDown);
    let selectedCategory = categoriesDropDown.options[categoriesDropDown.selectedIndex].text;
    console.log(selectedCategory);

    // getJSONWithXMLHttpRequest(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`, useJSONTable);
    getJSONWithFetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`, useJSONTable);
}

function getFromSearch() {
    let searchBar = document.getElementById("searchBar");
    // console.log(searchBar);
    let searchText = searchBar.value;
    console.log(searchText);

    // getJSONWithXMLHttpRequest(`https://api.chucknorris.io/jokes/search?query=${searchText}`, useJSONTable);
    getJSONWithFetch(`https://api.chucknorris.io/jokes/search?query=${searchText}`, useJSONTable);
}

