package com.mentorship.graduationpage.controller;

import com.mentorship.graduationpage.dto.ParticipantDTO;
import com.mentorship.graduationpage.mapper.ParticipantMapper;
import com.mentorship.graduationpage.service.ParticipantService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Participant service", description = "Provides endpoints for participants related operations")
@RestController
@CrossOrigin
@RequiredArgsConstructor
@Log4j2
public class ParticipantController {

    private final ParticipantService participantService;
    private final ParticipantMapper participantMapper;

    @Operation(summary = "Get participants list by role and page.",
            description = "Fetches a paginated list of participants filtered by their role.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Found projects",
                            content = {@Content(mediaType = "application/json", schema = @Schema(allOf = {ParticipantDTO.class, Pageable.class}))}),
                    @ApiResponse(responseCode = "204", description = "No participants found matching the criteria.", content = @Content),
                    @ApiResponse(responseCode = "400", description = "Search query parameter is missing or invalid.", content = @Content),
                    @ApiResponse(responseCode = "500", description = "Internal server error.", content = @Content)})
    @GetMapping("/{role}")
    public ResponseEntity<Page<ParticipantDTO>> getParticipantsByRole(
            @Parameter(description = "The role of the participants to search for. Valid roles include mentees, mentors, experts.", required = true)
            @PathVariable String role,
            @RequestParam(defaultValue = "0", required = false) int page,
            @RequestParam(defaultValue = "40", required = false) int size) {
        Page<ParticipantDTO> participantDtoPage = participantService.findParticipantsByRole(role, page, size)
                .map(participantMapper::participantEntityToDto);
        log.info("Mapped data:");
        participantDtoPage.stream().map(ParticipantDTO::toString).forEach(log::info);
        if(participantDtoPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(participantDtoPage);
        }
    }

    @Operation(summary = "Search participants by name",
            description = "Performs a search across participants based on a provided query name (partial or full name match), returning a paginated list of matching participants.",
            responses = {
                    @ApiResponse(responseCode = "200", description = "Found projects",
                            content = {@Content(mediaType = "application/json", schema = @Schema(allOf = {ParticipantDTO.class, Pageable.class}))}),
                    @ApiResponse(responseCode = "204", description = "No content.", content = @Content),
                    @ApiResponse(responseCode = "400", description = "Search query parameter is missing or invalid.", content = @Content),
                    @ApiResponse(responseCode = "500", description = "Internal server error.", content = @Content)})
    @GetMapping("/search")
    public ResponseEntity<Page<ParticipantDTO>> searchProjects(
            @RequestParam String query,
            @RequestParam(defaultValue = "0", required = false) int page,
            @RequestParam(defaultValue = "40", required = false) int size) {
        Page<ParticipantDTO> participantDtoPage = participantService.searchParticipants(query, page, size)
                .map(participantMapper::participantEntityToDto);
        log.info("Mapped data:");
        participantDtoPage.stream().map(ParticipantDTO::toString).forEach(log::info);
        if(participantDtoPage.isEmpty()){
            log.warn("Project list page {} is empty", page);
            return ResponseEntity.noContent().build();
        } else {
            log.debug("Project list page {} with size {} is found", page, size);
            return ResponseEntity.ok(participantDtoPage);
        }
    }
}