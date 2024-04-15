package com.mentorship.graduationpage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectSummaryDTO {
    private Integer id;
    private String name;
    private Set<ProjectTypeDTO> projectTypes;
}