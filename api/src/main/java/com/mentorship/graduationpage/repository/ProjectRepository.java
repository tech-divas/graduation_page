package com.mentorship.graduationpage.repository;

import com.mentorship.graduationpage.model.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, Integer> {
    Page<ProjectEntity> findBySeasonName(String seasonName, Pageable pageable);
}
