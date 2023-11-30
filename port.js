

var changeul = document.getElementById("list")
var btn = document.getElementById("dropdown")
console.log(btn)

btn.addEventListener("click", function (e) {
    e.preventDefault()
    var dropChild1 = btn.childNodes[1];
    var dropChild2 = btn.childNodes[3];
    var dropChild3 = btn.childNodes[5];

    console.log(dropChild3)
    if (e.target == dropChild1 || e.target == dropChild2 || e.target == dropChild3) {

        changeul.style.cssText = "transform:none";

        dropChild1.style.cssText = "transform: rotate(45deg) translateX(6.5px); border:1px solid white";
        dropChild2.style.cssText = "transform: rotate(-43deg) translateX(6px);  border:1px solid white";
        dropChild3.style.cssText = "transform: scale(0);transform-origin:right center;";

    }
    else {

        dropChild1.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild2.style.cssText = "transform: rotate(0) translateX(0);color:red";
        dropChild3.style.cssText = "transform: scale(1);transform-origin: left center;color:red";
        changeul.style.cssText = "transform:block";

    }

})

var fron = document.getElementById("Frontend_Developer");
var fron1 = document.getElementById("Frontend_Developer1");
var fdata = document.getElementById("exp_time")
var fdata2 = document.getElementById("exp_time1")
fron1.addEventListener("click", function (e) {
    e.preventDefault();


    console.log(frontdata)
    console.log(front1)

    fdata.style.display = "none";
    fdata2.style.display = "block"
    fron.style.background = "none"
    fron1.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})
fron.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(frontdata)
    console.log(front1)

    fdata2.style.display = "none";
    fdata.style.display = "block";
    fron1.style.background = "none";
    fron.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})




var front = document.getElementById("Mumbai");
var front1 = document.getElementById("Aptech");
var frontdata = document.getElementById("edu_time")
var frontdata2 = document.getElementById("edu_time1")
front1.addEventListener("click", function (e) {
    e.preventDefault();


    console.log(frontdata)
    console.log(front1)

    frontdata.style.display = "none";
    frontdata2.style.display = "block"
    front.style.background = "none"
    front1.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})
front.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(frontdata)
    console.log(front1)

    frontdata2.style.display = "none";
    frontdata.style.display = "block";
    front1.style.background = "none";
    front.style.background = "linear-gradient(hsla(7,100%,78%,0),hsl(342.81deg 90.1% 33.08%),hsla(7,100%,78%,.51))";
})


var skills = document.querySelectorAll(".skilled");
console.log(skills)
var html = document.getElementById("skill_html")
var css = document.getElementById("skill_css")
var javascript = document.getElementById("skill_javascript")
var bootstrap = document.getElementById("skill_bootstrap")
var python = document.getElementById("skill_python")
skills.forEach(function (skill) {
    console.log(skill)


    skill.addEventListener("click", function (e) {
        e.preventDefault()
        var text1 = e.target.textContent;
        console.log(text1)
        var circle1 = document.querySelectorAll(".skill_circle")
        Array.from(circle1).forEach(function (circle) {
            // console.log(circle);
            // console.log(circle1)

            if (text1 == "HTML") {

                console.log("hello")
                circle1[0].style.backgroundColor = "#1e847f";
                html.style.display = "block";
                css.style.display = "none";
                python.style.display = "none"
                javascript.style.display = "none"
                bootstrap.style.display = "none"
                circle1[2].style.backgroundColor = "#fff"
                circle1[3].style.backgroundColor = "#fff"
                circle1[4].style.backgroundColor = "#fff"
                circle1[1].style.backgroundColor = "#fff"
            }
            else if (text1 == "CSS") {
                console.log("hello")

                circle1[1].style.backgroundColor = "#1e847f"
                css.style.display = "block";
                html.style.display = "none";
                python.style.display = "none";
                javascript.style.display = "none"
                bootstrap.style.display = "none"
                circle1[2].style.backgroundColor = "#fff"
                circle1[3].style.backgroundColor = "#fff"
                circle1[4].style.backgroundColor = "#fff"
                circle1[0].style.backgroundColor = "#fff";


            }
            else if (text1 == "JavaScript") {

                circle1[3].style.backgroundColor = "#1e847f"
                circle1[2].style.backgroundColor = "#fff"
                circle1[1].style.backgroundColor = "#fff"
                circle1[4].style.backgroundColor = "#fff"
                circle1[0].style.backgroundColor = "#fff";
                javascript.style.display = "block"
                html.style.display = "none";
                css.style.display = "none";
                bootstrap.style.display = "none"
                python.style.display = "none"
                circle1[1].style.backgroundColor = "#fff"
            }
            else if (text1 == "Bootstrap") {


                circle1[2].style.backgroundColor = "#1e847f"
                circle1[3].style.backgroundColor = "#fff"
                circle1[1].style.backgroundColor = "#fff"
                circle1[4].style.backgroundColor = "#fff"
                circle1[0].style.backgroundColor = "#fff";
                bootstrap.style.display = "block"
                html.style.display = "none";
                css.style.display = "none";
                javascript.style.display = "none"
                python.style.display = "none"
            }
            else if (text1 == "Python") {
                circle1[2].style.backgroundColor = "#fff"
                circle1[3].style.backgroundColor = "#fff"
                circle1[1].style.backgroundColor = "#fff"
                circle1[0].style.backgroundColor = "#fff";

                circle1[4].style.backgroundColor = "#1e847f"
                python.style.display = "block"
                html.style.display = "none";
                css.style.display = "none";
                javascript.style.display = "none"
                bootstrap.style.display = "none"
            }

            else {
                circle.style.backgroundColor = "#fff";
            }
        })

    })

})


// var sections = document.querySelectorAll("section");
// console.log(sections)
// var top = window.scrollY;
// console.log(top)
// window.onscroll = () => {
//     sections.forEach(sec => {
//     var top = window.scrollY;
//     var offset = sec.offsetTop - 150;
//     var height = sec.offsetHeight;
//     if (top >= offset && top < offset + height) {
//     sec.classList.add('  animate__fadeInUp');
//     }
//     // if want to use repeating
//     else {
//     sec.classList.remove(' animate__fadeInUp');
//     }
// })
// }