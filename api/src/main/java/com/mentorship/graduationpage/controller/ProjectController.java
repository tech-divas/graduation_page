package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.mapper.ProjectMapper;
import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Get project list by year and page")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found projects",
                    content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ProjectSummaryDTO.class)) }),
            @ApiResponse(responseCode = "404", description = "Projects not found", content = @Content) })
    @GetMapping()
    public ResponseEntity<Page<ProjectSummaryDTO>> getListOfProjectsBySeasonName(
            @Parameter(description = "year") @RequestParam("year") String seasonName,
            @Parameter(description = "page") @RequestParam(defaultValue = "0") int page,
            @Parameter(description = "size") @RequestParam(defaultValue = "9") int size) {
        Page<ProjectEntity> projects = projectService.getProjectsBySeasonName(seasonName, page, size);
        Page<ProjectSummaryDTO> projectDTOPage = projects.map(projectMapper::projectEntityToProjectSummaryDTO);
        log.info("Mapped data:");
        projectDTOPage.getContent().stream().map(ProjectSummaryDTO::toString).forEach(log::info);
        if(projectDTOPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(projectDTOPage);
        }
    }
}