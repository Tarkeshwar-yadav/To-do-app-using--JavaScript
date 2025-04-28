'use strict'


const submitButton = document.querySelector('#submitButton');
const firstItem= document.querySelector(".first-item");
const outputBoxList = document.querySelector(".output-box ol");
const inputTask = document.querySelector("#inputTask");

submitButton.addEventListener("click", ()=> {
    if(!inputTask.value){
        alert("No task Added");
        return;
    }
    const newTask = document.createElement('li');
    newTask.innerHTML = firstItem.innerHTML;
    outputBoxList.append(newTask);

    newTask.querySelector("p").innerText = inputTask.value;
    inputTask.value = "";  
})
outputBoxList.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.classList.contains("finish-button")){
     const p =  e.target.parentElement.previousElementSibling
     p.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("delete-button")){
        e.target.parentElement.parentElement.remove();
    }
})
