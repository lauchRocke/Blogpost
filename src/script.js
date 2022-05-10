const create = document.querySelector(".create");
const textarea = document.querySelector("#textarea");
const button = document.querySelector(".button");
const text = document.querySelector(".text");
const write = document.querySelector("#write")
const form = document.querySelector("#form");
const paragraph_container = document.querySelector(".paragraph_container");
// const title = document.getElementById("title1").value;

// const myFunction = document.querySelector('#myFunction');

 button.addEventListener('click', myFunction)
 
 function myFunction() {
     var myContent = tinymce.activeEditor.getContent();
     console.log(myContent);
    //  document.getElementById("demo").innerHTML = myContent;
     let inputValue = document.getElementById("domTextElement").value; 
     document.getElementById("valueInput").innerHTML = inputValue; 
     console.log(inputValue);
    }

 tinymce.init({
     selector: 'textarea'
  });