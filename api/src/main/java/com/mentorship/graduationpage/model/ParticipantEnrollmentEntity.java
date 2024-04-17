package com.mentorship.graduationpage.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.lang.Nullable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "participant_enrollment")
public class ParticipantEnrollmentEntity {
    @Id
    @NonNull
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private RoleEntity role;
    @ManyToOne
    @JoinColumn(name = "season_id")
    private SeasonEntity season;
    @Nullable
    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectEntity project;
    @ManyToOne
    @JoinColumn(name = "field_id")
    private ItFieldEntity field;
    @ManyToOne
    @JoinColumn(name = "participant_id")
    private ParticipantEntity participant;
    @Nullable
    @ManyToOne
    @JoinColumn(name = "project_type_id")
    private ProjectTypeEntity projectType;
}