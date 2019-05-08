document.addEventListener('DOMContentLoaded', function(event) {
    $('#caret').toggleClass('rotate');
});

function toggleCollapse() {
    $('#frequentlyAskedQuestionsContent').toggleClass('hide');
    $('#caret').toggleClass('rotate');
}

//npm install --global surge