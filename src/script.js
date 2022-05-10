const create = document.querySelector(".create");
const textarea = document.querySelector("#textarea");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const write = document.querySelector("#write")
const form = document.querySelector("#form");
const paragraph_container = document.querySelector(".paragraph_container")

button.addEventListener("click", function(e){
    e.preventDefault();
    console.log(textarea.value);
    let paragraph = document.createElement('p');
    paragraph.innerText = textarea.value;
    // paragraph_container.appendChild(paragraph);

})
