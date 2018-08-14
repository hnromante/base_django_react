"use strict";
exports.__esModule = true;
var $ = require("jquery");
var SweetSweetClass = (function () {
    function SweetSweetClass() {
        console.log("Even sweeter");
        console.log("Even sweeter");
        console.log("Even sweeter");
        console.log("Even sweeter");
        $('body').css('background-color', 'red');
        $('body').on('click', function () {
            alert('aaaa... viste!');
        });
    }
    return SweetSweetClass;
}());
var basil = new SweetSweetClass();
