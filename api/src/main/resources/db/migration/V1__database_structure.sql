CREATE TABLE season (
id INT PRIMARY KEY,
name VARCHAR(30),
description VARCHAR,
start_at DATE,
end_at DATE
);

CREATE TABLE project (
id INT PRIMARY KEY,
name VARCHAR(100),
description VARCHAR,
link VARCHAR,
season_id INT,
FOREIGN KEY (season_id) REFERENCES season(id)
);


CREATE TABLE it_field (
id INT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE participant (
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
field_id INT,
bio VARCHAR,
linkedin VARCHAR(100),
FOREIGN KEY (field_id) REFERENCES it_field(id)
);

CREATE TABLE technology (
id INT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE project_technology (
id INT PRIMARY KEY,
project_id INT,
technology_id INT,
FOREIGN KEY (project_id) REFERENCES project(id),
FOREIGN KEY (technology_id) REFERENCES technology(id)
);

CREATE TABLE sponsor (
id INT PRIMARY KEY,
name VARCHAR(30),
logo VARCHAR(100),
link VARCHAR(100),
season_id INT,
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE role (
id INT PRIMARY KEY,
role VARCHAR(15)
);

CREATE TABLE participant_role (
id INT PRIMARY KEY,
participant_id INT,
role_id INT,
season_id INT,
FOREIGN KEY (participant_id) REFERENCES participant(id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (season_id) REFERENCES season(id)
);

CREATE TABLE project_role (
id INT PRIMARY KEY,
project_id INT,
participant_role_id INT,
FOREIGN KEY (project_id) REFERENCES project(id),
FOREIGN KEY (participant_role_id) REFERENCES participant_role(id)
);

