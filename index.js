let add = document.querySelector("button");
let ul = document.querySelector("ul");
// add function to add item into the list
add.addEventListener("click",()=>{
    let task = document.querySelector("#task");
    if(task.value != ""){
    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.setAttribute('type','checkbox');
    checkBox.classList.add("check")
    li.innerText = task.value;
    li.insertAdjacentElement("afterbegin",checkBox);
    
    let i = document.createElement("button"); 
    i.innerHTML = '<i class="fa-solid fa-trash"></i>';
    i.classList.add("delete");
    li.appendChild(i);
    ul.appendChild(li);

    task.value = "";
    }
});

//mark task to complete
ul.addEventListener("click",function (event){
    if(event.target.className == "check"){
        let parElemnt = event.target.parentElement;
        parElemnt.classList.toggle("done");
    }
});

//remove item from the list after completion || remove item form the list 
ul.addEventListener("click",function(event){
    console.log("clicked");
    console.log(event);
    if(event.target.nodeName == "I"){
    let liItem = event.target.parentElement;
    liItem.parentElement.remove();
    // console.log()
    }
});

//filter part

let all = document.querySelector(".all");
let complete = document.querySelector(".complete");
let pending = document.querySelector(".pending");


all.addEventListener("click",function(){
    let tasks = document.querySelectorAll(".check");
    let itemList = document.querySelector(".itemList");
    for(const task of tasks){
        itemList.appendChild(task.parentElement);
    }
    // console.log(itemList)

})
let li = document.querySelectorAll("li");
// console.log(li);

complete.addEventListener("click",function(){
    let container = document.querySelector(".scroll");
    let itemList = document.querySelector(".itemList");
    let ulLIst = document.createElement("ul");
    let task = itemList.children;
    console.log(task);
    for (const item of task) {
        // console.dir(item.className=="done");
        if(item.className == "done"){
            ulLIst.appendChild(item);
            container.replaceChild(ulLIst,itemList);
        }
    }
    
    // console.log(itemList);

});
