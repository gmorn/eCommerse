-- Таблицы пользователей
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(255),
  password VARCHAR(255),
  role_id INTEGER,
  userlogo TEXT,

  FOREIGN KEY (role_id) REFERENCES roles (id)
);

CREATE TABLE favorite (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  product_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  product_id INTEGER,
  data VARCHAR(255),
  count INTEGER,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

-- Таблицы организаций
CREATE TABLE organizations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  rating REAL,
  product_rating REAL
);

CREATE TABLE organizations_comment (
  id SERIAL PRIMARY KEY,
  data VARCHAR(255),
  rating REAL,
  content TEXT,
  organization_id INTEGER,
  user_id INTEGER,

  FOREIGN KEY (organization_id) REFERENCES organizations (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE staff (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER,
  user_id INTEGER,

  FOREIGN KEY (organization_id) REFERENCES organizations (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- Таблицы поваров
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price REAL,
  category_id INTEGER,
  description TEXT,
  gallery TEXT,
  rating REAL,
  comment_count INTEGER,
  organization_id INTEGER,
  data VARCHAR(255),

  FOREIGN KEY (organization_id) REFERENCES organizations (id)
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE products_comment (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  user_id INTEGER,
  content TEXT,
  rating REAL,
  data VARCHAR(255),

  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);
