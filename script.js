
const form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email.trim() === '' || password.trim() === '') {
        alert('write yours date, please');
        return false;
    }
    window.location.href = "thanks.html"
    return true;
});

const button = document.getElementById('myButton');

button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = "darkred"
})

button.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = "red"
})