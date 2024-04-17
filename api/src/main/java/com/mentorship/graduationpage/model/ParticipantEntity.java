package com.mentorship.graduationpage.model;

import jakarta.persistence.Column;
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
@Table(name = "participant")
public class ParticipantEntity {
    @Id
    @NonNull
    private Integer id;
    @NonNull
    @Column(name = "full_name")
    private String name;
    @NonNull
    private String linkedin;
    @OneToMany(mappedBy = "participant")
    private Set<ParticipantEnrollmentEntity> enrollments;
}