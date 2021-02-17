$(document).ready(function(){
  var i = 0, text;
  text = "Is A Programming Language Led by Anders Hejlsberg and Backed by Microsoft";
  
  function typing(){
      if(i < text.length){
          document.getElementById("d1").innerHTML += text.charAt(i);
          i++;
          setTimeout(typing,50); 
      }
      
  }
  typing();

  var j = 0, text1;
  text1 = "Compiles to Whatever Version of JavaScript You Want";
  text2 = "Is Open Source"
  
  function typingv2(){
      if(j < text1.length){
          document.getElementById("d2").innerHTML += text1.charAt(j);
          document.getElementById("d3").innerHTML += text2.charAt(j);
          j++;
          setTimeout(typingv2,50); 
      }
      
  }
  typingv2();
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

