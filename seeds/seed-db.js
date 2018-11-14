// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================

db.sequelize.sync().then(function () {
    db.User.bulkCreate([{
        name: 'Michael Toplisek',
        email: 'mtoplisek@gmail.com',
        phone: '4044044400',
        address: '1800 memory lane',
        city: 'atlanta',
        state: 'georgia',
        zip: '30311',
        showaddress: false,
        username: 'mikenator20',
        password: 'blagoodle'
    }, {
        name: 'Summer Smith',
        email: 'galactictraveler@gmail.com',
        phone: '1000000000',
        address: '281 peachtree street',
        city: 'atlanta',
        state: 'georgia',
        zip: '30311',
        showaddress: false,
        username: 'sumsum1',
        password: 'oogleschnoogle'
    }, {
        name: 'Bobby Mcghee',
        email: 'mcghee@gmail.com',
        phone: '1012023300',
        address: '358 piedmont avenue',
        city: 'atlanta',
        state: 'georgia',
        zip: '30311',
        showaddress: false,
        username: 'janisjoplin',
        password: 'songnamedafterme'
    }]).then(function (response) {
        db.Product.bulkCreate([{
            UserId: 2,
            name: 'Big Bubba RV',
            category: 'campers',
            price: 100,
            photoURL: 'https://www.leftcoastclassics.com/1969-volkswagen-westfalia-camper/1969-volkswagen-westfalia-camper-001.jpg',
            reiID: null,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Boardworks Muse Stand Up Paddle Board',
            category: 'watersports',
            price: 45,
            photoURL: 'https://www.rei.com/media/de3b366c-2f9d-49bf-a744-159664e31d3e?size=784x588',
            reiID: 133195,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Emotion Kayaks Revel 10 Kayak',
            category: 'watersports',
            price: 35,
            photoURL: 'https://www.rei.com/media/0fe9f333-7765-4a76-8eca-3833bfaae1ca?size=784x588',
            reiID: 132249,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Co-op Cycles DRT 1.1 Bike',
            category: 'biking',
            price: 60,
            photoURL: 'https://www.rei.com/media/e3294a41-1579-4673-a652-d5d56e805c54?size=784x588',
            reiID: 106331,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'Rossignol Seek 7 Tour Skis',
            category: 'wintersports',
            price: 50,
            photoURL: 'https://www.rei.com/media/acd25073-51f1-4e80-b361-b7bdc90ebdb3?size=784x588',
            reiID: 122694,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'REI Co-op Traverse 35 Pack',
            category: 'backpacking',
            price: 15,
            photoURL: 'https://www.rei.com/media/2e7fc6fd-1a22-441f-a10e-12eff15334c6?size=120x90',
            reiID: 126937,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'Osprey Aether AG 70 Pack - Mens',
            category: 'backpacking',
            price: 25,
            photoURL: 'https://www.rei.com/media/52cfa6be-b375-4f3b-a89d-256044c46080?size=120x90',
            reiID: 111284,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Capita Children of the Gnar Snowboard - Boys',
            category: 'wintersports',
            price: 20,
            photoURL: 'https://www.rei.com/media/eee022ad-d218-4c22-acc8-05200bd1b0b0?size=120x90',
            reiID: 141917,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'REI Co-op Half Dome 2 Plus Tent',
            category: 'camping',
            price: 25,
            photoURL: 'https://www.rei.com/media/0d4d1ab5-0bc4-4946-862c-fdee323530e9?size=120x90',
            reiID: 128692,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Advanced Elements AdvancedFrame Kayak',
            category: 'watersports',
            price: 30,
            photoURL: 'https://www.rei.com/media/f258f1d1-eac1-4e42-9ef2-2b12a7ecd3c3?size=120x90',
            reiID: 736945,
            isAvailable: true
        }]).then(function () {
            console.log('Data successfully added!');
        }).catch(function (error) {
            console.log('Error', error)
        })
    }).catch(function (error) {
        console.log('Error', error)
    });
});
