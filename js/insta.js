 // Example of how you might toggle active class based on clicked item
// document.querySelectorAll('.sidebar a').forEach(item => {
//     item.addEventListener('click', () => {
//         document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
//         item.classList.add('active');
//     });
// });


// ====== like btn ======
function likebutton(){
    let heart = document.querySelector((".heart"));
    if (heart.src.match("assets/svg/heart.svg")){
        heart.src = "assets/svg/heart_red.svg";
    }
    else{
        heart.src = "assets/svg/heart.svg"
    }
}
// ====== favourite btn ========
function favourite(){
    let heart = document.querySelector((".favourit"));
    if (heart.src.match("assets/svg/favouritPost.svg")){
        heart.src = "assets/svg/favouritpostwhite.svg";
    }
    else{
        heart.src = "assets/svg/favouritPost.svg"
    }
}
// ======================