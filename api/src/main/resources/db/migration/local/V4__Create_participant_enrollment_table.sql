CREATE TABLE participant_enrollment (
    id INT NOT NULL,
    role_id INT NOT NULL,
    season_id INT NOT NULL,
    project_id INT,
    field_id INT NOT NULL,
    participant_id INT NOT NULL,
    project_type_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (season_id) REFERENCES season(id),
    FOREIGN KEY (project_id) REFERENCES project(id),
    FOREIGN KEY (field_id) REFERENCES it_field(id),
    FOREIGN KEY (participant_id) REFERENCES participant(id),
    FOREIGN KEY (project_type_id) REFERENCES project_type(id)
);