package com.mentorship.graduationpage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "project")
public class ProjectEntity {
    @Id
    @NonNull
    private Integer id;
    @NonNull
    private String name;
    @NonNull
    private String description;
    private String link;
    @ManyToOne
    @JoinColumn(name = "season_id")
    private SeasonEntity season;
    @OneToMany(mappedBy = "project")
    private Set<ParticipantEnrollmentEntity> enrollments;
}