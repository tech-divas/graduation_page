package com.mentorship.graduationpage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDetailsDTO {
    private String name;
    private String description;
    private Set<ParticipantDTO> participants;
}