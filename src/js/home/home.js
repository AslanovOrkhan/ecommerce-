// aos animation function

// const API_URL = "http://localhost:3000/api/products";
// const productList = document.getElementById("product-container");

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//      const products = data;

//     products.forEach((product) => {
//       productList.innerHTML += `
//         <div class="product-item">
//           <img src="${product.image}" class="product-image" alt="${product.description}" />
//           <p class="description">${product.description}</p>
//           <span class="price">$${product.price}</span>
//           <span class="count">Count: ${product.count}</span>  <!-- Changed to 'count' -->
//         </div>
//       `;
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching products:", error);
//   });

// fetch("http://localhost:3000/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const productList = document.getElementById("product-list");

//      productList.innerHTML = data
//       .map(
//         (product) => `
//       <div class="product-item">
//         <h3>${product.image}</h3>
//         <p>Price: $${product.price}</p>
//         <p>${product.description}</p>
//       </div>
//     `
//       )
//       .join("");
//   })
//   .catch((err) => console.error("Xəta baş verdi:", err));
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 7,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
