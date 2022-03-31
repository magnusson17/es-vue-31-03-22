var app = new Vue(
    {
        el: "#root",
        data: {
            products: [
                {
                    id: 1,
                    nome: "nike",
                    price: 120,
                    media: "https://source.unsplash.com/random/?shoes",
                },
                {
                    id: 2,
                    nome: "adidas",
                    price: 200,
                    media: "https://source.unsplash.com/random/?shoes",
                },
                {
                    id: 3,
                    nome: "boriello",
                    price: 1300,
                    media: "https://source.unsplash.com/random/?shoes",
                },
                {
                    id: 4,
                    nome: "vans",
                    price: 80,
                    media: "https://source.unsplash.com/random/?shoes",
                },
                {
                    id: 5,
                    nome: "all-star",
                    price: 130,
                    media: "https://source.unsplash.com/random/?shoes",
                },
            ],
            carrello: [],
        },
        methods: {
            addToCart: function(element) {
                console.log(element);
                this.carrello.push(element);
            },

            removeToCart: function(id) {
                this.carrello = this.carrello.filter(
                    (element) => {
                        if (element.id != id) {
                            return true
                        }
                        return false
                    }
                )
            },

            sommaPrice: function() {
                let total = 0;
                this.carrello.forEach(
                    (element) => {
                    total += element.price;
                });
            return total;
            }
        }
    }
)