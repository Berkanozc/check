$(document).ready(function () {
    const queryString = window.location.search;
    if (queryString === '') {
        window.location.assign('index.html');
    }
    const urlParams = new URLSearchParams(queryString);
    let cat = urlParams.get("v");

    $("#hero-title").text(cat);

    for (const key in jsonData[cat]) {
        $("#content-cards").append(
            `<a href="item.html?c=${cat}&v=${key}" class="item-card">` +
                `<h2 class="title">${key}</h2>` +
            `</a>`
        );
    }
})