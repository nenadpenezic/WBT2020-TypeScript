function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
  
$(document).ready(function(){
    var i = 0, text;
    text = "Modules & Ambients";
    
    function typing(){
        if(i < text.length){
            document.getElementById("ma").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,120); 
        }
        
    }
    typing();
    
});