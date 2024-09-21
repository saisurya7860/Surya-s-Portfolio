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
        imgsrc : "assets/chatbot.avif",
        title : "ChatSoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed 'ChatSoC' an advanced chatbot using OpenAI's API in Python." ,
        repo_link : "https://github.com/saisurya7860/Chat-SoC"
    },
    {
        imgsrc : "assets/visionSoC.png",
        title : "Vision SoC",
        duration : "March 2023 - May 2023" ,
        info : "Developed VisionSoC, an advanced image upscaling model using with Python." ,
        repo_link : "https://github.com/saisurya7860/Chat-SoC"
    },
    {
        imgsrc : "assets/portfolio-thumbnail.png",
        title : "My Portfolio",
        duration : "May 2024 - Sep 2024" ,
        info : "Welcome to my portfolio, showcasing my projects in AI, ML, Frontend projects." ,
        repo_link : "https://github.com/saisurya7860/Chat-SoC"
    },
    {
        imgsrc : "assets/faceintuit.png",
        title : "FaceIntuit",
        duration : "Aug-2024 Sept-2024" ,
        info : "Developed an website for Smart India Hackathon 2024 that documents of our ML project." ,
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
                <a href="${project.repo_link}" target = "_blank"><button class="repo">view</button></a>
            </div>
        </div>

    </div>
    `;
    prjt_container.innerHTML += card ; 
});

 
