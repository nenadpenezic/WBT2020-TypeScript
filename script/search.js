const pages=['arrays.html','basicSyntax.html','classes.html','Documentation.html','Functions.html',
'home.html','Interfaces.html','Loops.html','modules&ambients.html','namespaces.html','objects.html',
'Operators.html','Overview.html','Strings.html','Types.html','u&itypes.html'];
let search=document.getElementById('search');
let printResults=document.getElementsByClassName('search-list')[0];
function searchFunction(){
    let searchVale=search.value;
    let searcResults='';
    if(searchVale=='')
    printResults.style.display='none';
    else
    printResults.style.display='block';
    for(let i=0;i<pages.length;i++){
        if(pages[i].indexOf(searchVale)>-1){
            searcResults+='<li><a href="./'+pages[i]+'">'+pages[i].slice(0,pages[i].length-5)+'</a></li>';
        }
    }
    console.log(searcResults);
    printResults.innerHTML=searcResults;
    
}
