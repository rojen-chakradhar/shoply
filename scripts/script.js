//Cart open and close
document.querySelector('#cart-icon').addEventListener('click', () => {
  document.querySelector('#cart').style.display = "flex";
})

document.querySelector('#close-icon').addEventListener('click', () => {
  document.querySelector('#cart').style.display = "none";
})

// Products List
let productsList = [
  {
    id: 1,
    name: 'MacBook Air M1',
    description: 'Apple produced MacBook Air 1 is a perfect laptop for people who do normal work and to people who code, edit videos and photos.',
    image: 'https://cdn.hukut.com/Macbook-Air-M1-13-inch-price-in-nepal.png1724225783700',
    price: 150,
    qty: 1,
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    description: 'Apple produced MacBook Air 1 is a perfect laptop for people who do normal work and to people who code, edit videos and photos.',
    image: 'https://www.apple.com/newsroom/images/tile-images/Apple_new-macbook-air-wallpaper-screen_03182020.jpg.news_app_ed.jpg',
    price: 200,
    qty: 3,
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    description: 'Apple produced MacBook Air 1 is a perfect laptop for people who do normal work and to people who code, edit videos and photos.',
    image: 'https://i5.walmartimages.com/seo/Restored-Apple-MacBook-Air-MVH2LLA-A2179-13-3-Intel-Core-i5-1030NG7-16GB-RAM-512GB-Storage-Space-Gray-Pre-Owned_30295f1b-250c-4bb7-86f5-20ff343e8500.a38ab56cbb706e73d67521591e37ce02.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    price: 300,
    qty: 0,
  },
  {
    id: 4,
    name: 'MacBook Air M4',
    description: 'Apple produced MacBook Air 1 is a perfect laptop for people who do normal work and to people who code, edit videos and photos.',
    image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/m/a/macbook-air-m4-price-in-nepal_1_3.webp',
    price: 400,
    qty: 5,
  }
];

// Showing products in cart
const prods = document.querySelector('.cart-items');
productsList.map(prod => {
  prods.innerHTML += `
    <a href="#">
      <div class="c-item">
        <p>${prod.id}.</p>
        <div class="c-item-profile">
          <img src="${prod.image}" alt="product image" class="c-item-img">
          <div class="c-item-detail">
            <h4 class="c-item-name">${prod.name}</h4>
            <p class="c-item-desc">${prod.description}</p>
          </div>
        </div>
        <div class="misc">
          <p class="c-item-price">$${prod.price}</p>
          <div>
            <i class="ri-heart-line"></i>
            <i class="ri-delete-bin-line"></i>
          </div>
        </div>
        <div class="c-item-num">
          <i class="ri-subtract-line"></i>
          <p>${prod.qty}</p>
          <i class="ri-add-line"></i>
        </div>
     </div>
    </a>`
});