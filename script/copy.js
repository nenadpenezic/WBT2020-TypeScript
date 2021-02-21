let copy=document.getElementsByClassName('example');

for(let i=0;i<copy.length;i++){
    copy[i].addEventListener('click',()=>{
        
       let text=copy[i].children[1].children[0].innerText;
       let element=document.createElement('textarea');
       element.value=text;
       document.body.appendChild(element)
       element.select();
       document.execCommand('copy');
       document.body.removeChild(element);
        
       copy[i].children[0].children[0].innerText='Copied';

    })
}