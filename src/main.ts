import * as $ from "jquery";

class SweetSweetClass {
    constructor() { 
        console.log("Even sweeter");
        console.log("Even sweeter");
        console.log("Even sweeter");
        console.log("Even sweeter");
        $('body').css('background-color', 'red');
        $('body').on('click', () =>{
            alert('aaaa... viste!')
        })
    }
}

let basil = new SweetSweetClass()