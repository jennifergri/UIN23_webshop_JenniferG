let cart = []

function addToCart(title, price){
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})
    
    console.log(cart)

    //Etter å ha lagt til et produkt oppdater handlelistevisning:
    renderCart()

    //Så må vi oppdatere label
    document.querySelector("#cart .label").innerHTML = cart.length

    //Oppgave 1:
    document.getElementById("cartview").classList.remove("hidden")
}

function renderCart(){
    //Tom variabel for å bygge HTML til produkter:
    let listHTML = ""
    //Variabel for totalpris, oppgave 2:
    let totalPrice = 0

    //Gå gjennom cart-arrayen, lag <li> for hvert produkt:
    cart.map((prod, index) => listHTML += `<li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice},-</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProduct(${index})">X</button>
    </li>`)

    //Bruke en selektor for å finne riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML

    //Oppgave 2:
    cart.map(total => totalPrice += total.productPrice)
    document.querySelector("#total").innerHTML = totalPrice
}

//Oppgave 3:
function deleteProduct(index){
    /*cart.splice(index, 1)
    renderCart()*/
    
    //3.1:
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart()
    }, 700)
}

function toggleCart(){
    document.querySelector("#cartview").classList.toggle("hidden")
    /*Handlekurven kommer opp når man trykker, og fjernes når man trykker*/
}


