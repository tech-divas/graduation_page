package com.mentorship.graduationpage.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ExpertRole {

    EXPERT( "Expert"),
    PROJECT_EXPERT("Project Expert"),
    GUEST_SPEAKER("Guest Speaker");

    private final String value;
}