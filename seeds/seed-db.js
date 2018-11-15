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
        city: 'juneau',
        state: 'alaska',
        zip: '30311',
        showaddress: false,
        username: 'sumsum1',
        password: 'oogleschnoogle'
    }, {
        name: 'Bobby Mcghee',
        email: 'mcghee@gmail.com',
        phone: '1012023300',
        address: '358 piedmont avenue',
        city: 'san francisco',
        state: 'california',
        zip: '30311',
        showaddress: false,
        username: 'janisjoplin',
        password: 'songnamedafterme'
    }]).then(function (response) {
        db.Product.bulkCreate([{
            UserId: 3,
            name: 'Boardworks Muse Stand Up Paddle Board',
            category: 'watersports',
            price: 45,
            photoURL: 'https://www.rei.com/media/de3b366c-2f9d-49bf-a744-159664e31d3e?size=784x588',
            reiID: 133195,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'School Bus Camper',
            category: 'campers',
            price: 75,
            photoURL: 'http://tinyhousetalk.com/wp-content/uploads/couple-convert-93-ford-school-bus-to-motorhome-cabin-01-600x481.jpg',
            reiID: null,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Big Bubba RV',
            category: 'campers',
            price: 75,
            photoURL: 'https://vanclan.co/wp-content/uploads/2018/08/citroen-type-h-wildcamp-camper-759x500.jpg',
            reiID: null,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Vintage Camper',
            category: 'campers',
            price: 80,
            photoURL: 'http://samghobril.com/wp-content/uploads/2018/06/10-vintage-trailers-up-for-sale-just-in-time-a-summer-road-small-average-camping-trending-7.jpg',
            reiID: null,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'AirStream 3000',
            category: 'campers',
            price: 80,
            photoURL: 'http://tinyhouseswoon.com/wp-content/uploads/2017/10/1955-dalton-camper-1.jpeg',
            reiID: null,
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
            UserId: 3,
            name: 'Diamondback Line 27.5 Bike - 2018',
            category: 'biking',
            price: 50,
            photoURL: 'https://www.rei.com/media/0c5f04be-c7a2-4bb2-b342-473b8a5a3ec9?size=784x588',
            reiID: 124833,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Co-op Cycles ARD 1.1 Bike',
            category: 'biking',
            price: 60,
            photoURL: 'https://www.rei.com/media/ba5f0626-144a-4293-ba74-9ede55721085?size=784x588',
            reiID: 106341,
            isAvailable: true
        }, {
            UserId: 3,
            name: 'Co-op Cycles REV 16 Kids',
            category: 'biking',
            price: 30,
            photoURL: 'https://www.rei.com/media/c78d4488-412e-455c-ab2e-9c232516f520?size=784x588',
            reiID: 113909,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'Ski Boots - Men Size 11',
            category: 'wintersports',
            price: 10,
            photoURL: 'https://www.rei.com/media/e2509b3e-478c-4e7e-b2b8-9472897c495c?size=784x588',
            reiID: 122349,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'MSR Lightning Ascent Snowshoes',
            category: 'wintersports',
            price: 30,
            photoURL: 'https://www.rei.com/media/b4aabada-bc25-45e4-8df2-e4364d219e47?size=784x588',
            reiID: 120297,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'Arbor Element Black Snowboard',
            category: 'wintersports',
            price: 50,
            photoURL: 'https://www.rei.com/media/6d390a99-bc18-4d29-bf7f-45352da29248?size=784x588',
            reiID: 122302,
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
            UserId: 2,
            name: 'Traveller Sleeping Bag Liner with Insect Shield',
            category: 'backpacking',
            price: 5,
            photoURL: 'https://www.rei.com/media/780a8595-fc2e-4255-868d-a237f7205bd4?size=784x588',
            reiID: 867059,
            isAvailable: true
        }, {
            UserId: 2,
            name: 'Outdoor Research Helium Bivy',
            category: 'backpacking',
            price: 10,
            photoURL: 'https://www.rei.com/media/b4c0bff8-f464-46c6-be9f-edeff3cac920?size=784x588',
            reiID: 867215,
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
            name: 'Tepui Tents Ayer Sky 2 Tent',
            category: 'camping',
            price: 20,
            photoURL: 'https://www.rei.com/media/05e632ed-439e-46cf-8b3d-d80475671dbf?size=784x588',
            reiID: 116149,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'ENO DoubleNest Hammock',
            category: 'camping',
            price: 5,
            photoURL: 'https://www.rei.com/media/5b0894ad-aa86-467a-8ec0-18f2b78a3f30?size=784x588',
            reiID: 754773,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'MSR PocketRocket Stove Kit',
            category: 'camping',
            price: 5,
            photoURL: 'https://www.rei.com/media/6d3bb68e-1e99-44c1-90c3-8c7dbe64d09e?size=784x588',
            reiID: 106902,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'RAM Tube Jr. Fishing Rod Holder',
            category: 'fishing',
            price: 5,
            photoURL: 'https://www.rei.com/media/12123b68-9a77-4973-be5d-ac76a3b5cf3a?size=784x588',
            reiID: 127814,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'NRS Sidewinder Dry Bibs Waders',
            category: 'fishing',
            price: 5,
            photoURL: 'https://www.rei.com/media/5b1db312-869f-4b02-8a40-55dd29317ffe?size=784x588',
            reiID: 129711,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Plano 6-Tray Utility Box',
            category: 'fishing',
            price: 3,
            photoURL: 'https://i.ebayimg.com/images/g/mfcAAOSwH35ZoAzJ/s-l300.jpg',
            reiID: null,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Momentum Harness',
            category: 'climbing',
            price: 5,
            photoURL: 'https://www.rei.com/media/bba3dec6-9cfc-4d98-860f-9c3192cae4c2?size=784x588',
            reiID: 126508,
            isAvailable: true
        }, {
            UserId: 1,
            name: '8.4mm x 30m DryXP Rope',
            category: 'climbing',
            price: 2,
            photoURL: 'https://www.rei.com/media/c7a1bad3-f194-4022-a527-113d1f50d1df?size=784x588',
            reiID: 123739,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Screwgate Locking Carabiner - Package of 3',
            category: 'climbing',
            price: 3,
            photoURL: 'https://www.rei.com/media/0a2c4098-1c8d-4d6c-8674-bdb3d1b48958?size=784x588',
            reiID: 899069,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Black Diamond Half Dome Helmet',
            category: 'climbing',
            price: 3,
            photoURL: 'https://www.rei.com/media/8b7e0cb9-cd10-438d-bc7e-e980dcf9eaf5?size=784x588',
            reiID: 831117,
            isAvailable: true
        }, {
            UserId: 1,
            name: 'Black Diamond Mojo Zip Chalk Bag',
            category: 'climbing',
            price: 2,
            photoURL: 'https://www.rei.com/media/526d58dc-2b52-47ac-9f98-e37debd4bf4e?size=784x588',
            reiID: 899004,
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
