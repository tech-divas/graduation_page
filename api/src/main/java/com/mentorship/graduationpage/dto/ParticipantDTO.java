package com.mentorship.graduationpage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParticipantDTO {
    private Integer id;
    private String name;
    private String linkedin;
    private String field;
    private String role;
}