INSERT INTO it_field (id, name) VALUES
(1, 'Product Ownership & Management'),
(2, 'Back-end Development'),
(3, 'Front-end Development'),
(4, 'UI/UX Design'),
(5, 'IT Project Manager'),
(6, 'QA & Testing');

INSERT INTO participant (id, first_name, last_name, field_id, bio, linkedin) VALUES
(1, 'Fiona', 'Green', 6, 'Quality Assurance specialist with a keen eye for detail and a passion for improving software quality.', 'https://www.linkedin.com/in/fionagreen'),
(2, 'George', 'Harris', 2, 'Back-end developer with extensive experience in Node.js and database design.', 'https://www.linkedin.com/in/georgeharris'),
(3, 'Helen', 'Taylor', 5, 'IT Project Manager with a decade of experience managing cross-functional teams and delivering complex projects on time.', 'https://www.linkedin.com/in/helentaylor'),
(4, 'Ian', 'Clark', 4, 'UI/UX designer dedicated to creating intuitive and engaging user experiences for web and mobile applications.', 'https://www.linkedin.com/in/ianclark'),
(5, 'Jessica', 'Miller', 3, 'Front-end developer with a passion for building responsive and accessible websites using React.', 'https://www.linkedin.com/in/jessicamiller'),
(6, 'Kyle', 'Wilson', 1, 'Product Owner with a track record of successfully managing and launching innovative products in tech startups.', 'https://www.linkedin.com/in/kylewilson'),
(7, 'Fiona', 'Garcia', 6, 'Quality Assurance specialist with extensive experience in automated and manual testing for web and mobile applications.', 'https://www.linkedin.com/in/fionagarcia'),
(8, 'George', 'Huang', 6, 'Dedicated QA engineer focused on improving product quality through rigorous testing methodologies and tools.', 'https://www.linkedin.com/in/georgehuang'),
(9, 'Hannah', 'Lee', 4, 'UI/UX designer passionate about creating intuitive and user-friendly digital experiences.', 'https://www.linkedin.com/in/hannahlee'),
(10, 'Ivan', 'Martinez', 6, 'Experienced in designing engaging interfaces and conducting usability testing to enhance user satisfaction.', 'https://www.linkedin.com/in/ivanmartinez'),
(11, 'Julia', 'Nguyen', 6, 'Specializes in crafting seamless user experiences through innovative design and user research.', 'https://www.linkedin.com/in/julianguyen');

INSERT INTO role (id, role) VALUES
(1, 'Mentor'),
(2, 'Expert'),
(3, 'Mentee');

INSERT INTO season (id, name, description, start_at, end_at) VALUES
(1, 'Mentorship 2023', 'Mentorship program for girls who are determined to break into IT', '2024-03-01', '2024-05-31'),
(2, 'Mentorship 2024', 'Another successful season', '2024-06-01', '2024-08-31');

INSERT INTO project (id, name, description, link, season_id) VALUES
(1, 'Green Horizon', 'An initiative to develop sustainable, green technologies for urban environments.', 'https://www.greenhorizon.com', 1),
(2, 'CodeStream', 'A platform enhancing real-time collaboration for developers, integrating seamlessly with existing tools.', 'https://www.codestream.com', 1),
(3, 'MarketMingle', 'An innovative social platform for small businesses to connect with local markets and communities.', 'https://www.marketmingle.com', 1),
(4, 'HealthTrack', 'A health and wellness app focused on personalized fitness and nutrition plans.', 'https://www.healthtrack.com', 1),
(5, 'EduBridge', 'An online learning platform aimed at bridging the gap between traditional education and modern career requirements.', 'https://www.edubridge.com', 2),
(6, 'SpaceQuest', 'A project dedicated to making space exploration data accessible through an interactive website.', 'https://www.spacequest.com', 2);

INSERT INTO participant_role (id, participant_id, role_id, season_id) VALUES
(1, 1, 3, 1),
(2, 8, 1, 1),
(3, 7, 3, 1),
(4, 10, 2, 1),
(5, 2, 3, 1);

INSERT INTO project_role (id, project_id, participant_role_id) VALUES
(1, 4, 1),
(2, 4, 4),
(3, 4, 5);

INSERT INTO sponsor (id, name, logo, link, season_id) VALUES
(1, 'Tech Innovate', '/logos/techinnovate.png', 'https://www.techinnovate.com', 1),
(2, 'Green Future', '/logos/greenfuture.png', 'https://www.greenfuture.com', 1),
(3, 'Health Plus', '/logos/healthplus.png', 'https://www.healthplus.com', 2),
(4, 'EduSmart', '/logos/edusmart.png', 'https://www.edusmart.com', 2);

INSERT INTO technology (id, name) VALUES
(1, 'JavaScript'),
(2, 'React'),
(3, 'Java'),
(4, 'Python'),
(5, 'Angular'),
(6, 'Django'),
(7, 'Spring Boot');

INSERT INTO project_technology (id, project_id, technology_id) VALUES
(1, 1, 1),
(2, 1, 5),
(3, 1, 3),
(4, 2, 1),
(5, 3, 1);
