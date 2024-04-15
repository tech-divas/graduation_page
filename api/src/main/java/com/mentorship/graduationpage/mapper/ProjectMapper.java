package com.mentorship.graduationpage.mapper;

import com.mentorship.graduationpage.dto.ProjectSummaryDTO;
import com.mentorship.graduationpage.dto.ProjectTypeDTO;
import com.mentorship.graduationpage.model.ParticipantEnrollmentEntity;
import com.mentorship.graduationpage.model.ProjectEntity;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProjectMapper {

    ProjectSummaryDTO projectEntityToProjectSummaryDTO(ProjectEntity projectEntity);

    @AfterMapping
    default void mapProjectTypes(ProjectEntity projectEntity, @MappingTarget ProjectSummaryDTO dto) {
        if (projectEntity.getEnrollments() != null) {
            Set<ProjectTypeDTO> projectTypes = ProjectTypeMapper.INSTANCE.entityToDTOSet(projectEntity
                    .getEnrollments().stream()
                    .map(ParticipantEnrollmentEntity::getProjectType)
                    .collect(Collectors.toSet()));
            dto.setProjectTypes(projectTypes);
        }
    }
}