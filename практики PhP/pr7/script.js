document.querySelector('.clear__cache').addEventListener('click', ()=>{
    document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.location.href = '?'
})

function addToCart(product) {
    fetch('addToCart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'product=' + product,
    })
    .then(response => response.text())
    .then(data => {
        var cartList = document.getElementById("cart-items");
        var listItem = document.createElement("li");
        listItem.textContent = data;
        cartList.appendChild(listItem);
    });
}