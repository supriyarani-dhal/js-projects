// let gameNum = 39;
// let userNum = prompt("guess the number");
// while(userNum != gameNum){
//     userNum = prompt("wrong number , please guess again");
// }
// alert("you own!")

// let marks = [90 , 95 , 87 , 99 , 76];
// const res = marks.filter((val) =>{
//     return val > 90;
// })
// console.log(res)

// let n = prompt("enter the n")
// let arr = []
// for(let i = 1; i <= n; i++){
//     arr[i - 1] = i
// }
// const sum = arr.reduce((res , cur) =>{
//     return res + cur;
// })
// const prod = arr.reduce((res , cur) =>{
//     return res * cur;
// })

// let h2 = document.getElementsByTagName("h2");
// console.dir(h2);

// let divs = document.querySelectorAll(".box");
// let i = 1
// for(div of divs){
//     div.innerText = `unique value ${i}`
//     i++;
// }

// let btn = document.createElement("button");
// btn.innerText = "Click me-->";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// document.querySelector("body").prepend(btn);
// document.querySelector(".para").classList.add("newClass");

let mode = "light";
let btn = document.querySelector("button");
btn.addEventListener("click" , () =>{
    if(mode === "light"){
        document.querySelector("body").style.backgroundColor = "black"
        mode = "dark"
    }else{
        document.querySelector("body").style.backgroundColor = "white"
        mode = "light"
    }
})