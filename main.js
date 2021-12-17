var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm fuzzy socks',
        image: './assets/vmSocks-green.jpeg',
        inStock: true,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId:2234,
                variantColor: "Green"
            },
            {
                variantId:2235,
                variantColor: "Blue"
            }
        ],
        sizes: ["small", "medium", "large"] ,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    }
})