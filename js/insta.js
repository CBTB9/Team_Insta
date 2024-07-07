// preloader====

let loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
});
// top preloader ==========
setTimeout(() => {
    let progressBar = document.getElementById("myProgressBar");
  
    let barwidth = 5;
  
    let ab = setInterval(progressFunction, 20);
  
    function progressFunction() {
      if (barwidth >= 100) {
        clearInterval(ab);
        setTimeout(() => {
          progressBar.classList.add("height-0");
        }, 500);
        setTimeout(() => {
          document.getElementById("loader").classList.add("hide-loader");
        }, 500);
      } else {
        barwidth++;
        progressBar.style.width = barwidth + "%";
        document.getElementById("incrementpercentage").innerHTML = barwidth + "%";
      }
    }
  }, 200);
  
// end

// ====== like btn ======
document.addEventListener('DOMContentLoaded', function() {
    // Select all like buttons
    const likeButtons = document.querySelectorAll('.like-button');

    // Iterate over each button and add a click event listener
    likeButtons.forEach(img => {
        img.addEventListener('click', function() {
            // Toggle the 'liked' class on button click
            img.classList.toggle('liked');
        });
    });
});


// ====== favourite btn ========
// select all like buttons
const favouritBtn = document.querySelectorAll('.favourit');

favouritBtn.forEach(img =>{
    img.addEventListener('click', function(){
        img.classList.toggle('favouritBtn');
    });
});
// function favourite(){
//     let heart = document.querySelector((".favourit"));
//     if (heart.src.match("assets/svg/favouritPost.svg")){
//         heart.src = "assets/svg/favouritpostwhite.svg";
//     }
//     else{
//         heart.src = "assets/svg/favouritPost.svg"
//     }
// }
// ======================