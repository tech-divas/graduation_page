package com.mentorship.graduationpage.mapper;

import com.mentorship.graduationpage.dto.ParticipantDTO;
import com.mentorship.graduationpage.dto.ProjectDetailsDTO;
import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.model.ParticipantEnrollmentEntity;
import com.mentorship.graduationpage.model.ProjectEntity;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProjectMapper {

    @Mapping(source = "enrollments", target = "participants")
    ProjectDetailsDTO projectEntityToProjectDetailsDTO(ProjectEntity project);

    @Mapping(source = "participant.id", target = "id")
    @Mapping(source = "participant.name", target = "name")
    @Mapping(source = "participant.linkedin", target = "linkedin")
    @Mapping(source = "field.name", target = "field")
    @Mapping(source = "role.name", target = "role")
    ParticipantDTO enrollmentToParticipantDTO(ParticipantEnrollmentEntity enrollment);

    ProjectSummaryDTO projectEntityToProjectSummaryDTO(ProjectEntity project);

    @AfterMapping
    default void mapProjectTypes(ProjectEntity projectEntity, @MappingTarget ProjectSummaryDTO dto) {
        if (projectEntity.getEnrollments() != null) {
            Set<String> projectTypes = projectEntity
                    .getEnrollments().stream()
                    .map(ParticipantEnrollmentEntity::getProjectType)
                    .map(pt -> pt != null ? pt.getName() : null)
                    .collect(Collectors.toSet());
            dto.setProjectTypes(projectTypes);
        }
    }
}