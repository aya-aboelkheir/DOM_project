// const title=document.getElementById("title");
// const button=document.getElementById("btn");

// button.addEventListener("click",function(){
//     title.textContent ="hello javascript";
//     title.style.color="yellow";
// })

// const productsDiv = document.getElementById("products");
const productsDiv = document.querySelector("#products");
//promise
const fetchData = ()=> {
  fetch('https://dummyjson.com/products')
 .then((res) => {
   return res.json();
 })
 .then((data) => {
  productsDiv.innerHTML = "";
  data.products.map((product) => {
    productsDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${product.images}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.title.substring(0,20)}</h5>
    <p class="card-text">${product.description.substring(0 ,80)}...</p>
    <a href="#" class="btn btn-primary">${product.price}</a>
  </div>
</div>
    `;
  });
 });
};
fetchData();

