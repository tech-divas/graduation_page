CREATE TABLE project_type (
id INT,
name VARCHAR(255),
PRIMARY KEY (id)
);

ALTER TABLE participant_enrollment
ADD COLUMN project_type_id INT,
ADD CONSTRAINT fk_project_type
FOREIGN KEY (project_type_id)
REFERENCES project_type(id);