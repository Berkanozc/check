$(document).ready(function () {
    let index = 1;
    let count = 0;

    for (const category in jsonData) {
        let modIndex = index % 6;
        createCard(category, modIndex === 0 ? 6 : modIndex);
        index++;
    }
    count += countChecks(jsonData, count)
    let data = JSON.parse(getCookie('data'));

    let $progressbar = $("#progress-bar");
    if ($progressbar.length > 0) {
        let percentage = Math.ceil((data.checks.length / count) * 100);
        console.log(percentage)
        $progressbar.css("width", `${percentage}%`);
    }

});

function countChecks(data, count) {
    for (const element in data) {
        if (typeof data[element] === 'string') {
            count++
        } else if (typeof data[element] === 'object') {
            count = countChecks(data[element], count)
        }
    }

    return count;
}

function createCard(category, index) {
    let contentHtmlElement = $("#content");
    contentHtmlElement.append(
        `<a class='cat-card color-${index}' href='${typeof jsonData[category][0] === 'string' ? 'item.html' : 'category.html'}?v=${category}'>` +
        `<div class='cat-card-title'>` +
        `<h2 class='text-color-${index}'>${category}</h2>` +
        `<div class='cat-card-emoji'>` +
        icons[category] +
        `</div>` +
        `</div>` +
        `<div id='content-items-${category}' class='grid-2'>` +
        `</div>` +
        `<div class='cat-card-underline'>` +
        `<div class='text-color-${index}'>` +
        `${typeof jsonData[category][0] === 'string' ? `${jsonData[category].length} items` : `${Object.keys(jsonData[category]).length} checklists`}` +
        `</div>` +
        `</div>` +
        `</a>`
    )

    let contentItemsHtmlElement = $(`#content-items-${category}`);
    for (const element in jsonData[category]) {
        if (contentItemsHtmlElement.children().length >= 4) {
            break;
        }

        if (typeof jsonData[category][element] === "string") {
            // It is not a checklist but an item
            createContentItem(jsonData[category][element], contentItemsHtmlElement)
        } else {
            // It is a checklist and not an item
            // Just get the first value of it
            let text = jsonData[category][element][0];
            while (typeof text !== 'string') {
                text = text[0]
            }
            createContentItem(text, contentItemsHtmlElement);
        }
    }
}

function createContentItem(text, htmlElement) {
    htmlElement.append(
        "<div class='par'>" + text + "</div>"
    );
}

function parseAmount(input) {
    // Als de string een punt gevolgd door een komma heeft, dan vervangen we de punt met niets
    if (input.indexOf(',') > input.indexOf('.')) {
        // Verwijder de duizendtalscheidingstekens (allebei '.' en ',')
        input = input.replace(/\./g, '').replace(/,/, '.');
    } else {
        // Verwijder de duizendtalscheidingstekens (allebei ',' en '.')
        input = input.replace(/,/g, '');
    }

    // Converteer naar een getal
    let amount = parseFloat(input);

    return amount;
}