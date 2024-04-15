package com.mentorship.graduationpage.mapper;

import com.mentorship.graduationpage.dto.ProjectTypeDTO;
import com.mentorship.graduationpage.model.ProjectTypeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import java.util.Set;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProjectTypeMapper {
    ProjectTypeMapper INSTANCE = Mappers.getMapper(ProjectTypeMapper.class);

//    ProjectTypeDTO entityToDTO(ProjectTypeEntity projectTypeEntity);
    Set<ProjectTypeDTO> entityToDTOSet(Set<ProjectTypeEntity> projectTypeEntity);
}
