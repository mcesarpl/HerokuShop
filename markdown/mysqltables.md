```
$ CREATE TABLE books
  (
    id              INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    price           FLOAT NOT NULL,
    discount        FLOAT NOT NULL,
    writer          VARCHAR(150) NOT NULL,
    genre           VARCHAR(150) NOT NULL,
    createdAt       DATETIME NOT NULL,
    updatedAt       DATETIME
  );

$ CREATE TABLE movies
  (
    id              INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    price           FLOAT NOT NULL,
    discount        FLOAT NOT NULL,
    duration        FLOAT NOT NULL,
    rating          FLOAT NOT NULL,
    createdAt       DATETIME NOT NULL,
    updatedAt       DATETIME
  );

$ CREATE TABLE games
 (
   id              INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name            VARCHAR(150) NOT NULL,
   price           FLOAT NOT NULL,
   discount        FLOAT NOT NULL,
   platform        VARCHAR(150) NOT NULL,
   year            INT unsigned NOT NULL,
   createdAt       DATETIME NOT NULL,
   updatedAt       DATETIME
 );

$ CREATE TABLE carts
  (
    id              INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    abandoned       BOOLEAN DEFAULT FALSE,
    itens           VARCHAR(1200) NOT NULL,
    subtotal        FLOAT NOT NULL,
    discounts       FLOAT NOT NULL,
    taxes           FLOAT NOT NULL,
    total           FLOAT NOT NULL,
    createdAt       DATETIME NOT NULL,
    updatedAt       DATETIME
  );
```