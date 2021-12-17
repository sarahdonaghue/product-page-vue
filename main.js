var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './assets/vmSocks-blue.jpeg',
      inStock: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-blue.jpeg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.jpeg'
        }
      ],
      cart: 0
    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      },
      removeFromCart() {
        this.cart -= 1
      }
    }
  })
  
  