let productsDB = {
    featured: [
        {
            id : 1,
            title: 'Sport Boots',
            price: 10.00,
            imgUrl: "img/featured/1.jpg"
    
        },
        {
            id : 2,
            title: 'Walking shoes',
            price: 12.00,
            imgUrl: "img/featured/2.jpg"
    
        },
        {
            id : 3,
            title: 'School Bag',
            price: 15.00,
            imgUrl: "img/featured/3.jpg"
    
        },
        {
            id : 4,
            title: 'Modern Hat',
            price: 5.00,
            imgUrl: "img/featured/4.jpg",
            
    
        }
        
    ],
    clothes: [
        {
            id : 5,
            title: 'formal',
            price: 100.00,
            imgUrl: "img/clothes/1.jpg"
        },
        {
            id : 6,
            title: 'Dress',
            price: 50.00,
            imgUrl: "img/clothes/2.jpg"
        },
        {
            id : 7,
            title: 'T-shirt',
            price: 15.00,
            imgUrl: "img/clothes/3.jpg"
        },
        {
            id : 8,
            title: 'formal',
            price: 100.00,
            imgUrl: "img/clothes/4.jpg"
        }
    ],
    shoes: [
        {
            id : 9,
            title: 'Black Sport shoes',
            price: 30.00,
            imgUrl: "img/shoes/1.jpg"
        },
        {
            id : 10,
            title: 'Walking shoes',
            price: 40.00,
            imgUrl: "img/shoes/2.jpg"
        },
        {
            id : 11,
            title: 'Red Sport shoes',
            price: 30.00,
            imgUrl: "img/shoes/3.jpg"
        },
        {
            id : 12,
            title: 'Chip Sport shoes',
            price: 15.00,
            imgUrl: "img/shoes/4.jpg"
        }
    ],
    watches: [
        {
            id : 13,
            title: 'Sport Watch',
            price: 30.00,
            imgUrl: "img/watches/1.jpg"
        },
        {
            id : 14,
            title: 'Classic Watch',
            price: 40.00,
            imgUrl: "img/watches/2.jpg"
        },
        {
            id : 15,
            title: 'Brand Watch',
            price: 30.00,
            imgUrl: "img/watches/3.jpg"
        },
        {
            id : 16,
            title: 'Copy Watch',
            price: 15.00,
            imgUrl: "img/watches/4.jpg"
        }
    ],
    all:[
        {
            id : 1,
            title: 'Sport Boots',
            price: 10.00,
            imgUrl: "img/featured/1.jpg"
    
        },
        {
            id : 2,
            title: 'Walking shoes',
            price: 12.00,
            total:2.00,
            imgUrl: "img/featured/2.jpg"
    
        },
        {
            id : 3,
            title: 'School Bag',
            price: 15.00,
            imgUrl: "img/featured/3.jpg"
    
        },
        {
            id : 4,
            title: 'Modern Hat',
            price: 5.00,
            imgUrl: "img/featured/4.jpg"
    
        },
        {
            id : 5,
            title: 'formal',
            price: 100.00,
            imgUrl: "img/clothes/1.jpg"
        },
        {
            id : 6,
            title: 'Dress',
            price: 50.00,
            imgUrl: "img/clothes/2.jpg"
        },
        {
            id : 7,
            title: 'T-shirt',
            price: 15.00,
            imgUrl: "img/clothes/3.jpg"
        },
        {
            id : 8,
            title: 'formal',
            price: 100.00,
            imgUrl: "img/clothes/4.jpg"
        },
        {
            id : 9,
            title: 'Black Sport shoes',
            price: 30.00,
            imgUrl: "img/shoes/1.jpg"
        },
        {
            id : 10,
            title: 'Walking shoes',
            price: 40.00,
            imgUrl: "img/shoes/2.jpg"
        },
        {
            id : 11,
            title: 'Red Sport shoes',
            price: 30.00,
            imgUrl: "img/shoes/3.jpg"
        },
        {
            id : 12,
            title: 'Chip Sport shoes',
            price: 15.00,
            imgUrl: "img/shoes/4.jpg"
        },
        {
            id : 13,
            title: 'Sport Watch',
            price: 30.00,
            imgUrl: "img/watches/1.jpg"
        },
        {
            id : 14,
            title: 'Classic Watch',
            price: 40.00,
            imgUrl: "img/watches/2.jpg"
        },
        {
            id : 15,
            title: 'Brand Watch',
            price: 30.00,
            imgUrl: "img/watches/3.jpg"
        },
        {
            id : 16,
            title: 'Copy Watch',
            price: 15.00,
            imgUrl: "img/watches/4.jpg"
        }
    ]
};
localStorage.setItem('products', JSON.stringify(productsDB.all));