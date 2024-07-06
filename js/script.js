document.addEventListener('DOMContentLoaded', function() {
    // Select all like buttons
    const likeButtons = document.querySelectorAll('.like-button');

    // Iterate over each button and add a click event listener
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the 'liked' class on button click
            button.classList.toggle('liked');
        });
    });
});
