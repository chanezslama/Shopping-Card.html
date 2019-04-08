// incrémenter et decrémenter  
function incrementValue(i){
    var value =document.getElementById('number'+i).value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number'+i).value = value;
}
function decrementValue(i){
    var value =document.getElementById('number'+i).value;
    value = isNaN(value) ? 0 : value;
    if (value>0){
    value--;
    document.getElementById('number'+i).value = value;
    }
}

// Remove function

function Remove(i){
    var  itemremove = document.getElementById("itemid"+i);
    itemremove.remove();
}

//Calculate Price incrémentation

function calculatePriceadd(i){
    var quantityInput = Number(document.getElementById('number'+i).value)

    // var total = document.getElementById('total').innerText
    let price=Number(document.getElementById('price'+i).textContent.replace("$",""))
    var totalPrice = price* quantityInput;
    console.log(totalPrice)
    document.getElementById("total"+i).innerHTML=totalPrice+"$"
}

//Calculate Price décrementation
function calculatePricedec(i){
    var quantityInput = Number(document.getElementById('number'+i).value)

    // var total = document.getElementById('total').innerText
    let price=Number(document.getElementById('price'+i).textContent.replace("$",""))
    
    var totalPrice = price * quantityInput
    var totalPricedec = totalPrice  
    
    document.getElementById("total"+i).innerHTML=totalPricedec+"$"
    console.log(totalPricedec)
}
// Calculate sum Shopping Bag
function sumplus (){
    
    var totalbag1=Number(document.getElementById('total1').textContent.replace("$",""))
    var totalbag2=Number(document.getElementById('total2').textContent.replace("$",""))
    var totalbag3=Number(document.getElementById('total3').textContent.replace("$",""))

    var Totalbag = totalbag1+totalbag2+totalbag3
    document.getElementById("totalbag").innerHTML = Totalbag+"$"  
}
function summins (){

    var totalbag1=Number(document.getElementById('total1').textContent.replace("$",""))
    var totalbag2=Number(document.getElementById('total2').textContent.replace("$",""))
    var totalbag3=Number(document.getElementById('total3').textContent.replace("$",""))

    var Totalbag = totalbag1+totalbag2+totalbag3
    document.getElementById("totalbag").innerHTML= Totalbag+"$"   
}




