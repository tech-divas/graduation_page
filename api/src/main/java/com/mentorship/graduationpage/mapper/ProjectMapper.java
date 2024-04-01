package com.mentorship.graduationpage.mapper;

import com.mentorship.graduationpage.dto.ProjectDto;
import com.mentorship.graduationpage.model.ProjectEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    ProjectMapper INSTANCE = Mappers.getMapper(ProjectMapper.class);
    @Mapping(source = "season.name", target = "seasonName")
    ProjectDto entityToDtoForProjectList(ProjectEntity projectEntity);
}
