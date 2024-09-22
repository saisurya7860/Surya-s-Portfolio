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
        ]

    },
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
        ]

    },
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
        ]

    }
];

const skill_container = document.querySelector('.skill-js-container') ;
skill.forEach(skill => {
    const techs = skill.technologies[0];  // Access the first (and only) object in the 'technologies' array
    const skill_card = `
     <div class="skillcard">
        <div class="skill-title">
            <p>${skill.role}</p>
        </div><!--Skill Title-->

        <div class="skill-columns">

            <div class="skill-stack">
                <div class="skill">
                    <i class="fa-brands fa-html5 fa-xl" style="color: #e44d26;"></i>
                    <div>${techs.tech1}</div>                               
                </div>

                <div class="skill">
                    <i class="fa-brands fa-css3-alt fa-lg" style="color: #238cc8;"></i>
                    <div>${techs.tech2}</div>
                </div>

                <div class="skill">
                    <i class="fa-brands fa-js fa-lg" style="color: #f0db4f;"></i>
                    <div>${techs.tech3}</div>
                </div>

            </div> <!--skill stack cloumn1-->

            <div class="skill-stack">
                <div class="skill">
                    <i class="fa-brands fa-bootstrap fa-lg" style="color: #7911f8;"></i>
                    <div>${techs.tech4}</div>
                </div>

                <div class="skill">
                    <i class="fa-brands fa-git-alt fa-lg" style="color: #f34f29;"></i>
                    <div>${techs.tech5}</div>
                </div>

                <div class="skill">
                    <i class="fa-brands fa-github fa-lg" style="color: #181616;"></i>
                    <div>${techs.tech6}</div>   
                </div>

            </div> <!--Skill stack Column2-->

        </div><!--Skill stack-->

    </div> <!--Skill card-->
    ` ;
    skill_container.innerHTML += skill_card ;
});