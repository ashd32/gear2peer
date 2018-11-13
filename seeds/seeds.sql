DROP DATABASE IF EXISTS gear2peerdb;
CREATE DATABASE gear2peerdb;
USE gear2peerdb;
CREATE  TABLE IF NOT EXISTS `users` (
		`name` VARCHAR(150) NOT NULL,
        `email` VARCHAR(150) NOT NULL,
        `phone` VARCHAR(150) NOT NULL,
        `address` VARCHAR(150) NOT NULL,
        `city` VARCHAR(150) NOT NULL,
        `state` VARCHAR(150) NOT NULL,
        `zip` INT NOT NULL,
        `showAddress` BOOLEAN,
        `username` VARCHAR(150) NOT NULL,
        `password` VARCHAR(150) NOT NULL)
	ENGINE = InnoDB;

INSERT INTO users (name, email, phone, address, city, state, zip, showaddress, username, password) VALUES ('Michael Toplisek','mtoplisek@gmail.com','4044044400','1800 memory lane','atlanta', 'georgia', '30311', false, 'mikenator20', 'blagoodle');
INSERT INTO users (name, email, phone, address, city, state, zip, showaddress, username, password) VALUES ('Summer Smith','galactictraveler@gmail.com','1000000000','281 peachtree street','atlanta', 'georgia', '30311', false, 'sumsum1', 'oogleschnoogle');
INSERT INTO users (name, email, phone, address, city, state, zip, showaddress, username, password) VALUES ('Bobby Mcghee','mcghee@gmail.com','1012023300','358 piedmont avenue','atlanta', 'georgia', '30311', false, 'janisjoplin', 'songnamedafterme');


CREATE  TABLE IF NOT EXISTS `products` (
		FOREIGN KEY,
		`name` VARCHAR(150) NOT NULL,
        `category` VARCHAR(150) NOT NULL,
        `price` INT NOT NULL,
        `photoURL` VARCHAR(150) NOT NULL,
        `reiID` VARCHAR(150) NOT NULL,
        `createdAt` DATETIME,
        `updatedAt` DATETIME)
	ENGINE = InnoDB;

INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Advanced Elements AdvancedFrame Kayak", 'kayak', 30, 'https://www.rei.com/media/f258f1d1-eac1-4e42-9ef2-2b12a7ecd3c3?size=120x90', '736945', 1, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("REI Co-op Half Dome 2 Plus Tent", 'tent', 25, 'https://www.rei.com/media/0d4d1ab5-0bc4-4946-862c-fdee323530e9?size=120x90', '128692', 2, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Capita Children of the Gnar Snowboard - Boys", 20, 'snow', 'https://www.rei.com/media/eee022ad-d218-4c22-acc8-05200bd1b0b0?size=120x90', '141917', 3, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Osprey Aether AG 70 Pack - Mens", 'backpack', 25, 'https://www.rei.com/media/52cfa6be-b375-4f3b-a89d-256044c46080?size=120x90', '111284', 1, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("REI Co-op Traverse 35 Pack", 'backpack', 15, 'https://www.rei.com/media/2e7fc6fd-1a22-441f-a10e-12eff15334c6?size=120x90', '126937', 3, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Rossignol Seek 7 Tour Skis", 'snow', 50, 'https://www.rei.com/media/acd25073-51f1-4e80-b361-b7bdc90ebdb3?size=784x588', '122694', 2, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Co-op Cycles DRT 1.1 Bike", 'bike', 60, 'https://www.rei.com/media/e3294a41-1579-4673-a652-d5d56e805c54?size=784x588', '106331', 3, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Emotion Kayaks Revel 10 Kayak", 'kayak', 35, 'https://www.rei.com/media/0fe9f333-7765-4a76-8eca-3833bfaae1ca?size=784x588', '132249', 2, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Boardworks Muse Stand Up Paddle Board", 'paddleboard', 40, 'https://www.rei.com/media/de3b366c-2f9d-49bf-a744-159664e31d3e?size=784x588', '133195', 1, NOW(), NOW());
INSERT INTO products (UserId, name, category, price, photoURL, reiID, createdAt, updatedAt) VALUES ("Big Bubba RV", 'rv', 100, 'https://www.leftcoastclassics.com/1969-volkswagen-westfalia-camper/1969-volkswagen-westfalia-camper-001.jpg', '', 2, NOW(), NOW());

-- updated seeds

INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (1, 'Advanced Elements AdvancedFrame Kayak', 'watersports', 30, 'https://www.rei.com/media/f258f1d1-eac1-4e42-9ef2-2b12a7ecd3c3?size=120x90', '736945', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (1, 'REI Co-op Half Dome 2 Plus Tent', 'camping', 25, 'https://www.rei.com/media/0d4d1ab5-0bc4-4946-862c-fdee323530e9?size=120x90', '128692',true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (1, 'Capita Children of the Gnar Snowboard - Boys', 20, 'wintersports', 'https://www.rei.com/media/eee022ad-d218-4c22-acc8-05200bd1b0b0?size=120x90', true, '141917' NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (2, 'Osprey Aether AG 70 Pack - Mens', 'backpacking', 25, 'https://www.rei.com/media/52cfa6be-b375-4f3b-a89d-256044c46080?size=120x90', '111284', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (2, 'REI Co-op Traverse 35 Pack', 'backpacking', 15, 'https://www.rei.com/media/2e7fc6fd-1a22-441f-a10e-12eff15334c6?size=120x90', '126937', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (2, 'Rossignol Seek 7 Tour Skis ', 'wintersports', 50, 'https://www.rei.com/media/acd25073-51f1-4e80-b361-b7bdc90ebdb3?size=784x588', '122694', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (3, 'Co-op Cycles DRT 1.1 Bike', 'biking', 60, 'https://www.rei.com/media/e3294a41-1579-4673-a652-d5d56e805c54?size=784x588', '106331', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (3, 'Emotion Kayaks Revel 10 Kayak', 'watersports', 35, 'https://www.rei.com/media/0fe9f333-7765-4a76-8eca-3833bfaae1ca?size=784x588', '132249', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (3, 'Boardworks Muse Stand Up Paddle Board', 'watersports', 'https://www.rei.com/media/de3b366c-2f9d-49bf-a744-159664e31d3e?size=784x588', '133195', true, NOW(), NOW());
INSERT INTO Product (UserId, name, category, price, photoURL, reiID, isAvailable, createdAt, updatedAt) VALUES (2, 'Big Bubba RV', 'campers', 100, 'https://www.leftcoastclassics.com/1969-volkswagen-westfalia-camper/1969-volkswagen-westfalia-camper-001.jpg', '', true, NOW(), NOW());