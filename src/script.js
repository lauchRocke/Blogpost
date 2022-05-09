const create = document.querySelector(".create");
const textarea = document.querySelector("#textarea");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const write = document.querySelector("#write")
const form = document.querySelector("#form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(textarea.value)
})
text.innerHTML = textarea.value;