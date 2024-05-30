package com.mentorship.graduationpage.mapper;

import com.mentorship.graduationpage.dto.ParticipantDTO;
import com.mentorship.graduationpage.model.ParticipantEnrollmentEntity;
import com.mentorship.graduationpage.model.ParticipantEntity;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ParticipantMapper {

    ParticipantDTO participantEntityToDto(ParticipantEntity participantEntity);

    @AfterMapping
    default void mapEnrollmentsToDto(ParticipantEntity participantEntity, @MappingTarget ParticipantDTO participantDTO) {
        if (!participantEntity.getEnrollments().isEmpty()) {
            ParticipantEnrollmentEntity enrollment = participantEntity.getEnrollments().iterator().next();
            participantDTO.setField(enrollment.getField().getName());
            participantDTO.setRole(enrollment.getRole().getName());
        }
    }
}