CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR,
    season_id INT NOT NULL,
    FOREIGN KEY (season_id) REFERENCES season(id)
);