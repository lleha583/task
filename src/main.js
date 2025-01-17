//menu
const btnOpenMenu = document.getElementById('menu');
const btnCloseMenu = document.getElementById('close')
const sidebar = document.getElementById('sidebar')

btnOpenMenu.addEventListener('click', () => {
    sidebar.hidden = !sidebar.hidden
})

btnCloseMenu.addEventListener('click', () => {
    sidebar.hidden = !sidebar.hidden
})




//form
const handleSubmit = (form) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(form)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Ошибка:', error));
}

document.getElementById('contactForm').addEventListener('submit', function (event) {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    event.preventDefault();
    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Пожалуйста, введите ваше имя.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Пожалуйста, введите вашу почту.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Пожалуйста, введите ваше сообщение.';
        isValid = false;
    }

    if (isValid)  handleSubmit({name, email, message})
});




//Fibo

const Fibonachi = (num) => {
    --num
    const arr = [0, 1]
    for(let i = 0; i < num; i++) {
        arr.push(arr.at(-1) + arr.at(-2)) 
    }
    return arr[num]
}

console.log(Fibonachi(4));
