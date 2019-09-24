DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;

CREATE TABLE Products(
	product_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	product_name VARCHAR(45) NOT NULL,
	product_description VARCHAR(45) NOT NULL,
	img_url VARCHAR(255),
	stock_quantity INT(10) NOT NULL DEFAULT 0
);

CREATE TABLE Prices(
	price_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    price DECIMAL(13, 2) DEFAULT 0.00
);

CREATE TABLE Contacts(
	contact_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	contact_name VARCHAR(45) NOT NULL,
	email VARCHAR(255) NOT NULL,
	comments VARCHAR(255)
);

INSERT INTO Products (product_name, product_description, img_url, stock_quantity)
	VALUES
		("MEADE 12\" ACF LX90", "High-Tech Electronic Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564195740/Assets%20ECommerce/Meade-12-Inch-ACF_wrhnhv.jpg", 12),
		("ORION STARBLAST 6i", "Intelliscope Reflector Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564195572/Assets%20ECommerce/Orion_27191_StarBlast_rk4gd8.jpg", 45),
		("ORION SPACEPROBE", "Equatorial Reflector Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564194479/Assets%20ECommerce/Orion_closeup_atchf8.jpg", 30),
		("GRIFFITH TELESCOPE", 'Antique Copper 45\" Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564195377/Assets%20ECommerce/Antique_copper_griffith_astro_telescope_wiigd3.jpg", 60),
		("NAUTICAL SEXTANT", "Antique Brass Nautical Sextant", "https://res.cloudinary.com/connorn/image/upload/v1564195050/Assets%20ECommerce/brass_nautical_sextant_dkesfr.jpg", 50),
		("ORION ASTROGRAPH", '10\" Truss Tube Astrograph', "https://res.cloudinary.com/connorn/image/upload/v1564266150/Assets%20ECommerce/Orion_Ritchey_Chretien_Astrograph.png", 30),
		("SOLARMAX III 90", "Coronado Solar Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564266557/Assets%20ECommerce/Coronado_Solarmax_3_sssrdv.jpg", 20),
		("CGX-L EQUATORIAL", "Celestron 1400 EdgeHD Telescope", "https://res.cloudinary.com/connorn/image/upload/v1564268859/Assets%20ECommerce/celestron_equatorial_telescope_qyjhuj.jpg", 10),
		("AMBASSADOR 80AZ", "Brass Telescope with Wooden Tripod", "https://res.cloudinary.com/connorn/image/upload/v1564269293/Assets%20ECommerce/celestron_ambassador_wvcjmt.png", 70),
		("1875 SEXTANT", "19th Century Marine Sextant c. 1875", "https://res.cloudinary.com/connorn/image/upload/v1564269539/Assets%20ECommerce/19th_century_marine_sextant_fduydc.jpg", 5);
    
INSERT INTO Prices (price)
	VALUES
		(2899.00),
        (479.99),
        (309.99),
        (279.99),
        (54.00),
        (2999.99),
        (4299.00),
        (8699.00),
        (899.99),
        (1800.00);

INSERT INTO Contacts (contact_name, email, comments)
	VALUES
		("Warren Mason", "wmason23@gmail.com", "Great service! 10 out of 10, would buy again!"),
        ("Adyan Harvey", "adarvey1@gmail.com", "Good"),
        ("Heather Reyes", "heatherreyes@yahoo.com", "Customer Service was subpar, but the quality of product was exceptional"),
        ("Arnold Schwarzenegger", "terminator@yahoo.com", "I'll be back"),
        ("Johnny Depp", "wonkascissorhands@google.com", "An amazing contraption. Definitely not eatable"),
        ("Liam Neeson", "goaheadandrun@google.com", "I expect quality service next time. I know where you live"),
        ("Victoria Benson", "victorygal@aol.com", "I bought this for my Steampunk collection, but I find it sadly lacking in quality"),
        ("Charles Bronson", "beatemup@msn.com", "Came in very useful. Who ever knew a telescope works well as a club?"),
        ("Galileo Galilei", "thegalileo@earthlink.net", "I like my design better"),
        ("Erik Destler", "operaghost666@opera.com", "I just came to the realization that I live in a basement. You cannot use a telescope in a basement.");

SELECT * FROM Contacts;

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES ("Uncharted 4", "Video Games", 49.95, 150),
--   ("DOOM", "Video Games", 59.99, 200),
--   ("Crate of Spam", "Food and Drink", 24.50, 50),
--   ("Cool Shades", "Apparel", 75.00, 5),
--   ("Worn Denim Jeans", "Apparel", 54.25, 35),
--   ("Survival Towel", "Necessities", 42.42, 42),
--   ("Bill and Ted's Excellent Adventure", "Films", 15.00, 25),
--   ("Mad Max: Fury Road", "Films", 25.50, 57),
--   ("Monopoly", "Board Games", 30.50, 35),
--   ("Yahtzee", "Board Games", 19.95, 23);