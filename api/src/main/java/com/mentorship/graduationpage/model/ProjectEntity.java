package com.mentorship.graduationpage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "project")
public class ProjectEntity {
    @Id
    private Integer id;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "season_id")
    private SeasonEntity season;
    @OneToMany(mappedBy = "project")
    private Set<ParticipantEnrollmentEntity> enrollments;
}