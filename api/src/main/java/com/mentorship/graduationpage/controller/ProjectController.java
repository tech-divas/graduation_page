package com.mentorship.graduationpage.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.mentorship.graduationpage.dto.ProjectDto;
import com.mentorship.graduationpage.dto.view.View;
import com.mentorship.graduationpage.mapper.ProjectMapper;
import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMapper projectMapper;

    @JsonView(View.Summary.class)
    @GetMapping()
    public ResponseEntity<Page<ProjectDto>> getProjectsNamesAndIdBySeasonName(
            @RequestParam("year") String seasonName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "9") int size) {
        Page<ProjectEntity> projects = projectService.getProjectsBySeasonName(seasonName, page, size);
        Page<ProjectDto> projectDtoPage = projects.
                map(projectMapper::entityToDtoForProjectList).
                map(projectDto -> new ProjectDto(projectDto.getId(), projectDto.getName(), projectDto.getDescription(), projectDto.getSeasonName()));
        if(projectDtoPage.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(projectDtoPage);
    }
}