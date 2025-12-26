const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded" , ()=>{
    if(aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        e.preventDefault();

        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c)=>{
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

            const experienceList = [{
                 id: 1,
                  date: "2023 – 2024",
                  position: "Frontend Development (Academic Project)",
                  company: "youtube company",
              details:
             "Developed responsive and user-friendly interfaces using HTML, CSS, and JavaScript, focusing on clean layouts, accessibility, and basic client-side interactions."
            },
            {
                 id: 2,
          date: "2024",
          position: "Java Programming (Training & Practice)",
           company: "youtube company",
         details:
           "Strengthened core Java concepts including OOP, collections, and exception handling by building mini projects and solving real-world programming problems."
            },
            {
                   id: 3,
          date: "2025",
          position: "Database & Web Application Practice",
           company: "youtube company",
          details:
      "Designed relational databases using SQL and integrated them with web forms, implementing CRUD operations and ensuring data consistency."
            }
        ];

        const experienceContent = experienceList.map((ele)=>{
            return `
            <div class="experience-box"
            key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>
                    ${ele?.details}
                   </p>
                </div>
            
            `;
        }).join("");

        if(experiences){
            experiences.innerHTML=
            experienceContent;
        }
        }else if(activeTab === "education"){
            const education=document.querySelector(".education-list");

            const educationList=[{
                id:1,
                date: "2023-2026",
                degree: "Bachelor of Computer Science(CS)",
                Institution:"Lakshya Institute Of Technology(LIT),Bhubaneswar",
                details: "Studied core subjects like Data Structure,Web Development,Operating System,Numerical Techniques. Built multiple academic projects using HTML,CSS,JavaScript,MERN Stack.",
            },
            {
                 id:2,
                date: "2021-2023",
                degree: "Higher Secondary Education(Science)",
                Institution:"AIMS Higher Secondary School,Sambalpur",
                details: "Focused on physics,Chemistry,and Mathematics.Developed a Strong Foundation in logical thinking and Problem-solving.",
            },
            {
                 id:3,
                date: "2020-2021",
                degree: "Board of Secondary School(BSC)",
                Institution:"Saraswati Shishu Vidya Mandir,Dhanupali",
                details: "Completed basic Schooling with distinction.Actively participated in computer clubs and tech-related events.",
            }];

          const educationContent =  educationList.map((ele)=>{
            return `
              <div class="experience-box"
            key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.Institution}</p>
                    </div>
                    <p>
                    ${ele?.details}
                   </p>
                </div>

            `;
          })
          .join(""); 

          if(education){
            education.innerHTML = educationContent;
          }
        }else if(activeTab === "skills"){
            const skills = document.querySelector('.skill-list');

            const skillList = [
                {
                    id:1,
                    name: "HTML - Hyper Text Markup language",
                    icon:"assets/skills/html.png",
                },
                {
                     id:2,
                    name: "CSS - Cascading Style Sheet",
                    icon:"assets/skills/css.png",
                },
                {
                     id:3,
                    name: "HTML - Hyper Text Markup language",
                    icon:"assets/skills/js.png",
                },
                {
                     id:4,
                    name: "MongoDB",
                    icon:"assets/skills/mongodb.png",
                },
                {
                     id:5,
                    name: "Bootstrap",
                    icon:"assets/skills/bootstrap.png",
                },
                {
                     id:6,
                    name: "Node JS",
                    icon:"assets/skills/node.png",
                },
                {
                     id:7,
                    name: "React JS",
                    icon:"assets/skills/react.png",
                }];
              
             const skillContent = skillList.map((ele)=>{
                return `
                  <div class="skill-box" key=${ele?.id}>
                    <img src=${ele?.icon} alt=${ele?.name}
                    title=${ele?.name}
                    loading="lazy"/>
                </div>
                `;
             }).join("") ;

             if(skills) {
                skills.innerHTML = skillContent;
             }
        }else if(activeTab ==="about-me"){

            const myInfo = document.querySelector(".my-info");

            const infoList = [
                {
                    id: 1,
                    key:"Name : ",
                    value: "Sushree Ipsita Sahu",
                },
                {
                     id: 2,
                    key:"Country : ",
                    value: "India",
                },
                {
                     id: 3,
                    key:"Industry: ",
                    value: "Software & IT"
                },
                {
                     id: 4,
                    key:"Experience : ",
                    value: "Freshers"
                },
                {
                     id: 5,
                    key:"Address : ",
                    value: "Acharya Vihar,Bhubaneswar"
                }];

              const infoContent = infoList.map((ele)=>{
                return `
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                 <span>${ele?.value}</span>
                </div>

                `;
              }).join("") ;

              if(myInfo){
                myInfo.innerHTML = infoContent;
              }
        }
    });
}); 