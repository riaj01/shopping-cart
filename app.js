const firstPrice = 1219;
const secondPrice = 59;
const plusBtn1 = document.querySelector("#plus-btn1");
plusBtn1.addEventListener("click",function(){
    
     getInput("inputValue1");
    currentAmount("currentAmount1",firstPrice);
    subTotal("totalAmount",firstPrice);
    subTotal2("totalAmount2",firstPrice);
})

const plusBtn2 = document.querySelector("#plus-btn2");
plusBtn2.addEventListener("click",function(){
    
     getInput("inputValue2");
    currentAmount("currentAmount2",secondPrice);
    subTotal("totalAmount",secondPrice);
    subTotal2("totalAmount2",secondPrice);
})

const minusBtn1 = document.querySelector("#minus-btn1");
minusBtn1.addEventListener("click",function(){
    getMinusInput("inputValue1");
    currentAmount("currentAmount1",-1*firstPrice);
    subTotal("totalAmount",-1*firstPrice);
    subTotal2("totalAmount2",-1*firstPrice);
})

const minusBtn2 = document.querySelector("#minus-btn2");
minusBtn2.addEventListener("click",function(){
    getMinusInput("inputValue2");
    currentAmount("currentAmount2",-1*secondPrice);
    subTotal("totalAmount",-1*secondPrice);
    subTotal2("totalAmount2",-1*secondPrice);
})

function getInput(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    const totalInput = inputNumber + 1;
    document.getElementById(id).value = totalInput;
}

function getMinusInput(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    const totalInput = inputNumber - 1;
    document.getElementById(id).value = totalInput;
}
function currentAmount(id,price){
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const newAmount = currentAmountNumber + price;
    document.getElementById(id).innerText = newAmount;
}

function subTotal(id,price){
    const totalAmount = document.getElementById(id).innerText;
    const totalAmountNumber = parseFloat(totalAmount);
    const subTotal = totalAmountNumber + price;
    document.getElementById(id).innerText = subTotal;
}

function subTotal2(id,price){
    const totalAmount = document.getElementById(id).innerText;
    const totalAmountNumber = parseFloat(totalAmount);
    const subTotal = totalAmountNumber + price;
    document.getElementById(id).innerText = subTotal;
}

const removeBtn1 = document.getElementById("remove-btn1");
removeBtn1.addEventListener("click",function(){
    cartItem("cart-item1");
    subTotal("totalAmount",-1*firstPrice);
    subTotal2("totalAmount2",-1*firstPrice);
})

const removeBtn2 = document.getElementById("remove-btn2");
removeBtn2.addEventListener("click",function(){
    cartItem("cart-item2");
    subTotal("totalAmount",-1*secondPrice);
    subTotal2("totalAmount2",-1*secondPrice);
})

function cartItem(id){
    const cartItem = document.getElementById(id);
    cartItem.style.display = "none";
    
}