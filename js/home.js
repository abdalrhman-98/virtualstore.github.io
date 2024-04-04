let featuredDom = document.querySelector('.featured-products');
let clothesDom = document.querySelector('.clothes-products');
let shoesDom = document.querySelector('.shoes-products');
let watchesDom = document.querySelector('.watches-products');

function DrawUI(arr , classDom) {
    let productUI = arr.map((item) => {
        return (
            `<div class="product text-center col-lg-3 col-md-4 col-12" onclick="getItem(${item.id})">
                    <img class="img-fluid mb-3" src=${item.imgUrl} alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">${item.title}</h5>
                    <h4 class="p-price">$${item.price}</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>`);
    }).join(" ");
    
    classDom.innerHTML = productUI;
}

DrawUI(productsDB.featured , featuredDom)
DrawUI(productsDB.clothes , clothesDom)
DrawUI(productsDB.shoes , shoesDom)
DrawUI(productsDB.watches , watchesDom)