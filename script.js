const tag = document.getElementById('onClick');
const sound = document.getElementById('clickSound');

tag.addEventListener('click', function() {
    sound.play();
});