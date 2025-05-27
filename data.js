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
        hero_img : "assets/Surya_pic5.jpg",
        resume_path : "./assets/Surya_Resume.pdf",
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
                    <h1>${hero.intro}<span> ${hero.name}</span></h1>
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
        abt_info :"“I’m a Frontend Developer with a strong foundation in Artificial Intelligence, Machine Learning, Python, and Data Structures & Algorithms. I enjoy blending design with logic to build user-friendly interfaces while exploring intelligent solutions through modern technologies.",
        
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

                <div class="description text-justify">
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
const skill = [
  {
    Skill: "Frontend",
    skillicons: [
      {
        iconslft: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=YsPdguLCFOMH&format=png&color=000000",
      }
    ],
    Technames: ["React", "HTML", "CSS", "Javascript","BS ","TailWind","Vite","Netlify"],
  },
  {
    Skill: "Others",
    skillicons: [
      {
        iconslft: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=s35S45z4txOJ&format=png&color=000000",
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000",
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=ibuQHJm1Jtzg&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000"
      },
      {
        iconslft: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
        iconsrht: "https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
      }
    ],
    Technames: ["Python", "DSA", "SQL", "TensorFlow","ML","numpy","git","github"],
  },
];

const skill_container = document.querySelector('.skill-js-container');

skill.forEach((item) => {
  let iconRow = '';

  item.skillicons.forEach((icon, i) => {
    const techNameLft = item.Technames[i * 2] || '';
    const techNameRht = item.Technames[i * 2 + 1] || '';

    iconRow += `
      <div class="flex w-full items-center justify-between space-y-0.5 mt-2">
        <div class=" w-full flex sm:flex-row place-items-center flex-col space-x-2">
          <img src="${icon.iconslft}" alt="icon" class="w-10 h-10" />
          <p class="font-medium ">${techNameLft}</p>
        </div>
        <div class=" w-full flex sm:flex-row flex-col place-items-center space-x-2">
          <img src="${icon.iconsrht}" alt="icon" class="w-10 h-10" />
          <p class="font-medium">${techNameRht}</p>
        </div>
      </div>
    `;
  });

  skill_container.innerHTML += `
    <div class=" w-full skill_card p-2 sm:w-2/3 bg-white rounded-xl cursor-pointer border border-blue-400 ease-in-out hover:translate-y-1 transition-all  duration-300 mb-4">
      <h1 class="text-gray-900 text-center text-2xl font-medium">${item.Skill}</h1>
      ${iconRow}
    </div>
  `;
});

