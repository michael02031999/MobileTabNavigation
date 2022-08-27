let home = document.getElementById("home");
let work = document.getElementById("work");
let blog = document.getElementById("blog");
let aboutUs = document.getElementById("aboutUs");

let homeBox = document.getElementById("homeBox");
let workBox = document.getElementById("workBox");
let blogBox = document.getElementById("blogBox");
let aboutUsBox = document.getElementById("aboutUsBox");

let allIconBoxes = document.querySelectorAll(".iconBox");

for (let i = 0; i < allIconBoxes.length; i++) {
  allIconBoxes[i].addEventListener("click", pictureSwap);
}

function pictureSwap(e) {
  if (e.path[1].id == "homeBox" || e.path[2].id == "homeBox") {
    //aboutUs.classList.add("hidden");
    home.style.opacity = "1";
    aboutUs.style.opacity = "0";
    work.style.opacity = "0";
    blog.style.opacity = "0";

    homeBox.firstElementChild.style.color = "rgb(143, 67, 173)";
    workBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    blogBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    aboutUsBox.firstElementChild.style.color = "rgb(119, 119, 119)";
  }
  if (e.path[1].id == "workBox" || e.path[2].id == "workBox") {
    home.style.opacity = "0";
    aboutUs.style.opacity = "0";
    work.style.opacity = "1";
    blog.style.opacity = "0";
    workBox.firstElementChild.style.color = "rgb(143, 67, 173)";
    blogBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    aboutUsBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    homeBox.firstElementChild.style.color = "rgb(119, 119, 119)";
  }
  if (e.path[1].id == "blogBox" || e.path[2].id == "blogBox") {
    home.style.opacity = "0";
    aboutUs.style.opacity = "0";
    work.style.opacity = "0";
    blog.style.opacity = "1";

    workBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    blogBox.firstElementChild.style.color = "rgb(143, 67, 173)";
    aboutUsBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    homeBox.firstElementChild.style.color = "rgb(119, 119, 119)";
  }
  if (e.path[1].id == "aboutUsBox" || e.path[2].id == "aboutUsBox") {
    home.style.opacity = "0";
    aboutUs.style.opacity = "1";
    work.style.opacity = "0";
    blog.style.opacity = "0";
    aboutUsBox.firstElementChild.style.color = "rgb(143, 67, 173)";
    homeBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    workBox.firstElementChild.style.color = "rgb(119, 119, 119)";
    blogBox.firstElementChild.style.color = "rgb(119, 119, 119)";
  }
}
