const PRODUCT_URL = "https://fakestoreapi.com/products";

// const getProducts = (url) => {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// };

// getProducts(PRODUCT_URL);

const getProducts = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts(data);
    }catch(error){
        console.error(error);
    }
};

const productTag = document.querySelector(".products");

const displayProducts = (products) => {

    products.forEach(product => {
        const {image, title, price} = product;
        const productWrapper = document.createElement("div");
        productWrapper.innerHTML = `
        <a href="#">
          <img src="${image}" alt="">
          <p>Title: ${title}</p>
          <p>Price: &#8358; ${price}</p>
        </a>`
        productWrapper.classList.add("images");
        productTag.appendChild(productWrapper)
    })
}

getProducts(PRODUCT_URL);

const search = document.querySelector(".search");