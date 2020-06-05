var catsSpotted = 0;
btn.addEventListener('click', function(spotted) {
    catsSpotted++;
    //store how many times a cat was spotted.
    if (localStorage['spotted']) {
        // ensure catSpotted is a number
        catsSpotted = Number(localStorage['spotted']);
    }

});