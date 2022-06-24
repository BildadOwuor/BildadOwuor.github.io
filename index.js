$(document).ready(function(){

    "use strict";

function dateFunction() {
    var timestamp = new Date();
    var utcDate = timestamp.toLocaleDateString();
    $("<p> ${utcDate} </p>").appendTo("body");
};

dateFunction();

    $("<p id='append'>&copy; 2022 Bildad. <br> All rights reserved</p>").appendTo("body");
});
