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
/*Function for showing main title of page*/
$(document).ready(function(){
    var i = 0, text;
    text = "Let's learn something new. The Basic Syntax of TypeScript is waiting for you!";
    
    function typing(){
        if(i < text.length){
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,50); //trajanje efekta u milisekundama (duration of effect in milliseconds)
        }
        
    }
    typing();

    var j = 0, text1;
    text1 = "Now, let's see what will your first TypeScript code look like!";
    
    function typingv2(){
        if(j < text1.length){
            document.getElementById("text1").innerHTML += text1.charAt(j);
            j++;
            setTimeout(typingv2,80); //trajanje efekta u milisekundama (duration of effect in milliseconds)
        }
        
    }
    typingv2();
});


/*Function for google translation of site*/
function googleTranslateElementInit() {
new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
