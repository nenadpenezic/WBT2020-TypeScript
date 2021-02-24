const menuButton=document.getElementById('navigation');
const menu=document.getElementsByClassName('nav-menu')[0];
const arrowDown=document.getElementsByClassName('mobile-sub-menu')[0];
const arrowRight=document.getElementsByClassName('mobile-sub-sub-menu')[0];
const subMenu=document.getElementById('sub-menu');
const subSubMenu=document.getElementById('sub-sub-menu');

      let isMenuOpen=true;
      let isSubMenuOpen=false;
      let isSubSubMenuOpen=false;
      menuButton.addEventListener('click',function(){
        if(isMenuOpen){
          menu.classList.add('display-nav');
          menu.classList.remove('hide-nav');
          isMenuOpen=false;
        }
        else{
          menu.classList.add('hide-nav');
          menu.classList.remove('display-nav');
          isMenuOpen=true;
        }
      })

      arrowDown.addEventListener('click',function(){
      if(!isSubMenuOpen){
       subMenu.style.display='block';
       isSubMenuOpen=true;
      }else{
       subMenu.style.display='none';
       isSubMenuOpen=false;
      }
      })

      arrowRight.addEventListener('click',function(){
        if(!isSubSubMenuOpen){
         subSubMenu.style.display='block';
         isSubSubMenuOpen=true;
        }else{
          subSubMenu.style.display='none';
          isSubSubMenuOpen=false;
        }
        })