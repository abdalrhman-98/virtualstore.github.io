let relatedDom = document.querySelector('.related-products');
let products = productsDB.all;
let productId = localStorage.getItem('productId');
let singleDom = document.querySelector('.single');
let productDetails = products.find((item) => item.id == productId);

singleDom.innerHTML = `
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100" src=${productDetails.imgUrl} alt="">
            </div>
            <div  class="col-lg-6 col-md-12 col-12">
                <h3 class="py-4">${productDetails.title}</h3>
                <h2>$${productDetails.price}</h2>
                <h4 class="mt-4 mb-4 ">Product Details</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laboriosam eveniet delectus veritatis suscipit sequi animi officia ipsa voluptatibus sunt vitae hic quo nemo saepe odio soluta, accusantium dolor nisi laborum! Voluptatibus est debitis, ab corrupti enim commodi necessitatibus repellendus quam maxime nostrum quo quaerat. Necessitatibus repellendus voluptate deserunt enim.</p>
            <button onclick="addToCart(${productDetails.id})" class="buy-btn">Add To Cart</button>
            </div>

            `

function DrawUI(arr , classDom) {
    let productUI = arr.map((item) => {
        return (
            `<div onclick="getItem(${item.id})" class="product text-center col-lg-3 col-md-4 col-12">
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
DrawUI(productsDB.featured , relatedDom)

let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];


function addToCart(id) {
        let chosenItem = products.find((item) => item.id === id);
        
        addedItem = [...addedItem , chosenItem]
        let uniqProducts = uniqArr(addedItem,"id")
        console.log(uniqProducts)
        localStorage.setItem('productsInCart' , JSON.stringify(uniqProducts))
        badgeDom.style.display = "inline";
}

function uniqArr(arr,filterType) {
    let uniq = arr.map(item => item[filterType])
                .map((item, i , final) => final.indexOf(item) === i && i)
                .filter((item) => arr[item])
                .map((item) => arr[item]);
        
        return uniq
}