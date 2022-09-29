const section = document.getElementById('posts')

// Fetch data from a server

fetch('https://jsonplaceholder.typicode.com/posts')
.then((responseFromServer) => responseFromServer.json())
.then(data => {
    console.log(data);
    data.forEach(post => {
        const h3 = document.createElement('h3')
        h3.textContent = post.title
        section.appendChild(h3)
    })
}) 
.catch(error => console.log(error))

// https://jsonplaceholder.typicode.com/photos





// === event listeners