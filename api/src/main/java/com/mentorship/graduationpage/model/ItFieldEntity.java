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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "it_field")
public class ItFieldEntity {
    @Id
    @NonNull
    private Integer id;
    @NonNull
    private String name;
    @OneToMany(mappedBy = "field")
    private Set<ParticipantEnrollmentEntity> enrollments;
}
