package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;

public interface ProjectService {
    Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size);
}

