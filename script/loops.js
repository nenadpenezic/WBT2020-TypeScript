const sections=document.getElementsByClassName('loop');
      const buttons=document.getElementsByClassName('button');

      for(let i=0;i<sections.length;i++){
        buttons[i].addEventListener('click',function(){
            sections[i].classList.replace('hidde','show');
            for(let j=0;j<sections.length;j++){
                if(j!=i)
                sections[j].classList.replace('show','hidde');
            }
        })
      }