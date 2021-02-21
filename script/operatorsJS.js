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

/*Function for google translation of site*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
    
