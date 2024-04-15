package com.mentorship.graduationpage.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "participant")
public class ParticipantEntity {
    @Id
    private Integer id;
    @Column(name = "full_name")
    private String name;
    private String linkedin;
    @OneToMany(mappedBy = "participant")
    private Set<ParticipantEnrollmentEntity> enrollments;
}