package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProjectService {
    Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size);
}

