const wrapper = document.getElementById("container");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        render(data);
    })
