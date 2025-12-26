const toggle=document.getElementById('menu-toggle');

if(toggle){
    toggle.addEventListener("change",
        () => {
            document.body.classList.toggle
            ("no-scroll",toggle.checked);
        });
}
const words = [
    "Developer",
    "Freshers",
    "Leader",
    "Full Stack Freshers",
    "Coding Enthusiast",
];

const typingText=document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentWord.substring(0,charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.
            length){
             isDeleting = true;
             setTimeout(type, nextWordDelay);   
         }else{
             setTimeout(type,typingDelay); 
         }
    }else{
        typingText.textContent = currentWord.substring(0,charIndex -1);
        charIndex--;

        if(charIndex===0){
            isDeleting = false;
            wordIndex = (wordIndex + 1)%
            words.length;
            setTimeout(type,500);
        }else{
             setTimeout(type,erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    if(words?.length) type();
});

const navlinks= document.querySelectorAll(".navlink");

const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        navlinks.forEach((l) => {
            if(l === link){
                l.classList.add("active");
            }else{
                l.classList.remove("active");
            }
        });

        const tabName=link.dataset.tab;

        tabs.forEach((tab) => {
            if(tab.id===tabName){
                tab.classList.add("active");
            }else{
                tab.classList.remove
                ("active");
            }
});

if(tabName === "services"){
    const serviceList = [{
        id:1,
        icon:"ph-code",
        text:"Website Development",
        para: "I build responsive and modern websites using the latest technologies like HTML,CSS,JavaScript,React and...",
    },
    {
         id:2,
        icon:"ph-laptop",
        text:"Java Application Development",
        para: "I build simple and efficient Java applications using Core Java concepts such as OOP, collections, and exception handling...",
    },{
         id:3,
        icon:"ph-database",
        text:"Database Design & Management",
        para: "I create and manage databases using MySQL, including table design, relationships, and optimized SQL queries...",
    },
    {
         id:4,
        icon:"ph-android-logo",
        text:"Android App Development",
        para: "I develop basic Android applications using Java with clean structure and smooth functionality...",
    },
    {
         id:5,
        icon:"ph-paint-brush",
        text:"UX/UI Design",
        para: "Custom mobile apps for android and ios using React Native and Expo,designed to provide excellent UI/UX and performance...",
    },
    {
         id:6,
        icon:"ph-palette",
        text:"Graphic Design",
        para: "offering expert advice and solutions for tech projects,helping individuals and startups with project planning and stack decisions...",
    },
];
    const services = document.getElementsByClassName("service-list");

    const innerContent = serviceList.map((l) => {
         return `
         <div class="box" key=${l?.id}>
                <div class="head-icons">
                    <i class="ph ${l?.icon}"></i>
                  <span>
                     <i class="ph ph-arrow-down-right"></i>
                  </span>  
                </div>
                <h3>${l?.text}</h3>
                <span class="spacer"></span>

                <p>${l?.para}</p>
                </div>
        `;
    })
    .join("");
               
   Array.from(services).forEach((ele)=>{
       ele.innerHTML=innerContent;   
     });
}  

    toggle.checked = false;
});
});
