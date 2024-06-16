$(document).ready(function () {
    const queryString = window.location.search;
    if (queryString === '') {
        window.location.assign('index.html');
    }
    const urlParams = new URLSearchParams(queryString);
    init(urlParams.get("c"), urlParams.get("v"));

    $("#uncheck-all-btn").click(function(){
        let $boxes = $('input[class=checkbox]:checked');

        $boxes.each(function (index) {
            $boxes[index].click();
        })
    });
})

function init(cat, value) {
    $("#heading-item").text(value);
    $("#page-emoij").html(icons[value] === undefined ? icons[cat] : icons[value]);

    var index = 0;
    let data = JSON.parse(getCookie('data'));

    if (data === undefined || data === '') {
        window.location.assign('index.html');
    }

    let jsonItemData = cat === null ? jsonData[value] : jsonData[cat][value]
    for (let itemData in jsonItemData) {
        $("#content-items").append(
            `<div class="checklist-item">` +
            `<div id="checklist">` +
                `<input id="checkbox-${index}" class="checkbox" type="checkbox" name="r" value="${jsonItemData[itemData]}">` +
                `<label for="checkbox-${index}">${jsonItemData[itemData]}</label>` +
            `</div>` +
            `</div>`
        )

        if (data.checks.includes(jsonItemData[itemData])) {
            $(`#checkbox-${index}`)[0].click()
        }
        
        $(`#checkbox-${index}`).change(function (value) {
            if (data.checks.includes(value.currentTarget.value) && !$(`#${value.currentTarget.id}`).prop("checked")) {
                data.checks = data.checks.filter(item => item !== value.currentTarget.value)
            }
            
            if (!data.checks.includes(value.currentTarget.value) && $(`#${value.currentTarget.id}`).prop("checked")) {
                data.checks.push(value.currentTarget.value)
            }

            document.cookie = `data=${JSON.stringify(data)}`;
        });
        
        index++;
    }
}

function removeValue(value, index, arr) {
    // If the value at the current array index matches the specified value (2)
    if (value === 2) {
    // Removes the value from the original array
        arr.splice(index, 1);
        return true;
    }
    return false;
}

