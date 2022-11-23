function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick)
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);

   const shoppingcart = [];
   const output = document.getElementsByTagName('textarea')[0];
   output.value = '';

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
            const product = ev.target.parentNode.parentNode;
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);

            shoppingcart.push({
               name,
               price
            })
            
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   function checkOut(){

      const products = new Set();
      shoppingcart.forEach(p => products.add(p.name));

      const total = shoppingcart.reduce((t, c) => t + c.price, 0);

      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`
      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
      
   }
}