DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(60),
  department_name VARCHAR(100),
  price INTEGER(10),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hockey Stick", "Sports", 20, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Throwback Jersey", "Clothing", 80, 26);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dirty Socks", "Clothing", 12, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Used Dog Toy", "Pets", 10, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Crate", "Pets", 90, 23);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fitted Hat", "Clothing", 30, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 3 Games", "Electronics", 30, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Old Computer Charger", "Electronics", 20, 42);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Basketballs", "Sports", 16, 38);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone3", "Electronics", 50, 12);



SELECT * FROM bamazon_db.products;