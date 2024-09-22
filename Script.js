// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navlinks");

hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// Attach click event to each list item
document.querySelectorAll('.navlinks ul li').forEach(item => {
    item.addEventListener('click', function() {
        const anchor = this.querySelector('a');
        if (anchor) {
            anchor.click();  // Simulate anchor click
        }
        // Hide the menu after an item is clicked (on mobile view)
        nav.classList.remove('active');
    });
});

// project card dynamically 
const project = [
    {
        imgsrc : "assets/faceintuit.png",
        title : "FaceIntuit",
        duration : "Aug-2024 Sept-2024" ,
        info : "Developed an website for Smart India Hackathon 2024 that documents of our ML project." ,
        repo_link : "https://github.com/saisurya7860/SIH--FACEINTUIT"
    },
    {
        imgsrc : "assets/portfolio-thumbnail.png",
        title : "My Portfolio",
        duration : "May 2024 - Sep 2024" ,
        info : "Welcome to my portfolio, showcasing my projects in AI, ML, Frontend projects." ,
        repo_link : "https://github.com/saisurya7860/Surya-s-Portfolio"
    },
    {
        imgsrc : "assets/visionSoC.png",
        title : "Vision SoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed VisionSoC, an advanced image upscaling model using with Python." ,
        repo_link : "https://github.com/saisurya7860/Vision-Soc"
    },
    {
        imgsrc : "assets/chatbot.avif",
        title : "ChatSoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed 'ChatSoC' an advanced chatbot using OpenAI's API in Python." ,
        repo_link : "https://github.com/saisurya7860/Chat-SoC"
    }
   
];

const prjt_container = document.querySelector('.project-container') ;
project.forEach(project => {
   const card = `
   <div class="project-card">
        <div>
            <img class="prjt-thumbnail" src="${project.imgsrc}" alt="project-thumbnail">
        </div>

        <div class="prjt-des">
            <h2 class="prjt-title">${project.title}</h2>
            <div class="prjt-duration">${project.duration}</div>
            <div class="prjt-info">${project.info}</div>
            <div class="git-butn">
                <a href="${project.repo_link}" target = "_blank"><button class="repo">view code</button></a>
            </div>
        </div>

    </div>
    `;
    prjt_container.innerHTML += card ; 
});




// skills section 
// skill card dynamic calling js

// object creation
const skill =[
    {
        role : "Frontend Developer",
        technologies : [
            {
                tech1 : "HTML",
                tech2 : "CSS",
                tech3 : "javascript",
                tech4 : "Bootstrap",
                tech5 : "Git",
                tech6 : "GitHub"
            }
        ],
        icons : [
            {
                icon1 : "https://img.icons8.com/color/48/html-5--v1.png", 
                icon2 : "https://img.icons8.com/color/48/css3.png", 
                icon3 : "https://img.icons8.com/color/48/javascript.png", 
                icon4 : "https://img.icons8.com/color-glass/48/bootstrap.png", 
                icon5 : "https://img.icons8.com/color/48/git.png", 
                icon6 : "https://img.icons8.com/ios-glyphs/50/github.png" ,
            }
        ]

    },

    {
        role : "AI/ML Developer",
        technologies : [
            {
                tech1 : "Python",
                tech2 : "Data Structure",
                tech3 : "Ml",
                tech4 : "Statistics",
                tech5 : "Git",
                tech6 : "GitHub"
            }
        ],
        icons : [
            {
                icon1 : "https://img.icons8.com/color/48/python--v1.png",
                icon2 : "assets/data.png", 
                icon3 : "assets/algo.png", 
                icon4 : "assets/statistics.png", 
                icon5 : "https://img.icons8.com/color/48/git.png", 
                icon6 : "https://img.icons8.com/ios-glyphs/50/github.png" , 
            }
        ]

    },
    
];



const skill_container = document.querySelector('.skill-js-container') ;
skill.forEach(skill => {
    const techs = skill.technologies[0];  // Access the first (and only) object in the 'technologies' array
    const icons = skill.icons[0];
    const skill_card = `
     <div class="skillcard">
        <div class="skill-title">
            <p>${skill.role}</p>
        </div><!--Skill Title-->

        <div class="skill-columns">

            <div class="skill-stack">
                <div class="skill">
                    <img width="30" height="30" src="${icons.icon1}" />
                    <div>${techs.tech1}</div>                               
                </div>

                <div class="skill">
                    <img width="30" height="30" src="${icons.icon2}" />
                 <div>${techs.tech2}</div>
                </div>

                <div class="skill">
                    <img width="30" height="30" src="${icons.icon3}" />
                    <div>${techs.tech3}</div>
                </div>

            </div> <!--skill stack cloumn1-->

            <div class="skill-stack">
                <div class="skill">
                    <img width="30" height="30" src="${icons.icon4}" />
                    <div>${techs.tech4}</div>
                </div>

                <div class="skill">
                    <img width="30" height="30" src="${icons.icon5}" />
                    <div>${techs.tech5}</div>
                </div>

                <div class="skill">
                    <img width="30" height="30" src="${icons.icon6}" />
                    <div>${techs.tech6}</div>   
                </div>

            </div> <!--Skill stack Column2-->

        </div><!--Skill stack-->

    </div> <!--Skill card-->
    ` ;
    skill_container.innerHTML += skill_card ;
}); 
