CREATE TABLE season (
id INT,
name VARCHAR(4),
PRIMARY KEY (id)
);

CREATE TABLE project (
id INT,
name VARCHAR(255),
description VARCHAR,
season_id INT,
link VARCHAR,
PRIMARY KEY (id),
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE it_field (
id INT,
name VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE participant (
id INT,
full_name VARCHAR(75),
linkedin VARCHAR(255),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS sponsor (
id INT,
name VARCHAR(75),
season_id INT,
PRIMARY KEY (id),
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE role (
id INT,
name VARCHAR(75),
PRIMARY KEY (id)
);

CREATE TABLE participant_enrollment (
id INT,
role_id INT,
season_id INT,
project_id INT,
field_id INT,
participant_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (season_id) REFERENCES season(id),
FOREIGN KEY (project_id) REFERENCES project(id),
FOREIGN KEY (field_id) REFERENCES it_field(id),
FOREIGN KEY (participant_id) REFERENCES participant(id)
);