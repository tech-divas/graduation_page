package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ProjectDetailsDTO;
import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.mapper.ProjectMapper;
import com.mentorship.graduationpage.model.ProjectEntity;
import com.mentorship.graduationpage.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.Set;

@Tag(name = "Project service", description = "Project controller API")
@RestController
@CrossOrigin
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMapper projectMapper;

    @Operation(description = "Get project list by year and page",
            responses = {
            @ApiResponse(responseCode = "200", description = "Found projects",
                    content = {@Content(mediaType = "application/json", schema = @Schema(allOf = {ProjectSummaryDTO.class, Pageable.class}))}),
                    @ApiResponse(responseCode = "204", description = "No content", content = @Content)})
    @GetMapping
    public ResponseEntity<Page<ProjectSummaryDTO>> getProjectsBySeasonName(
            @RequestParam(defaultValue = "", required = false, value = "year") String seasonName,
            @RequestParam(defaultValue = "0", required = false) int page,
            @RequestParam(defaultValue = "8", required = false) int size) {
        Page<ProjectSummaryDTO> projectSummaryDTOPage = projectService.getProjectsBySeasonName(seasonName, page, size)
                .map(projectMapper::projectEntityToProjectSummaryDTO);
        log.info("Mapped data:");
        projectSummaryDTOPage.stream().map(ProjectSummaryDTO::toString).forEach(log::info);
        if(projectSummaryDTOPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(projectSummaryDTOPage);
        }
    }

    @Operation(description = "Get project by id with participants info",
            responses = {
            @ApiResponse(responseCode = "200", description = "Found project",
                            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ProjectDetailsDTO.class))}),
                    @ApiResponse(responseCode = "400", description = "Bad request", content = @Content),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content),
                    @ApiResponse(responseCode = "500", description = "Internal server error", content = @Content)})
    @GetMapping("/{id}")
    public ResponseEntity<ProjectDetailsDTO> getProjectById(@NonNull @PathVariable int id) {
//        Optional<ProjectDetailsDTO> project = projectService.getProjectById(id)
//                .flatMap(entity -> Optional.ofNullable(projectMapper.projectEntityToProjectDetailsDTO(entity)));
        Optional<ProjectDetailsDTO> project = projectService.getProjectById(id)
                .map(projectMapper::projectEntityToProjectDetailsDTO);
        if (project.isEmpty()) {
            log.warn("Project with id {} is not found.", id);
            return ResponseEntity.notFound().build();
        } else {
            log.debug("Project with id {} is found: {}", id, project);
            return ResponseEntity.ok(project.get());
        }
    }

    @Operation(description = "Search projects by name",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Found projects",
                            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ProjectSummaryDTO.class))}),
                    @ApiResponse(responseCode = "204", description = "No content", content = @Content)})
    @GetMapping("/search")
    public ResponseEntity<Page<ProjectSummaryDTO>> searchProjects(
            @RequestParam String query,
            @RequestParam(defaultValue = "0", required = false) int page,
            @RequestParam(defaultValue = "8", required = false) int size) {
        Page<ProjectSummaryDTO> projectSummaryDTOPage = projectService.searchProjects(query, page, size)
                .map(projectMapper::projectEntityToProjectSummaryDTO);
        log.info("Mapped data:");
        projectSummaryDTOPage.stream().map(ProjectSummaryDTO::toString).forEach(log::info);
        if(projectSummaryDTOPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(projectSummaryDTOPage);
        }
    }

    @Operation(description = "Filter projects by projects types",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Found projects",
                            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ProjectSummaryDTO.class))}),
                    @ApiResponse(responseCode = "204", description = "No content", content = @Content)})
    @GetMapping("/filter")
    public ResponseEntity<Page<ProjectSummaryDTO>> filterByProjectType(
            @RequestParam Set<String> type,
            @RequestParam(defaultValue = "0", required = false) int page,
            @RequestParam(defaultValue = "8", required = false) int size) {
        Page<ProjectSummaryDTO> projectSummaryDTOPage = projectService.filterByProjectType(type, page, size)
                .map(projectMapper::projectEntityToProjectSummaryDTO);
        log.info("Mapped data:");
        projectSummaryDTOPage.stream().map(ProjectSummaryDTO::toString).forEach(log::info);
        if(projectSummaryDTOPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(projectSummaryDTOPage);
        }
    }
}