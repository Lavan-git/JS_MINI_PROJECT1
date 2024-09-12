let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    let delBtn=document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText="delete";
    item.innerText=inp.value;
    item.appendChild(delBtn);
    ul.appendChild(item);    
    inp.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    };
    
})

// let delBtns=document.querySelectorAll(".delete")
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }