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

import java.util.Set;

@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "role")
public class RoleEntity {
    @Id
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "role")
    private Set<ParticipantEnrollmentEntity> enrollments;
}
