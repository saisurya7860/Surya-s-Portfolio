// Profile section dynamic data call
const profile = [
    {
        git_link : "https://github.com/saisurya7860",
        Linkedin_link : "https://www.linkedin.com/in/surya-btechi/",
        prof_icon1 : "fa-github",
        prof_icon2 : "fa-linkedin-in",
        intro : "Hi, I am",
        name : "Surya",
        myrole : "Frontend Developer",
        prof_des : "I am a final-year B.Tech student specializing in Artificial Intelligence and Data Science, driven by a passion for pushing the boundaries of technology. Proficient in Python, I seamlessly blend coding with creativity to solve complex problems. I am eager to contribute to cutting-edge projects, innovate with impactful solutions, and make a lasting mark in the tech industry.",
        resume_btn : "Download CV",
        hero_img : "assets/Hero-img.jpg",
        resume_path : "./assets/Resume_Surya B.pdf",
    }
] ;

const profile_container = document.querySelector('.profile-container');
profile.forEach(hero =>{
    const prof = `
    <div class="profile container">
                <div class="icon-container">
                    <a href="${hero.git_link}" target="_blank"><i id ="socio-icon" class="fa-brands ${hero.prof_icon1} fa-lg fa-beat"></i></a>
                    <a href="${hero.Linkedin_link}" target="_blank">   <i id ="socio-icon" class="fa-brands ${hero.prof_icon2} fa-lg fa-beat"></i></a>                    
                </div>
        
                <div class="profile-des">
                    <h1>${hero.intro}<span>${hero.name}</span></h1>
                    <div class="role">${hero.myrole}</div>
          
                    <p>
                        ${hero.prof_des}
                    </p> 
                    <div class="resume-btn">
                        <button onclick = "window.open('${hero.resume_path}')">${hero.resume_btn}</button>
                    </div>
                </div>

       

                <div class="profile-pic-div">
                    <img class="profile-pic" src="${hero.hero_img}" alt="">
                </div>     
        </div> 
    `;
    profile_container.innerHTML += prof;

}) ;




// About section dynamic data fetch
const about =[
    {
        title : "About Me",
        subtitle : "Introduction",
        abt_img : "assets/about.jpg",
        abt_info :"I am a Python developer with expertise in AI, machine learning, deep learning, and front-end development. I am eager to leverage my skills in an AI/ML Engineer role, delivering innovative solutions to complex challenges.",
        
        abt_card : [
            {
                card_href : "#qualification",
                card_icon : "fa-award",
                card_title : "Qualification",
                card_subtitle : "Undergrad",
            },
            {
                card_href : "#projects",
                card_icon : "fa-suitcase",
                card_title : "Completed",
                card_subtitle : "3+ Projects",
            },
            {
                card_href : "#contact",
                card_icon : "fa-headphones",
                card_title : "Support",
                card_subtitle : "24/7",
            }
        ]
        
    },
    

];

const abt_container = document.querySelector('.about-js-container');
about.forEach(about => {

    let cardHTML = '';
    // Loop through each card in abt_card and build the HTML for each one
    about.abt_card.forEach(abt_cards => {
        cardHTML += `
        <a href="${abt_cards.card_href}">  
            <div class="card">
                <i class="fa-solid ${abt_cards.card_icon} fa-lg"></i>
                <p>${abt_cards.card_title}</p>
                <div>${abt_cards.card_subtitle}</div>
            </div>
        </a>`;
    }); 

    const card = `
        <div class="about-contents">

            <div class="about-pic-div">
                <img class="about-pic" src="${about.abt_img}" alt="">
            </div>

            <div class="about-contents-info">

                <div class="total-cards">
                    ${cardHTML} <!-- Inject all cards here -->
                </div> <!-- Cards -->

                <div class="description">
                    ${about.abt_info}
                </div> <!--description-->

            </div><!--about contents info-->

        </div> <!--about contents-->
        `;
        abt_container.innerHTML += card ;   
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



// project card dynamically 
const project = [
    {
        imgsrc : "assets/faceintuit.png",
        title : "FaceIntuit",
        duration : "Aug-2024 Sept-2024" ,
        info : "Developed an website for Smart India Hackathon 2024 that documents of our ML project." ,
        repo_link : "https://faceintuit.netlify.app/",
        code : "View Live"
    },
    {
        imgsrc : "assets/portfolio-thumbnail.png",
        title : "My Portfolio",
        duration : "May 2024 - Sep 2024" ,
        info : "Welcome to my portfolio, showcasing my projects in AI, ML, Frontend projects." ,
        repo_link : "https://github.com/saisurya7860/Surya-s-Portfolio",
         code : "View Code"
    },
    {
        imgsrc : "assets/visionSoC.png",
        title : "Vision SoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed VisionSoC, an advanced image upscaling model using with Python." ,
        repo_link : "https://github.com/saisurya7860/Vision-Soc",
        code : "View Code"
    },
    {
        imgsrc : "assets/chatbot.avif",
        title : "ChatSoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed 'ChatSoC' an advanced chatbot using OpenAI's API in Python." ,
        repo_link : "https://github.com/saisurya7860/Chat-SoC",
        code : "View Code"
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
                <a href="${project.repo_link}" target = "_blank"><button class="repo">${project.code}</button></a>
            </div>
        </div>

    </div>
    `;
    prjt_container.innerHTML += card ; 
});

