function solve() {
   const addButtons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');
   checkoutButton.addEventListener('click', checkout);
   const textArea  = document.querySelector('textarea');
   for (let button of addButtons){
      button.addEventListener('click', addProduct)
   }
   let productList = new Set
   let totalProductsPrice = 0
   function addProduct(event){
      let parent = event.target.parentNode.parentNode
      let productPrice = Number(parent.querySelector('.product-line-price').textContent)
      totalProductsPrice += productPrice
      let productName = parent.querySelector('.product-title').textContent
      productList.add(productName)
      textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
   }
   function checkout(event){
      textArea.textContent += `You bought ${Array.from(productList).join(', ')} for ${totalProductsPrice.toFixed(2)}.`
      for (let button of addButtons){
         button.removeEventListener('click', addProduct)
      }
      checkoutButton.removeEventListener('click', checkout)
   }
}