// project card dynamically 
const project = [
    {
        imgsrc : "assets/Signspell.png",
        title : "SignSpell",
        duration : "Mar 2025 - Present" ,
        info : "Developed a React web app SignSpell that translates speech into animated sign language." ,
        repo_link : "https://saisurya7860.github.io/SignSpell/#/",
        code : "View Live"
    },
    {
        imgsrc : "assets/faceintuit.png",
        title : "FaceIntuit",
        duration : "Aug 2024 - Sept 2024" ,
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
   <div class="project-card border border-blue-400 ease-in-out">
        <div>
            <img class="prjt-thumbnail" src="${project.imgsrc}" alt="project-thumbnail">
        </div>

        <div class="prjt-des">
            <h2 class="prjt-title font-bold text-2xl">${project.title}</h2>
            <div class="prjt-duration">${project.duration}</div>
            <div class="prjt-info">${project.info}</div>
            <div class="git-butn">
                <a href="${project.repo_link}" target = "_blank"><button class="repo mt-3">${project.code}</button></a>
            </div>
        </div>

    </div>
    `;
    prjt_container.innerHTML += card ; 
});


//Qualification section dynamic data call
const qualification = [
    {
        title : "Qualifications",
        subtitle : "My Journey",
        edu_icon_txt : "Education",
        qualification_datas : [
            {
                present_qualiication : "B.tech   AI & DS",
                qualify_institute : "Kathir College of Engineering",
                qualify_calender : "2021 - 2025",
                institute_logo : "assets/clg-logo.png",
            },
            {
                present_qualiication : "HSC",
                qualify_institute : "Perks Matric Hr Sec School",
                qualify_calender : "2019 - 2021",
                institute_logo : "assets/perks-logo.png",
            },
            {
                present_qualiication : "SSLC",
                qualify_institute : "Perks Matric Hr Sec School",
                qualify_calender : "2018 - 2019",
                institute_logo : "assets/perks-logo.png",
            },
        ]
    
    }
];

const qualification_container = document.querySelector('.qualification-js-container');
qualification.forEach(qualify => {

    let qualify_infos = '';

    qualify.qualification_datas.forEach(infos => {
        qualify_infos += `
            <div class="qualfication-data ">


                <div class="studies">
                    <div>${infos.present_qualiication}</div>
                        <div class="institute-info">
                            <img src="${infos.institute_logo}" alt="school-logo" class="institute-logo">
                            <p class="qualify-institute">${infos.qualify_institute}</p>
                        </div>
                    <p class="qualify-calender"><i class="fa-solid fa-calendar-days" style="color: #a19fad;"></i> ${infos.qualify_calender}</p>
                </div>

              
            </div> 
        `;
    });

    const qualification_datas = `
        <div class="qualification container">
            <h1 class="title">${qualify.title}</h1>
            <p class="subtitle">${qualify.subtitle}</p>

            <div class="edu-icon">
                <i class="fa-solid fa-graduation-cap" style="color: #a19fad;"></i>${qualify.edu_icon_txt}
            </div>

            <div class="qualification-content">
              

                <div class="qualify-tot-datas">

                    ${qualify_infos}
                   
                </div>
                <!--qualify-tot-datas-->
                
            </div> <!--qualification-content-->
        </div> 
    ` ;

    qualification_container.innerHTML += qualification_datas;

}) ;


const contact = [
    {
        contact_social_link : [
            {
                via_icon : "fa-brands fa-whatsapp fa-xl",
                Via_1 : "whatsapp Me",
                Via_1_num : "+91 9952362697",
                href : "https://wa.me/9952362697",
            },
            {
                via_icon : "fa-regular fa-envelope fa-xl",
                Via_1 : "Email",
                Via_1_num : "saisurya7860@gmail.com",
                href  : "mailto:saisurya7860@gmail.com",
            },
            {
                via_icon : "fa-brands fa-linkedin-in fa-xl",
                Via_1 : "linkedin",
                Via_1_num : "In/surya B",
                href  : "https://www.linkedin.com/in/surya-btechi/"
            },
            {
                via_icon : "fa-solid fa-location-crosshairs fa-xl",
                Via_1 : "Location",
                Via_1_num : "Coimbatore, India",
            }
        ],
        
        contact_label : [
            {
                label_name : "Name",
                text :  "<input class='contact-input' type='text'>",
            },
            {
                label_name : "Email",
                text:  "<input class='contact-input' type='text'>",
            },
            {
                label_name : "project",
                text : "<textarea class='txt-box' cols='0' rows='5'></textarea>"
            },
        ]
    }
] ;

const contact_container = document.querySelector('.contact-container');

contact.forEach(connect => {

    let contact_left_sec = '';
    connect.contact_social_link.forEach(leftsec => {
        contact_left_sec += `
            <a href="${leftsec.href}" target="_blank">
                <div class="my-info">
                    <div><i class=" ${leftsec.via_icon} " id ="socio-icon"></i></div>
                    <div class="contact-via">
                        ${leftsec.Via_1}
                        <div class="contact-num">${leftsec.Via_1_num}</div>
                    </div>
                </div>
            </a>
            
        `
    });

    let contact_right_sec = '';
    connect.contact_label.forEach(right_sec =>{
        contact_right_sec += `
         <div class="contact-textbox">
                <label for class="contact_label">${right_sec.label_name}</label>
                ${right_sec.text}
         </div>
        `;
    });


    const contact_whole = `
        <div class="contact-content">

                <div class="contact-left-sec">

                    ${contact_left_sec}

                </div> <!--contact-left-sec-->


                <div class="contact-right-sec">
                   ${contact_right_sec}    
                </div> <!--contact -right-sec-->

        </div> <!--Contact-content-->
    `; 
    contact_container.innerHTML += contact_whole;
});