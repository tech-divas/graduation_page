package com.mentorship.graduationpage.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MenteeRole {

    MENTEE("Mentee"),
    MENTEE_WITH_MENTOR("Mentee 1:1");

    private final String value;
}