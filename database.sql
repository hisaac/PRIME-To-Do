CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  description VARCHAR(2560),
  completed BOOLEAN DEFAULT false
);
