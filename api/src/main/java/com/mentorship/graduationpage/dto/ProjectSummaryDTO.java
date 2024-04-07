package com.mentorship.graduationpage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ProjectSummaryDTO {
    private Integer id;
    private String name;
    private Set<ProjectTypeDTO> projectTypes;
}