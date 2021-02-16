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
$(document).ready(function(){
    /*FUnction for text on main part of page*/
    const texts= ['isDone: boolean = false;', 'decimal: number = 6;', 'color: string = "blue";'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type(){
        if(count === texts.length){
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
    
        document.querySelector('.typing').textContent = letter;
        if(letter.length == currentText.length){
            count++;
            index = 0;
    
    
        }
        setTimeout(type, 150);
    })();
    
    /* (function type(){})(); - self invoked function*/

});

/*Function for google translation of site*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    
