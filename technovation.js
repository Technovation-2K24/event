AOS.init();
var typed = new Typed('#hero-heading', {
    strings: ['TECHNOVATION-2024<br>Events'],
    typeSpeed: 60,
});

const events=document.getElementById('events-nav');
const mobile_events=document.getElementById('events-mobile-nav');
const navbar=document.getElementById('navbar');
const btn_nav=document.getElementById('show-nav');
const laptop_viewport=window.matchMedia('(min-width:1024px)');
const mobile_viewport=window.matchMedia('(max-width:768px)');

events.style.display='none';
mobile_events.style.display='none';
btn_nav.addEventListener('click',()=>{
    if(!btn_nav.classList.contains('active')){
        btn_nav.style.width='0';
        btn_nav.classList.add('active');
        
        if(laptop_viewport.matches){
            navbar.insertBefore(events,navbar.children[1]);
            events.style.display='flex';
        }
        else if(mobile_viewport.matches){
            mobile_events.style.display="flex";
            navbar.insertBefore(mobile_events,navbar.children[1]);
        }
    }
    else{
        btn_nav.style.width='2rem';
        btn_nav.classList.remove('active');
        if(laptop_viewport.matches){
            navbar.removeChild(events);
        }
        else if(mobile_viewport.matches){
            navbar.removeChild(mobile_events);
        }
        events.style.display="none";
    }
});

window.addEventListener('scroll',()=>{
    let scrolled=window.scrollY;
    if(scrolled > 780){
        navbar.style.visibility="visible";
        navbar.classList.add('down');
    }
    else{
        navbar.style.visibility="hidden";
        navbar.classList.remove('down');
    }
})
