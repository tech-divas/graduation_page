INSERT INTO participant (id, full_name, linkedin) VALUES
(1, 'Fiona Green', 'https://www.linkedin.com/in/fionagreen'),
(2, 'George Harris', 'https://www.linkedin.com/in/georgeharris'),
(3, 'Helen Taylor', 'https://www.linkedin.com/in/helentaylor'),
(4, 'Ian Clark', 'https://www.linkedin.com/in/ianclark'),
(5, 'Jessica Miller', 'https://www.linkedin.com/in/jessicamiller'),
(6, 'Kyle Wilson', 'https://www.linkedin.com/in/kylewilson'),
(7, 'Fiona Garcia', 'https://www.linkedin.com/in/fionagarcia'),
(8, 'George Huang', 'https://www.linkedin.com/in/georgehuang'),
(9, 'Hannah Lee', 'https://www.linkedin.com/in/hannahlee'),
(10, 'Ivan Martinez', 'https://www.linkedin.com/in/ivanmartinez'),
(11, 'Julia Nguyen', 'https://www.linkedin.com/in/julianguyen');

INSERT INTO role (id, name) VALUES
(1, 'Mentor'),
(2, 'Expert'),
(3, 'Mentee');

INSERT INTO it_field (id, name) VALUES
(1, 'Product Ownership & Management'),
(2, 'Back-end Development'),
(3, 'Front-end Development'),
(4, 'UI/UX Design'),
(5, 'IT Project Manager'),
(6, 'QA & Testing');

INSERT INTO season (id, name) VALUES
(1, 'Mentorship 2023'),
(2, 'Mentorship 2024');

INSERT INTO project (id, name, description, season_id) VALUES
(1, 'Green Horizon', 'An initiative to develop sustainable, green technologies for urban environments. https://www.greenhorizon.com', 1),
(2, 'CodeStream', 'A platform enhancing real-time collaboration for developers, integrating seamlessly with existing tools. https://www.codestream.com', 1),
(3, 'MarketMingle', 'An innovative social platform for small businesses to connect with local markets and communities. https://www.marketmingle.com', 1),
(4, 'HealthTrack', 'A health and wellness app focused on personalized fitness and nutrition plans. https://www.healthtrack.com', 1),
(5, 'EduBridge', 'An online learning platform aimed at bridging the gap between traditional education and modern career requirements. https://www.edubridge.com', 2),
(6, 'SpaceQuest', 'A project dedicated to making space exploration data accessible through an interactive website. https://www.spacequest.com', 2);

INSERT INTO participant_enrollment (id, role_id, season_id, project_id, field_id, participant_id) VALUES
(1, 1, 1, 1, 2, 10),
(2, 2, 1, 3, 3, 5),
(3, 1, 1, 3, 3, 4),
(4, 3, 1, null, 6, 2),
(5, 1, 2, 5, 1, 3);

INSERT INTO sponsor (id, name, season_id) VALUES
(1, 'Tech Innovate', 1),
(2, 'Green Future', 1),
(3, 'Health Plus', 2),
(4, 'EduSmart',  2);