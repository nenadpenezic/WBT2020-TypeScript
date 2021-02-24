const pages=[{page:'arrays.html',name:'Arrays'},{page:'basicSyntax.html',name:'Basic Syntax'},{page:'classes.html',name:'Classes'},{page:'Documentation.html',name:'Documentation'},{page:'Functions.html',name:'Functions'},
{page:'home.html',name:'Home'},{page:'Interfaces.html',name:'Interfaces'},{page:'Loops.html',name:'Loops'},{page:'modules&ambients.html',name:'Modules & Ambients'},{page:'namespaces.html',name:'Namespaces'},{pages:'objects.html',name:'Objects'},
{page:'Operators.html',name:'Operators'},{page:'Overview.html',name:'Overview'},{page:'Strings.html',name:'Strings'},{page:'Types.html',name:'Types'},{page:'u&itypes.html',name:'Union and Intersection Types'}];
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
        if(pages[i].name.indexOf(searchVale)>-1){
            searcResults+='<li><a href="./'+pages[i].page+'">'+pages[i].name+'</a></li>';
        }
    }
    console.log(searcResults);
    printResults.innerHTML=searcResults;
    
}
