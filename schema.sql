DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name DECIMAL(10,2) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Jabra Elite Active 65t", "Electronics", 169.99, 100),
("Courtesy of Mattel Mattel Lil' Gleemerz Glowzer Figure", "Toys & Games", 19.99, 62),
("Instant Pot 7-in-1 Multi-Cooker", "Home & Kitchen", 79.99, 50),
("Echo Dot (3rd Gen)", "Amazon Devices", 49.99, 200),
("What Do You Meme?", "Toys & Games", 29.97, 40),
("ZonLi Weighted Blanket", "Home & Kitchen", 63.00, 33),
("Fujifilm Instax Mini 9 Instant Camera", "Electronics", 48.99, 27),
("URPOWER Essential Oil Diffuser", "Beauty & Personal Care", 16.99, 15),
("Haribo Original Gold-Bears Gummi Candy", "Grocery & Gourmet Food", 12.15, 44),
("Wemo Mini Smart Plug", "Tools & Home Improvement", 25.82, 88);