CREATE TABLE sponsor (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    season_id INT NOT NULL,
    FOREIGN KEY (season_id) REFERENCES season(id)
);