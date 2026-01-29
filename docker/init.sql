-- Init SQL pro PostgreSQL databázi
-- Tento soubor se spustí automaticky při prvním spuštění kontejneru

-- Vytvoření databáze (pokud ještě neexistuje)
-- Databáze 'digibezstresu_dev' je již vytvořena přes POSTGRES_DB

-- Příklady tabulek (odkomentujte podle potřeby)
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     name VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS posts (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     content TEXT,
--     user_id INTEGER REFERENCES users(id),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Vytvoření rozšíření (extensions) pokud jsou potřeba
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE EXTENSION IF NOT EXISTS "pgcrypto";

