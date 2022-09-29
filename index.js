const herosection= document.querySelector(".section-hero");
const worksection= document.querySelector(".section-work");
const biosection= document.querySelector(".section-bio");



const mobile_nav= document.querySelector('.mobile-navbar-btn');
const headerElem= document.querySelector('.header');

mobile_nav.addEventListener('click', () =>{
    headerElem.classList.toggle('active');  
});



const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ? document.body.classList.add("sticky")
         : document.body.classList.remove("sticky") ;

    },
    {
        root: null,
        threshold: 0,
    }
);

observer.observe(herosection);


const workObserver = new IntersectionObserver(
    (entries,observer) => {
        const [entry] = entries;
        
       
        if(!entry.isIntersecting) return;

        const counterNum = document.querySelectorAll(".counter-numbers");
const speed =10;

counterNum.forEach((curElem) => {
   
    const updateNumber = () => {
        
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNumber = parseInt(curElem.innerText);
    
        const incrementNumber = Math.trunc(targetNumber/speed);
    
        if (initialNumber < targetNumber){
            curElem.innerText = `${initialNumber+incrementNumber}+`;
            setTimeout(updateNumber, 90);
        }
        
    };  
    
        updateNumber()
});

    observer.unobserve(worksection);

    },
    {
        root: null,
        threshold: 0,
    }
);

workObserver.observe(worksection);





        
       








