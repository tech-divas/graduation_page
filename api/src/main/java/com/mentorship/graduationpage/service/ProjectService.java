package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ProjectService {
    Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size);

    Optional<ProjectEntity> getProjectById(int id);
}

