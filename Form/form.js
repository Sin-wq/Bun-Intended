const orderbtn = document.getElementById("submit")


orderbtn.addEventListener( "click" , () => {
    alert("Order Successfully Placed!")
    window.location.href = "../index.html"
} )



const drop  = document.getElementById("drop")
const price = document.getElementById("pricebox")

window.addEventListener("load" , () => {
    const params =  ( new URL(document.location)).searchParams;
    const item  = params.get("item")
    // console.log(item)
    // drop.selectedIndex = "0"
    if (item == "momo")
    {
        drop.selectedIndex = "0"
        price.innerHTML = "10,000"
    }
    else if (item == "shawarma")
    {
        drop.selectedIndex = "1"
        price.innerHTML = "20,000"
    }
    else if (item == "pizza")
    {
        drop.selectedIndex = "2"
        price.innerHTML = "50,000"
    }
    else if (item == "icecream")
    {
        drop.selectedIndex = "3"
        price.innerHTML = "34,000"
    }
    else if (item == "noodles")
    {
        drop.selectedIndex = "4"
        price.innerHTML = "23,000"
    }
    else if (item == "chicken")
    {
        drop.selectedIndex = "5"
        price.innerHTML = "1023,000"
    }


} )