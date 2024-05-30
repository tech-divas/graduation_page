package com.mentorship.graduationpage.repository;

import com.mentorship.graduationpage.model.ParticipantEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ParticipantRepository extends JpaRepository<ParticipantEntity, Integer> {
    @Query("SELECT DISTINCT p " +
            "FROM ParticipantEntity p " +
            "JOIN p.enrollments e " +
            "JOIN e.season s " +
            "JOIN e.field f " +
            "JOIN e.role r " +
            "WHERE s.name = :name")
    Page<ParticipantEntity> findBySeasonName(@Param("name")String seasonName, Pageable pageable);


    @Query("SELECT DISTINCT p FROM ParticipantEntity p " +
            "JOIN p.enrollments e " +
            "JOIN e.season s " +
            "JOIN e.role r " +
            "WHERE r.name IN :roles " +
            "GROUP BY p " +
            "HAVING COUNT(DISTINCT r.name) = 1")
    Page<ParticipantEntity> findByRoleIn(Set<String> roles, Pageable pageable);

    Page<ParticipantEntity> findByNameContainingIgnoreCase(String name, Pageable pageable);
}