const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let btn = document.querySelector("form button");
let dropdowns = document.querySelectorAll(".dropdown select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg")

for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name === "From" && code === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "To" && code === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`
}

btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 0){
        amtVal = 1;
        amount.value = '1';
    }
    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmt = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
})

