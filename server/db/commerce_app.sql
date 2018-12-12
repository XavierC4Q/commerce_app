DROP DATABASE IF EXISTS commerce_app;
CREATE DATABASE commerce_app;

\c commerce_app

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL
);

CREATE TABLE footwear (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products (id) UNIQUE,
    product_name TEXT REFERENCES products (product_name) UNIQUE,
    sub_category TEXT NOT NULL
);

CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    product_name TEXT REFERENCES footwear (product_name) UNIQUE,
    product_id INTEGER REFERENCES footwear (product_id),
    male BOOLEAN NOT NULL,
    female BOOLEAN NOT NULL,
    child BOOLEAN NOT NULL,
    sizes TEXT[],
    colors TEXT[]
);



