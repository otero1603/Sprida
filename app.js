const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

var scale = window.outerWidth / 1280;

$('head').append('<meta name="viewport" content="width=1280, initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0">');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += 'active-btn';
        })
    }
    //Sections active
    for (var i = 0 ; i < allSections.length; i++){
    allSections[0].addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //romove selected from other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })}
}

PageTransitions();
