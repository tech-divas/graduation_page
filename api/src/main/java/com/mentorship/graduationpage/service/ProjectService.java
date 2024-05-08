package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;

import java.util.Optional;
import java.util.Set;

public interface ProjectService {
    Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size);
    Optional<ProjectEntity> getProjectById(int id);
    Page<ProjectEntity> searchProjects(String query, int page, int size);
    Page<ProjectEntity> filterByProjectType(Set<String> projectTypes, int page, int size);
}

