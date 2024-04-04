let productsDom = document.querySelector('.products');
let noProductsDom = document.querySelector('.noProducts');
let tableDom = document.querySelector('.p-table');
var TableData = new Array();
var quantity = new Array();
var oldq = new Array();
var total=0;

function drawCartProducts(allProducts){
    if (JSON.parse(localStorage.getItem('productsInCart')).length === 0) {
        tableDom.style.display = "none";
        noProductsDom.innerHTML = `<p>There is no products in cart !!</p>`
    }
if (JSON.parse(localStorage.getItem('productsInCart')).length != 0) {

    let products = JSON.parse(localStorage.getItem('productsInCart')) || allProducts;
    let productUI = products.map((item) => {
        return(`<tr>
                    
                    <td><a onclick="removeItemFromCart(${item.id})" ><i class="fas fa-trash-alt"></i></a>
                        <a onclick="addquantity(${item.id})" ><i class="fa fa-arrow-circle-up"></i></a>
                        <a onclick="losequantity(${item.id})" ><i class="fa fa-arrow-circle-down"></i></a></td>
                    <td><img src=${item.imgUrl} alt=""></td>
                    <td><h5>${item.title}</h5></td>
                    <td>${item.price}</td>
                    <td>1</td>
                    <td>$${item.price}</td>
                </tr>`);
    }).join('');
    productsDom.innerHTML = productUI;}
    
}
drawCartProducts();
readquantity();

function addquantity(id){ 
let a=id;
myValues=localStorage.getItem('productsInCart')
myValues2=JSON.parse(myValues);

for (i =0; i<myValues2.length;i++)
{ if (a === myValues2[i].id){
        var myTable = document.getElementById('shopTable');
        myTable.rows[i+1].cells[4].innerHTML = parseInt(myTable.rows[i+1].cells[4].innerHTML)+1;}}
updatequantity();

}

function losequantity(id){ 
let a=id;
myValues=localStorage.getItem('productsInCart')
myValues2=JSON.parse(myValues);
for (i =0; i<myValues2.length;i++)
{if (a === myValues2[i].id){
         var myTable = document.getElementById('shopTable');
         if (myTable.rows[i+1].cells[4].innerHTML==='1'){myTable.rows[i+1].cells[4].innerHTML=1;}
         else{myTable.rows[i+1].cells[4].innerHTML = parseInt(myTable.rows[i+1].cells[4].innerHTML)-1;}}}
updatequantity();
}

function updatequantity()
{
total=0;
myValues=localStorage.getItem('productsInCart')
myValues2=JSON.parse(myValues);
for (i =0; i<myValues2.length;i++)
{
     var myTable = document.getElementById('shopTable');
     quantity[i]=myTable.rows[i+1].cells[4].innerHTML;
     myTable.rows[i+1].cells[5].innerHTML = "$"+parseInt(myTable.rows[i+1].cells[3].innerHTML)*parseInt(myTable.rows[i+1].cells[4].innerHTML);
     total=total+parseInt(myTable.rows[i+1].cells[3].innerHTML)*parseInt(myTable.rows[i+1].cells[4].innerHTML) ;}
    localStorage.setItem('oldquantity', JSON.stringify(quantity));
    localStorage.setItem('tot', total);
}



function readquantity()
{if (JSON.parse(localStorage.getItem('oldquantity')).length != 0 && JSON.parse(localStorage.getItem('productsInCart')).length != 0)
   {
   oldq=JSON.parse(localStorage.getItem('oldquantity'));
   myValues=localStorage.getItem('productsInCart')
   myValues2=JSON.parse(myValues);
   for (i =0; i<myValues2.length;i++)
    {var myTable = document.getElementById('shopTable');
        if (oldq[i]>1){
        myTable.rows[i+1].cells[4].innerHTML = oldq[i];
        myTable.rows[i+1].cells[5].innerHTML = parseInt(myTable.rows[i+1].cells[3].innerHTML)*parseInt(myTable.rows[i+1].cells[4].innerHTML);}}
        updatequantity();}}



function removeItemFromCart(id) {
    let a=id;
    oldq=JSON.parse(localStorage.getItem('oldquantity'));
    myValues=localStorage.getItem('productsInCart')
    myValues2=JSON.parse(myValues);
    for (i =0; i<myValues2.length;i++)
      {if (a === myValues2[i].id){
       oldq.splice(i, 1);}}
    localStorage.setItem('oldquantity', JSON.stringify(oldq));
    
    let productsInCart = localStorage.getItem('productsInCart');
    if(productsInCart) {
        let items = JSON.parse(productsInCart);
        let filteredItem = items.filter((item) => item.id !== id);
        localStorage.setItem('productsInCart', JSON.stringify(filteredItem));
        if (JSON.parse(localStorage.getItem('productsInCart')).length === 0) {
            badgeDom.style.display = "none";} 
       else {badgeDom.style.display = "inline";}
       drawCartProducts(filteredItem);
       readquantity();}}