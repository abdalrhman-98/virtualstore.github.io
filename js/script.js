let product = document.querySelector('.product');
let badgeDom = document.querySelector('.badge');

function getItem(id) {
    localStorage.setItem('productId', id);
    window.location.href = 'sproduct.html'
}


if (JSON.parse(localStorage.getItem('productsInCart')).length === 0) {
    badgeDom.style.display = "none";
} else {
    badgeDom.style.display = "inline";
}

