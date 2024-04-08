package com.mentorship.graduationpage.service;

import com.mentorship.graduationpage.dto.ProjectListResponse;
import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size);
    ProjectListResponse createProjectResponse(List<ProjectSummaryDTO> projectSummaryDTOList, Page<ProjectEntity> pageContent);
}

