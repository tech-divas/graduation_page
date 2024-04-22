package com.mentorship.graduationpage.repository;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, Integer> {

    Page<ProjectEntity> findBySeasonName(String seasonName, Pageable pageable);

    @EntityGraph(attributePaths = {"enrollments.participant"})
    Optional<ProjectEntity> findById(int projectId);
}
