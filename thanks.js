const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert("going to github")
    window.location.href = "https://github.com/pcmaia13"
});

const button2 = document.getElementById('myButton');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = "darkred"
})

button.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = "red"
})