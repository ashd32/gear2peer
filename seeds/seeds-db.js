// Import Database Models
// =============================================================
const db = require('../models');

// Syncing sequelize models 
// =============================================================
db.sequelize.sync().product_name; 
 db.Product.bulkCreate([{
            id: 1,
            product_name: 'Notebook',
            department_name: 'Computers',
            price: '$499.99',
            stock_quantity: 10,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 2,
            product_name: 'Flash Drive',
            department_name: 'Computers',
            price: '$69.99',
            stock_quantity: 100,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 3,
            product_name: 'Messenger Bag',
            department_name: 'Accessories',
            price: '$79.99',
            stock_quantity: 5,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 4,
            product_name: 'Airpods',
            department_name: 'Electronics',
            price: '$199.99',
            stock_quantity: 10,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 5,
            product_name: 'MacBook',
            department_name: 'Computers',
            price: '$1,499.99',
            stock_quantity: 10,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 6,
            product_name: 'Headphones',
            department_name: 'Electronics',
            price: '$129.99',
            stock_quantity: 10,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 7,
            product_name: 'Tablet',
            department_name: 'Electronics',
            price: '$99.99',
            stock_quantity: 10,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 8,
            product_name: 'Camera',
            department_name: 'Electronics',
            price: '$199.99',
            stock_quantity: 5,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 9,
            product_name: 'iPad',
            department_name: 'Electronics',
            price: '$399.99',
            stock_quantity: 15,
            createdAt: '',
            updatedAt: ''
        }, {
            id: 10,
            product_name: 'iPhone',
            department_name: 'Mobile Phones',
            price: '$899.99',
            stock_quantity: 18,
            createdAt: '',
            updatedAt: ''
        }])