package com.mentorship.graduationpage.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MentorRole {

    MENTOR("Mentor"),
    MENTOR_WITH_MENTEE("Mentor 1:1");

    private final String value;
}