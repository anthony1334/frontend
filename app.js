// console.log();
const liste = document.querySelector('.liste');
const btn = document.querySelector('.button');
btn.addEventListener('click',() => {
   
   
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
   for(let i = 0; i < data.length; i++){

    let newLi = document.createElement('li');
    let newTitle = document.createElement('h2');
    let newParagraphe = document.createElement('p');

    newTitle.innerText = data[i].title;
    newParagraphe.innerText = data[i].body;

    newLi.appendChild(newTitle);
    newLi.appendChild(newParagraphe);

    liste.appendChild(newLi);


   }

 })
})

