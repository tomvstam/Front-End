var commentSection = document.querySelector('.comments-container');
var commentForm = document.querySelector('#comment-form');
var commentTextBox = document.querySelector('#comment');
var usernameInput = document.querySelector('#username');


console.log(commentSection);

commentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var comment = '<div class="comment"><div class="username">' + usernameInput.value + '</div><div class="comment-text">' + commentTextBox.value + '</div></div>';

    commentTextBox.value = '';
    usernameInput.value = '';

    commentSection.innerHTML = comment + commentSection.innerHTML;
});