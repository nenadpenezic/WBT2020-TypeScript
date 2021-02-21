/*On Scroll Text and Other elements fade in*/
window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top
        var reavealpoint = 150;

        if(revealtop < windowheight - reavealpoint)
        reveals[i].classList.add('active');

    }
}
/*Buttons function on click change text*/
$(document).ready(function(){
    $(".btn1").click(function(){
        $("#command1").text("npm install typescript --save-dev");
    });
    $(".btn2").click(function(){
        $("#command1").text("yarn add typescript --dev");
    });
    $(".btn3").click(function(){
        $("#command1").text("pnpm add typescript -D");
    });
    $(".btn4").click(function(){
        $("#command2").text("npx tsc");
    });
    $(".btn5").click(function(){
        $("#command2").text("yarn tsc");
    });
    $(".btn6").click(function(){
        $("#command2").text("pnpx tsc");
    });
    
})
/*Function for google translation of site*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    
