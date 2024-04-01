package com.mentorship.graduationpage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.mentorship.graduationpage.dto.view.View;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto {
    @JsonView(View.Summary.class)
    private Integer id;
    @JsonView({View.Summary.class, View.Detail.class})
    private String name;
    @JsonView(View.Detail.class)
    private String description;
    @JsonProperty("year")
    @JsonView(View.Detail.class)
    private String seasonName;
}