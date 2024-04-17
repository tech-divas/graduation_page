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
@Table(name = "project_type")
public class ProjectTypeEntity {
    @Id
    @NonNull
    private Integer id;
    @NonNull
    private String name;
    @OneToMany(mappedBy = "projectType")
    private Set<ParticipantEnrollmentEntity> enrollments;
}
