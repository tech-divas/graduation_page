DROP TABLE IF EXISTS it_field;
DROP TABLE IF EXISTS season;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS participant;
DROP TABLE IF EXISTS sponsor;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS participant_enrollment;

CREATE TABLE season (
id INT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE project (
id INT PRIMARY KEY,
name VARCHAR(100),
description VARCHAR,
season_id INT,
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE it_field (
id INT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE participant (
id INT PRIMARY KEY,
full_name VARCHAR(30),
linkedin VARCHAR(100)
);

CREATE TABLE sponsor (
id INT PRIMARY KEY,
name VARCHAR(30),
season_id INT,
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE role (
id INT PRIMARY KEY,
name VARCHAR(15)
);

CREATE TABLE participant_enrollment (
id INT PRIMARY KEY,
role_id INT,
season_id INT,
project_id INT,
field_id INT,
participant_id INT,
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (season_id) REFERENCES season(id),
FOREIGN KEY (project_id) REFERENCES project(id),
FOREIGN KEY (field_id) REFERENCES it_field(id),
FOREIGN KEY (participant_id) REFERENCES participant(id)
);