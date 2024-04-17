package com.mentorship.graduationpage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "season")
public class SeasonEntity {
    @Id
    @NonNull
    private Integer id;
    @NonNull
    private String name;
    @OneToMany(mappedBy = "season")
    private Set<ProjectEntity> projects;
    @OneToMany(mappedBy = "season")
    private Set<ParticipantEnrollmentEntity> enrollments;
}