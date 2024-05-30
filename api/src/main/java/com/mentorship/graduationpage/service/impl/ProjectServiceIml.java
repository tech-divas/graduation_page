package com.mentorship.graduationpage.service.impl;

import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.repository.ProjectRepository;
import com.mentorship.graduationpage.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

import static org.springframework.data.domain.PageRequest.of;

@Service
@RequiredArgsConstructor
@Log4j2
public class ProjectServiceIml implements ProjectService {

    private final ProjectRepository repository;

    @Override
    public Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size) {
        log.info("Fetching projects from page {} of size {}", page, size);
        return repository.findBySeasonName(seasonName, of(page, size));
    }

    @Override
    public Optional<ProjectEntity> getProjectById(int id) {
        log.info("Fetching project with id {}", id);
        return repository.findById(id);
    }

    @Override
    public Page<ProjectEntity> searchProjects(String query, int page, int size) {
        log.info("Fetching projects according to the query: {}", query);
        return repository.findByNameContainingIgnoreCase(query, of(page, size));
    }

    @Override
    public Page<ProjectEntity> filterByProjectType(Set<String> projectTypes, int page, int size) {
        log.info("Fetching projects with types {}", projectTypes);
        return repository.findDistinctByEnrollmentsProjectTypeNameInIgnoreCase(projectTypes, of(page, size));
    }
}