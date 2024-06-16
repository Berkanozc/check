const emptyCookie = {
    budget: null,
    currenct: null,
    checks: []
}


$(document).ready(function () {
    if (document.cookie === '' || document.cookie === undefined) {
        document.cookie = `data=${JSON.stringify(emptyCookie)}`;
    }

    // let $allboxes = $( "input[class=checkbox]" )
    // $allboxes.each(function (index) {
    //     $allboxes[index].click(function () {
    //         // Update your cookies with data from cookies
    //     })
    // })
})

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


