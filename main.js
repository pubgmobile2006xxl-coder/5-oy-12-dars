const wrappper = document.getElementById("container");
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    render(data);
})
.catch (error => console.error("Xatolik yuz berdi",error));
