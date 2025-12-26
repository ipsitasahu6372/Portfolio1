const projectList = [
    {
        id:1,
        number: "01",
        title: "Amazon Clone Page",
        description: "Developed a responsive Amazon clone website using HTML, CSS, and JavaScript.<br> The project replicates the core UI of Amazon, including a navigation bar, product listings, category sections, and a modern homepage layout.",
        techstack:["HTML","CSS","JavaScript"],
        image:"assets/projects/amazon1.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
         id:2,
        number: "02",
        title: "Ecommerce Website",
        description: "Developed a responsive e-commerce website using HTML, CSS, and JavaScript that allows users to browse products, view details, and add items to a shopping cart.<br> Focused on clean UI, smooth navigation, and user-friendly design.",
        techstack:["HTML","CSS","JavaScript"],
        image:"assets/projects/ecom.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
         id:3,
        number: "03",
        title: " Travel Website",
        description: "Developed a full-stack travel website using React JS for the frontend <br>and Node JS with Express for the backend. The application allows users to explore destinations, view travel packages, and submit booking inquiries. Focused on responsive UI, smooth navigation, and REST API integration.",
        techstack:["MongoDB","Expree","React","Node"],
        image:"assets/projects/travel.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
         id:4,
        number: "04",
        title: "FlipKart Clone",
        description: "Flipkart Clone – A full-featured e-commerce website built using HTML, CSS, and JavaScript.<br>Users can browse products, search items, view detailed descriptions,<br> add products to the cart, and proceed to checkout. The responsive design ensures seamless experience across devices, replicating key features of Flipkart for learning and portfolio purposes.",
        techstack:["HTML","CSS","JavaScript"],
        image:"assets/projects/flipkart.jpg",
        liveLink: "#",
        githubLink: "#",
    }];

    const projects = document.querySelector(".projects");
 
    let currentIndex = 0;

    const renderProject = (index) => {

        const projectContent = projectList[index];

        const previousDisabled = currentIndex === 0;

         const nextDisabled = currentIndex === projectList.length - 1;

         projects.innerHTML = `
            <div class="project-info">

                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}
                    </p>

                    <div class="tech-stack">
                       ${
                        projectContent?.techstack?.map((tech , i)=>{
                            return `
                            <span key=${i}>${tech}</span>
                            `;
                        }).join("")
                       }
                    </div>
                    <hr/>
                    <div class="links">
                        <a href=${projectContent?.liveLink}>
                           <i class="ph ph-arrow-right"></i> 
                        </a>
                        <a href=${projectContent?.githubLink}>
                             <i class="ph ph-github-logo"></i> 
                        </a>
                    </div>
                </div>
                 <div class="carousel">
                    <img src=${projectContent?.image} alt=${projectContent?.title}/>

                    <div class="arrows">
                        <a href="#"
                        id="previous"

                         class=${previousDisabled?"disabled-btn": ""}>
                            <i class="ph ph-caret-left"  ></i>
                        </a>

                         <a href="#"
                         id="next"

                             class=${nextDisabled?"disabled-btn": ""}>

                            <i class="ph ph-caret-right"></i>
                        </a>
                    </div>
                </div>
         `;

         document.getElementById('previous').addEventListener("click",(e)=>{
            e.preventDefault();

            if(currentIndex > 0){
                currentIndex --;
                renderProject
                (currentIndex);
            }
         });

          document.getElementById('next').addEventListener("click",(e)=>{
            e.preventDefault();

            if(currentIndex < projectList.length - 1){
                currentIndex ++;
                renderProject
                (currentIndex);
            }
         });
    };

    renderProject(currentIndex);
