const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtn = document.querySelectorAll('.category-btn');

const filterProduct = () =>{
  const searchValue = searchInput.value.toLowerCase();
  const productItems = document.querySelectorAll('.product-item');
  const activeCategory = document.querySelector('.category-btn.active').dataset.category;
  productItems.forEach(item => {
    const title = item.querySelector('h3').innerText.toLowerCase();

    const category = item.dataset.category;

    if((title.includes(searchValue) || searchValue=='') && (category === activeCategory || activeCategory ==='all')){
      item.style.display = 'block'
    }
    else{
      item.style.display = 'none'
    }
  })
}

const setCategory = (e) => {
  // Remove 'active' class from all buttons
  categoryBtn.forEach(btn => {
    btn.classList.remove('active');
  });

  // Add 'active' class to the clicked button
  e.target.classList.add('active');

  // Filter products after category selection
  filterProduct();
};
searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('input', filterProduct);

categoryBtn.forEach(btn => {
  btn.addEventListener('click', setCategory);
})
filterProduct();