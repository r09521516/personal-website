// const aspectRatio = 2160 / 1620; // Width/Height
// var clientWidth = document.body.clientWidth;
// var clientHeight = document.body.clientHeight;

// PAGE START ---> VIDEO END
const video = document.getElementById("intro_video");
const monster = document.getElementById("monster");
const flower = document.getElementById("flower");
const wdate = document.getElementById("word_date");
video.addEventListener("ended", () => {
    setTimeout(() => { 
        video.style.display = `none`; 
        monster.style.display = `block`;
        flower.style.display = `block`;
        wdate.style.display = `flex`;
    }, 0);
});
// MONSTER direction
const monsterLeft = document.querySelector(".lf-ver");
const monsterRight = document.querySelector(".rt-ver");
document.addEventListener("mousemove", (e) => {
    var clientWidth = document.body.clientWidth;
    var mouseX = e.clientX;
    if (mouseX > clientWidth / 2) {
        monsterLeft.style.display = `none`;
        monsterRight.style.display = `flex`;
    } else {
        monsterLeft.style.display = `flex`;
        monsterRight.style.display = `none`;
    }
});
// PAGE WINDOWS
const about = document.getElementById("page_about");
var phone = document.getElementById("check_phone");
const contact = document.getElementById("page_contact");
const contactClose = document.getElementById("contact_close");
var laptop = document.getElementById("check_laptop");
const project = document.getElementById("page_project");
const projectClose = document.getElementById("project_close");
// MONSTER ---> ABOUT
monster.addEventListener("click", () => {
    about.style.display = `flex`;
    phone.disabled = true;
    laptop.disabled = true;
});
const aboutClose = document.getElementById("about_close");
aboutClose.addEventListener("click", () => {
    about.style.display = `none`;
    phone.disabled = false;
    laptop.disabled = false;
});
// PHONE ---> CONTACT
phone.addEventListener("change", (e) => {
    if (e.target.checked) {
        contact.style.display = `flex`;
        laptop.disabled = true;
    }
});
contactClose.addEventListener("click", () => {
    contact.style.display = `none`;
    phone.checked = false;
    laptop.disabled = false;
});
// LAPTOP ---> PROJECT
laptop.addEventListener("change", (e) => {
    if (e.target.checked) {
        project.style.display = `flex`;
        phone.disabled = true;

        // PROJECTS ---> SCROLL
        // const projectDiv = document.querySelector(".projects");
        // document.addEventListener("mousemove", (e) => {
        //     var projectWidth = projectDiv.clientWidth;
        //     var mouseX = e.clientX;
        //     if (mouseX > projectWidth / 2) {
        //     } else {
        //     }
        // });
    }
});
projectClose.addEventListener("click", () => {
    project.style.display = `none`;
    laptop.checked = false;
    phone.disabled = false;
});

// CALENDAR
const date = document.getElementById("date");
var curr = new Date();
date.innerText = curr.getDate();
video.addEventListener("play", () => {
    date.style.opacity = `0.6`;
});
// LIGHT
const light = document.getElementById("check_light");
const body = document.querySelector("body");
light.addEventListener("change", (e) => {
    if (e.target.checked) {
        body.style.backgroundImage = `url(/img/bg_room_dark.png)`;
        date.style.color = `#716552`;
        flower.style.opacity = `0.5`;
    } else {
        body.style.backgroundImage = `url(/img/bg_room.png)`;
        date.style.color = `#9e9280`;
        flower.style.opacity = `1`;
    }
});

// const title = document.getElementById("name-title");
// const intro = document.getElementById("intro");
// const lineRb = document.getElementById("line-r");
// const lineRs = document.getElementById("line-red");
// window.addEventListener("scroll", function () {
//     const scrollY = window.scrollY;
//     const ht = window.innerHeight;
//     if (scrollY < ht * 0.35) {
//         title.style.transform = `scale(1)`;
//         title.style.top = `35vh`;
//         title.style.position = `absolute`;
//         lineRb.style.transform = `scale(0.8) rotate(0)`;
//     } else {
//         title.style.transform = `scale(${Math.max(0.25, (1 - (scrollY - ht * 0.35) * 0.001))})`;
//         title.style.top = `5vh`;
//         title.style.position = `fixed`;
//         lineRb.style.transform = `scale(${Math.max(0.5, (0.8 - (scrollY - ht * 0.35) * 0.006))}) rotate(${-(scrollY - window.innerHeight * 0.35) * 0.4}deg)`;  
//     }
//     if (scrollY < ht * 1.2) {
//         intro.style.opacity = `0`;
//     } else if (scrollY < ht * 2.2) {
//         intro.style.opacity = `1`;
//         intro.style.height = `${(scrollY - ht * 1.2)}px`;
//     } else {
//         intro.style.opacity = `${Math.max(0, 1 - ((scrollY - ht * 2.2) / (ht * 2.2)) * 5)}`;
//         if (scrollY > ht * 3) intro.style.height = `0`;
//     }
//     if (scrollY < ht) {
//         lineRs.style.opacity = `0`;
//     } else if (scrollY < ht * 1.8) {
//         lineRs.style.opacity = `${(scrollY - ht) / (ht * 1.5)}`;
//     } else {
//         lineRs.style.opacity = `1`;
//     }
// });
// window.scrollBy({
//     top: windowH * 0.7,
//     left: 0,
//     behavior: "smooth",
// });