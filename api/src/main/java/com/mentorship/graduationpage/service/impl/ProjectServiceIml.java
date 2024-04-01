package com.mentorship.graduationpage.service.impl;

import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.repository.ProjectRepository;
import com.mentorship.graduationpage.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import static org.springframework.data.domain.PageRequest.of;

@Service
@RequiredArgsConstructor
@Log4j2
public class ProjectServiceIml implements ProjectService {

    private final ProjectRepository projectRepository;

    @Override
    public Page<ProjectEntity> getProjectsBySeasonName(String seasonName, int page, int size) {
        log.info("Fetching projects from page {} of size {}", page, size);
        return projectRepository.findBySeasonName(seasonName, of(page, size));
    }
}