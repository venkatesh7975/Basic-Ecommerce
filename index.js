let root=document.getElementById("root");

let input=document.createElement("input");
input.placeholder="search product";
input.type="text";
root.appendChild(input);
console.log(input.value);
   let data;
async function GetProducts(){
   let res= await fetch("https://fakestoreapi.com/products");
   data=await res.json()
   displayProducts(data); 
}
GetProducts();
let parent=document.createElement("div");
function displayProducts(products){
   parent.innerHTML="";
  products.forEach(function (product){
    console.log(product);
    let div=document.createElement("div");
    div.innerHTML=`<h1 class="title"}>${product.title}</h1>
                   <img src=${product.image} />
                   <p>Rating:${product.rating.rate}</p>
                   <h2>Price: ${product.price}</h2>
                   <p>description : ${product.description}</p>`;

     parent.appendChild(div);
  })
   root.appendChild(parent);
}

input.addEventListener("input",function(){
    console.log(input.value);
    const filterProducts=data.filter(function (product){
        return product.title.toLowerCase().includes(input.value.toLowerCase());
    })
    displayProducts(filterProducts);
})