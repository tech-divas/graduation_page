package com.mentorship.graduationpage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "season")
public class SeasonEntity {
    @Id
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "season")
    @ToString.Exclude
    private Set<ProjectEntity> projects;
    @OneToMany(mappedBy = "season")
    @ToString.Exclude
    private Set<ParticipantEnrollmentEntity> enrollments;
}